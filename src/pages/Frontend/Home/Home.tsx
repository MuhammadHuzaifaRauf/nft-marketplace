import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import rocket from "../../../assets/RocketLaunch.png";
import { Link } from "react-router-dom";
import { collectionsImages } from "../../../redux/slice/getCollectionsSlice";

export default function Home() {
  const dispatch = useAppDispatch();

  const collections = useAppSelector((state) => state.collections.data);

  useEffect(() => {
    dispatch(collectionsImages());
  }, []);

  return (
    <>
      {collections.slice(4, 5)?.map((item, i) => {
        return (
          <div key={i}>
            <div className="py-20 bg-zinc-800 flex flex-col items-center">
              <div className="flex justify-center flex-wrap">
                <div className="px-6">
                  <div className="w-[310px] items-center justify-center flex md:w-[330px] lg:w-[450px] ms-4 mb-5 text-white text-[30px] lg:text-[67px] font-semibold leading-[45.60px] lg:leading-[73.70px]">
                    Discover Digital Art & Collect NFTs
                  </div>
                  <div className="md:max-w-[330px] w-[320px] mb-4 ms-4 text-white text-base font-normal leading-snug">
                    NFT marketplace UI created with Anima for Figma. Collect,
                    buy and sell art from more than 20k NFT artists.
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className=" bg-neutral-700 rounded-[20px] ">
                    <Link to={`/collection/${item.collection}`}>
                      <img
                        className="w-[300px] sm:w-[330px] h-[221px] lg:w-[480px] lg:h-[390px] rounded-tl-[20px] rounded-tr-[20px]"
                        src={item.image_url}
                        alt={item.collection}
                      />
                      <div className="m-5">
                        <div className="max-w-[290px] mb-2.5 text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                          {item.name.slice(0, 7)}
                        </div>
                        <div className="flex">
                          <img
                            className="w-6 h-6 me-3 rounded-[120px]"
                            src={item.image_url}
                            alt={item.collection}
                          />
                          <div className="max-w-[254px] text-white text-base font-normal font-['Work Sans'] leading-snug">
                            Animakid
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[300px] sm:relative sm:top-[-149px] sm:left-[-180px] md:left-[-180px] lg:left-[-315px]">
                <button className=" mt-5 w-[300px] sm:mt-2 py-auto rounded-full flex justify-center items-center sm:item-start h-[60px] text-center text-white bg-purple-500">
                  <img
                    className="hover:text-purple-500 w-5 h-5 me-3"
                    src={rocket}
                    alt=""
                  />
                  Get Started
                </button>
                <div className="flex justify-around mt-6 relative lg:right-[-70px] ">
                  <div className="">
                    <div className="lg:w-[150px] text-white sm:w-[90px] sm:text-[22px] lg:text-[28px] font-bold font-['Space Mono'] leading-[39.20px]">
                      240k+{" "}
                    </div>
                    <div className="lg:w-[150px] sm:w-[90px] text-white text-base font-normal font-['Work Sans'] leading-snug">
                      Total Sale
                    </div>
                  </div>
                  <div className="">
                    <div className="lg:w-[150px] text-white sm:w-[90px] sm:text-[22px] lg:text-[28px] font-bold font-['Space Mono'] leading-[39.20px]">
                      100k+{" "}
                    </div>
                    <div className="lg:w-[150px] sm:w-[90px] text-white text-base font-normal font-['Work Sans'] leading-snug">
                      Auctions
                    </div>
                  </div>
                  <div className="">
                    <div className="lg:w-[150px] text-white sm:w-[90px] sm:text-[22px] lg:text-[28px] font-bold font-['Space Mono'] leading-[39.20px]">
                      240k+{" "}
                    </div>
                    <div className="lg:w-[150px] sm:w-[90px] text-white text-base font-normal font-['Work Sans'] leading-snug">
                      Artist
                    </div>
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
