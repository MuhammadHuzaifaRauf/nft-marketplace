// -----Imports-----

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import search from "../../assets/MagnifyingGlass.svg";
import { Link, useParams } from "react-router-dom";
import { getNftByCollectionImages } from "../../redux/slice/getNftByCollectionSlice";
import Card from "../../components/aboutCard/Card";
import { getCollectionImages } from "../../redux/slice/getCollectionSlice";
import { Contract } from "../../helper/types";

// ---------Exporting Default Function---------

export default function Collection() {
  const { collection_slug } = useParams<{ collection_slug: string }>();
  const dispatch = useAppDispatch();

  const getNftByCollection = useAppSelector(
    (state) => state.getNftByCollection.data
  );

  const getCollection = useAppSelector((state) => state.getCollection.data);
  const [loading, setLoading] = useState(true);

  // -----useEffect-----
  useEffect(() => {
    const LoadingData = async () => {
      try {
        await dispatch(getCollectionImages(collection_slug!));
        await dispatch(getNftByCollectionImages(collection_slug!));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    LoadingData();
  }, [collection_slug, dispatch]);

  // -----Loading Function-----
  if (loading) {
    return (
      <div role="status" className="flex justify-center my-56">
        <div className="animate-spin shadow-inner rounded-full h-32 w-32 border-t-4 border-neutral-400 border-solid"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className="py-7">
        <div className="w-full px-8 md:px-20 py-5 bg-zinc-800 flex-col justify-start items-start inline-flex leading-9">
          <div className="py-4 text-white text-4xl sm:text-5xl font-semibold font-['Work Sans'] capitalize">
            {collection_slug?.slice(0, 8)}
          </div>
          <div className="py-3 text-white text-lg sm:text-xl font-normal font-['Work Sans']">
            Browse through more than 50k NFTs on the NFT Marketplace.
          </div>
          <div className="w-full py-5">
            <div className=" border-1 rounded-2xl border border-neutral-700 py-3 px-5 flex flex-row justify-between items-center">
              <input
                title=""
                placeholder="Search your favourite NFTs"
                className="w-full text-zinc-500 bg-zinc-800"
              />
              <img src={search} alt="" />
            </div>
          </div>
        </div>
        <div className="border-neutral-400 h-[1px] bg-zinc-700 w-full" />
      </div>
      <div className="flex flex-col justify-center items-center px-12 md:px-16 lg:px-18 sm:justify-center sm:items-center mb-20">
        <div className="text-white font-bold text-xl font-['Work Sans'] leading-snug mb-3 sm:ms-[-150px] lg:ms-4">
          NFTs
        </div>
        <div className="flex flex-col sm:flex-row md:flex-row  gap-8">
          {getNftByCollection.slice(0, 2).map((e, i) => (
            <Card
              key={i}
              item={e}
              contract={getCollection?.contracts[0] as Contract}
              display="m-2"
            />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row md:flex-row  gap-8">
          {getNftByCollection.slice(2, 4).map((e, i) => (
            <Card
              key={i}
              item={e}
              contract={getCollection?.contracts[0] as Contract}
              display="m-2"
            />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row md:flex-row  gap-8">
          {getNftByCollection.slice(4, 6).map((e, i) => (
            <Card
              key={i}
              item={e}
              contract={getCollection?.contracts[0] as Contract}
              display="m-2"
            />
          ))}
        </div>
        {getNftByCollection.length === 0 && (
          <h1 className="text-[22px] sm:text-[50px] md:text-[60px] text-white font-sans font-semibold">
            Related NFT's are not Available.
          </h1>
        )}
        <Link to="/">
          <button className=" px-6 py-3 lg:py-4  bg-purple-500 rounded-[20px] justify-center items-center inline-flex mt-3 mx-auto">
            <div className="w-5 h-5 relative"></div>
            <div className="text-center text-white text-base font-semibold">
              Back to Home
            </div>
          </button>
        </Link>
      </div>
    </>
  );
}
