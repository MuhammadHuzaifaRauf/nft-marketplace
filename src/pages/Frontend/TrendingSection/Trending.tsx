import React, { useEffect, useState } from "react";
import Box from "../../../components/trendingBox/Box";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { collectionsImages } from "../../../redux/slice/getCollectionsSlice";

export default function Trending() {
  const dispatch = useAppDispatch();
  const collections = useAppSelector((state) => state.collections.data);

  useEffect(() => {
    dispatch(collectionsImages());
  }, [dispatch]);

  const numberOfCardsToShow = 2;

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col lg:w-[1046px] md:w-[768px] sm:w-[375px]">
          <div className="text-white py-5 text-[28px] font-semibold capitalize leading-[39.20px] ms-5 md:ms-10">
            Trending Collection
          </div>
          <div className="text-white text-base font-normal font-['Work Sans'] leading-snug ms-5 md:ms-10">
            Checkout our weekly updated trending collection.
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center ">
          {collections.slice(0, numberOfCardsToShow).map((e, i) => (
            <Box key={i} item={e} display="m-2" />
          ))}
        </div>
      </div>
    </>
  );
}
