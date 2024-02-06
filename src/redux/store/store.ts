import { configureStore } from "@reduxjs/toolkit";
import CollectionsReducer from "../slice/getCollectionsSlice";
import collectionImgReducer from "../slice/getCollectionSlice";
import getNftByCollectionReducer from "../slice/getNftByCollectionSlice";
import getNftReducer from "../slice/getNftSlice";

export const store = configureStore({
  reducer: {
    collections: CollectionsReducer,
    getCollection: collectionImgReducer,
    getNftByCollection: getNftByCollectionReducer,
    getNft: getNftReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
