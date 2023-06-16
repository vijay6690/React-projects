import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProduct, fetchAllProductByFilter, fetchCount, fetchProductById } from './ProductApi';

const initialState = {
  products : [],
  brands:[],
  category:[],
  totalItems :0,
  selectedProduct:null,
  status: 'idle',
};

export const fetchALlProductAsynce = createAsyncThunk(
  'product/fetchallproducts',
  async () => {
    const response = await fetchAllProduct();
    return response.data;
  }
);

export const fetchProductByFilterAsynce = createAsyncThunk(
  'product/fetchproductsbyfilter',
  async ({filter,sort,pagination}) => {
    const response = await fetchAllProductByFilter(filter,sort,pagination);
    return response.data;
  }
);


export const fetchProductByIdAsync = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
    const response = await fetchProductById(id);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product', //chenged...
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchALlProductAsynce.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchALlProductAsynce.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
      })
      .addCase(fetchProductByFilterAsynce.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByFilterAsynce.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // console.log(action.payload);
        state.selectedProduct = action.payload;
      })
  },
});


export const selectAllProducts = (state) => state.product.products;
export const selectTotalItems = (state) => state.product.totalItems;
export const selectProductById = (state) => state.product.selectedProduct;



export default productSlice.reducer;
