import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import globe from "../../assets/Globe.svg";
import { Link, useLocation, useParams } from "react-router-dom";
import { getNftImages } from "../../redux/slice/getNftSlice";

export default function Detail() {
  const year = new Date().getFullYear();

  const dispatch = useAppDispatch();

  const location = useLocation();

  const getNft = useAppSelector((state) => state.getNft.data);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const identifier = searchParams.get("id") as string;
    const address = searchParams.get("address") as string;
    const chain = searchParams.get("chain") as string;

    dispatch(getNftImages({ chain, address, identifier }));
  }, [dispatch, location.search]);

  return (
    <>
      <div className="">
        <img
          className="w-full h-[70vh] inset-0 object-cover"
          src={getNft?.image_url}
          alt=""
        />
      </div>
      <div className="w-full px-5 md:px-16 py-10 bg-zinc-800 flex-col justify-between inline-flex">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="py-4">
            <div className="text-white text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-semibold font-Sans capitalize">
              {getNft?.name}
            </div>
            <div className="text-zinc-400 text-xl md:text-lg font-normal font-Sans capitalize leading-9">
              Minted on {year}
            </div>
          </div>
          <div className="hidden sm:block justiy-center w-80 h-60 pt-4 pb-6 md:py-0 relative border-white-1 border-1">
            <img
              src={getNft?.image_url}
              alt={getNft?.collection}
              className="w-309px h-238px md:h-[60vh] rounded-[20px]"
            />
          </div>
        </div>
        <div className="py-6 sm:mt-16 md:mt-[-120px] top-0 flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-zinc-500 text-xl font-bold font-Sans capitalize leading-9">
            Created By
          </div>
          <div className="rounded-2xl justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <img
                className="w-6 h-6 rounded-full"
                src={getNft?.image_url}
                alt=""
              />
            </div>
            <div className="text-white text-lg font-semibold font-Sans capitalize leading-loose">
              {getNft?.name}
            </div>
          </div>
        </div>
        <div className="flex-wrap w-[80vw] lg:w-[50vw] xl:w-[60vw] py-5 flex-col justify-start items-start gap-2.5 flex">
          <div className="w-96 text-zinc-500 text-xl font-bold font-Sans capitalize leading-9">
            Description
          </div>
          <div className="w-[80vw] md:[60vw] lg:w-[50vw] xl:w-[60vw] text-white text-xl font-normal font-Sans leading-9">
            {getNft?.description}
            {getNft?.description.length === 0 && (
              <h3 className="text-[20px] sm:text-[22px] md:text-[30px] text-white font-Sans font-semibold">
                Related description is not Available.
              </h3>
            )}
          </div>
        </div>
        <div className="py-5 flex-col justify-start items-start gap-2.5 flex">
          <div className="text-zinc-500 text-xl font-bold font-Sans capitalize leading-9">
            Details
          </div>
          <div className="justify-start items-start gap-2.5 inline-flex">
            <div className="w-8 h-8 relative">
              <img src={globe} alt="" />
            </div>
            <div className="grow shrink basis-0 text-white text-xl font-normal font-Sans leading-9">
              View on Etherscan
            </div>
          </div>
          <div className="justify-start items-start gap-2.5 inline-flex">
            <div className="w-8 h-8 relative">
              <img src={globe} alt="" />
            </div>
            <div className="grow shrink basis-0 text-white text-xl font-normal font-Sans leading-9">
              View Original
            </div>
          </div>
        </div>
        <div className="py-5 flex-col justify-start items-start gap-5 flex">
          <div className="text-zinc-500 text-2xl font-semibold font-Sans capitalize leading-loose">
            Tags
          </div>
          <div className="justify-start items-start inline-flex gap-5">
            <div className="flex-col md:flex-row text-center text-white text-base font-Sans uppercase gap-5">
              <button
                type="button"
                className="bg-zinc-700 rounded-full py-3 px-5 me-2"
              >
                Animation
              </button>
              <button
                type="button"
                className="bg-zinc-700 rounded-full py-3 px-5 mx-2"
              >
                illustration
              </button>
              <button
                type="button"
                className="bg-zinc-700 rounded-full py-3 px-5 ms-2 hidden"
              >
                moon
              </button>
            </div>
          </div>
          <Link to="/">
            <button className=" px-6 py-3 lg:py-4  bg-purple-500 rounded-[20px] justify-center items-center inline-flex mt-3 mx-auto">
              <div className="w-5 h-5 relative"></div>
              <div className="text-center text-white text-base font-semibold">
                Back to Home
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
