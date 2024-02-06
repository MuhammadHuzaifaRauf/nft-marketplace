import React, { useEffect } from "react";
import WorkCard from "../../../components/workCard/WorkCard";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { collectionsImages } from "../../../redux/slice/getCollectionsSlice";

export default function Work() {
  const dispatch = useAppDispatch();
  const collections = useAppSelector((state) => state.collections.data);

  useEffect(() => {
    dispatch(collectionsImages());
  }, []);

  const numberOfCardsToShow = 3;
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-52">
        <div className="flex flex-col lg:w-[1040px] md:w-[760px] sm:w-[375px]">
          <div className=" text-white py-5 text-[28px] font-semibold capitalize leading-[39.20px] md:ms-2 mt-32">
            How it Works?
          </div>
          <div className=" text-white text-base font-normal font-['Work Sans'] leading-snug md:ms-2">
            Find out how to get started
          </div>
        </div>
        <div className="sm:w-[550px] flex flex-col justify-center items-center  sm:flex-row md:flex-row gap-5 mt-10">
          {collections.slice(0, numberOfCardsToShow).map((e, i) => (
            <WorkCard key={i} item={e} />
          ))}
        </div>
      </div>
    </>
  );
}
