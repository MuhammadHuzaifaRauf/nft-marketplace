import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import nftInstance from "../../utilities/axiosInstance/axiosInstance";

export interface GetNftByCollectionState {
  data: GetNftByCollectionData[];
  isLoading: boolean;
  isError: string | null;
}

const initialState: GetNftByCollectionState = {
  data: [],
  isLoading: false,
  isError: "",
};

export type Contract = {
  address: string;
  chain: string;
};

export interface GetNftByCollectionData {
  collection: string;
  name: string;
  image_url: string;
  description: string;
  item: string;
  identifier: number;
  is_nsfw: boolean;
  contracts: Contract[];
}

export const getNftByCollectionImages = createAsyncThunk(
  "getNftByCollection",

  async (collection_slug: string) => {
    try {
      const getNftByCollectionUrl = `https://api.opensea.io/api/v2/collection/${collection_slug}/nft`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
      };
      const res = await nftInstance.get(getNftByCollectionUrl, options);

      const result: GetNftByCollectionData[] = res.data.nfts.filter(
        (e: GetNftByCollectionData) => e.image_url !== ""
      );
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

export const getNftByCollectionSlice = createSlice({
  name: "getNftByCollection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNftByCollectionImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNftByCollectionImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.data = action.payload;
      })
      .addCase(getNftByCollectionImages.rejected, (state, action) => {
        console.error("Error", action.error.message);
        state.isError = action.error.message || "An error occurred";
      });
  },
});

export default getNftByCollectionSlice.reducer;
