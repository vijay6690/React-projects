import { RootState } from "../../redux/store";
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  AsyncThunk,
  AnyAction,
} from "@reduxjs/toolkit";
import userService from "../services/users.service";
import { toast } from "react-toastify";
// import Router from "next/router";
// import { convertToStandardFile } from "../../utils";

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;

export const login: any = createAsyncThunk(
  "auth/login",
  async ({ payload, from }: any) => {
    const { data } = await userService.login(payload);
    data.from = from;
    return data;
  }
);

export const registerUser: any = createAsyncThunk(
  "auth/register",
  async (createUser: any) => {
    try {
      const data = await userService.register(createUser);
      return data?.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

interface State {
  user: any;
  loading: boolean;
  error: string | undefined;
  isAuthenticated: boolean | undefined;
}

const initialState: State = {
  user: null,
  loading: false,
  error: undefined,
  isAuthenticated: undefined,
};

const isPendingAction = (action: AnyAction): action is PendingAction =>
  action.type.startsWith(userSlice.name) && action.type.endsWith("/pending");
const isRejectedAction = (action: AnyAction): action is RejectedAction =>
  action.type.startsWith(userSlice.name) && action.type.endsWith("/rejected");

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser: (state: any, action: PayloadAction<any>) => {
      return { ...state, currentUser: action.payload };
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(login.fulfilled, (state: any, action: any) => {
        toast.success(action?.payload?.message);
        if (action.payload.data?.data?.status === true) {
          if (action.payload.data?.data.role === "admin") {
            // Router.push("/admin/dashboard");
          } else {
            if (action.payload.from === "wishlist") {
              // Router.push("/wishlist");
            } else {
              // Router.push("/");
            }
          }
          toast.success(action.payload.message);
          return {
            ...state,
            loading: false,
            user: action.payload.data.data,
            isAuthenticated: true,
          };
        } else {
          // action.payload?.message && toast.error(action.payload?.message);
          toast.error(action.payload.error?.message);
          return {
            ...state,
            loading: false,
            user: initialState.user,
            isAuthenticated: initialState.isAuthenticated,
          };
        }
      })
      .addCase(registerUser.fulfilled, (state: any, action: any) => {
        if (
          action.payload.statusCode === 201 ||
          action.payload.status === 200
        ) {
          toast.success(action.payload.message);
          //   Navigate("/login")
          return {
            ...state,
            loading: false,
            user: action.payload.data,
          };
        } else {
          toast.error(action.payload.message);
          return {
            ...state,
            loading: false,
          };
        }
      })
      .addMatcher(isPendingAction, (state: any) => {
        state.loading = true;
      })
      .addMatcher(isRejectedAction, (state: any) => {
        state.loading = false;
      });
  },
});

export const userReducer = userSlice.reducer;
export const userSelector = (state: RootState) => state.user;
