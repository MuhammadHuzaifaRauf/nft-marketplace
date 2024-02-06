import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { Link } from "react-router-dom";
import { collectionsImages } from "../../../redux/slice/getCollectionsSlice";

export default function Subscribe() {
  const dispatch = useAppDispatch();

  const collections = useAppSelector((state) => state.collections.data);

  useEffect(() => {
    dispatch(collectionsImages());
  }, [dispatch]);

  return (
    <>
      {collections.slice(2, 3)?.map((item, i) => {
        return (
          <div key={i}>
            <div className="md:w-full sm:w-[280px] lg:w-[950px] p-[50px] flex justify-center flex-col sm:flex-row mx-auto rounded-3xl bg-neutral-700 mt-10">
              <Link
                to={`/collection/${item.collection}`}
                className="rounded-[20px]"
              >
                <div className=" bg-white">
                  {" "}
                  <img
                    src={item.image_url}
                    className="h-[220px] flex justify-center items-center px-12  "
                  />
                </div>
              </Link>
              <div className="ms-10  flex flex-col flex-wrap  ">
                <div className="w-full text-white text-2xl font-bold capitalize leading-[45.60px]">
                  Join our weekly digest
                </div>
                <div className="w-full text-white font-normal font-['Work Sans'] capitalize leading-9 mt-3">
                  Get exclusive promotions & updates straight to your inbox.
                </div>
                <div className="justify-center mt-3 items-end gap-3 lg:gap-0 flex flex-wrap lg:flex-nowrap w-full">
                  <input
                    className="p-4 ps-6 rounded-[20px] w-full text-zinc-800 justify-center items-center text-base font-normal font-['Work Sans'] leading-snug"
                    placeholder="Enter your email here"
                  />
                  <div className=" bg-purple-500 py-4 px-[34px] w-full relative lg:left-[-32px] lg:w-2/5 rounded-[20px] justify-center items-center  text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
