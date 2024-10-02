import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  filteredProducts: [],
  query: "",
  loading: false,
};

export const fetchProducts = createAsyncThunk("fetchProducts", () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data)
    .catch((error) => console.log(error.message));
});
export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const searchText = action.payload.txt;
      console.log("searchtext is", searchText);

      if (!searchText) {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter((product) =>
          product.title.toLowerCase().includes(searchText.toLowerCase())
        );
        console.log("filteredproducts are", state.filteredProducts);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.filteredProducts = [];
        state.error = action.payload;
      });
  },
});
export const { filterProducts } = ProductSlice.actions;
