import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import nftInstance from "../../utilities/axiosInstance/axiosInstance";
import { GetCollectionData } from "../../helper/types";

export interface GetCollectionState {
  data: GetCollectionData | null;
  isLoading: boolean;
  isError: string | null;
}

const initialState: GetCollectionState = {
  data: null,
  isLoading: false,
  isError: "",
};

export const getCollectionImages = createAsyncThunk(
  "getCollectionImages",
  async (collection_slug: string) => {
    try {
      const getCollectionUrl = `https://api.opensea.io/api/v2/collections/${collection_slug}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
      };
      const res = await nftInstance.get(getCollectionUrl, options);
      const result: GetCollectionData = res.data;
      return result;
    } catch (error) {
      console.error("Error: ", error);
      if (error instanceof Error) {
        throw new Error(error?.message || "Error while fetching data");
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  }
);

export const getCollectionSlice = createSlice({
  name: "getCollection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCollectionImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCollectionImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.data = action.payload;
      })
      .addCase(getCollectionImages.rejected, (state, action) => {
        console.log("Error", action.error.message);
        state.isLoading = false;
        state.isError = action.error.message || "An error occurred";
      });
  },
});

export default getCollectionSlice.reducer;
