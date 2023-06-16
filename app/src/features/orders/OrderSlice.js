import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addOrder} from './orderApi';

const initialState = {
  orders : [],
  currentOrder : null,
  status: 'idle',
};

export const addOrderAsynce = createAsyncThunk(
  'order/addOrder',
  async (order) => {
    const response = await addOrder(order);
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
   resetOrder : (state) => {
    state.currentOrder = null
   }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrderAsynce.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addOrderAsynce.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
        state.currentOrder = action.payload
      });
  },
});



export const selectOrders = state => state.order.orders
export const selectCurrentOrder = (state) => state.order.currentOrder;

export const {resetOrder} = orderSlice.actions

export default orderSlice.reducer;
