import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import eye from "../../../assets/Eye.png";
import { collectionsImages } from "../../../redux/slice/getCollectionsSlice";

export default function Highlights() {
  const dispatch = useAppDispatch();

  const collections = useAppSelector((state) => state.collections.data);

  useEffect(() => {
    dispatch(collectionsImages());
  }, [dispatch]);

  return (
    <>
      {collections.slice(20, 21).map((item, i) => {
        return (
          <div key={i}>
            <div className="w-full h-[640px] flex-col justify-start items-center inline-flex">
              <div className="self-stretch px-[195px] pt-[360px] pb-[60px] bg-gradient-to-b from-purple-500 to-purple-500 justify-center items-end inline-flex">
                <div className="h-[220px] w-full justify-around items-end flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-[30px] inline-flex">
                    <div className="px-5 py-2.5 bg-neutral-700 rounded-[20px] justify-start items-center gap-3 inline-flex">
                      <div className="justify-start items-start gap-2.5 flex">
                        <div className="w-6 h-6 justify-center items-center flex">
                          <img
                            className="w-6 h-6 rounded-[120px]"
                            src={item.image_url}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="text-white text-base font-normal font-['Work Sans'] leading-snug">
                        Shroomie
                      </div>
                    </div>
                    <div className="self-stretch text-white text-[51px] font-semibold font-['Work Sans'] capitalize leading-[56.10px]">
                      Magic Mashrooms
                    </div>
                    <div className="h-[60px] px-[50px] py-[22px] bg-white rounded-[20px] justify-center items-center gap-3 inline-flex">
                      <div className="w-5 h-5 relative">
                        <img src={eye} alt="" />
                      </div>
                      <div className="text-center text-zinc-800 text-base font-semibold font-['Work Sans'] leading-snug">
                        See NFT
                      </div>
                    </div>
                  </div>
                  <div className="w-[295px] p-[30px] bg-neutral-700 bg-opacity-50 rounded-[20px] backdrop-blur-[10px] flex-col justify-end items-start gap-2.5 inline-flex">
                    <div className="self-stretch text-white text-xs font-normal font-['Space Mono'] leading-[13.20px]">
                      Auction ends in:
                    </div>
                    <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                        <div className="self-stretch text-white text-[38px] font-bold font-['Space Mono'] capitalize leading-[45.60px]">
                          59
                        </div>
                        <div className="self-stretch grow shrink basis-0 text-white text-xs font-normal font-['Space Mono'] leading-[13.20px]">
                          Hours
                        </div>
                      </div>
                      <div className="text-white text-[28px] font-bold font-['Space Mono'] capitalize leading-[39.20px]">
                        :
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                        <div className="self-stretch text-white text-[38px] font-bold font-['Space Mono'] capitalize leading-[45.60px]">
                          59
                        </div>
                        <div className="self-stretch grow shrink basis-0 text-white text-xs font-normal font-['Space Mono'] leading-[13.20px]">
                          Minutes
                        </div>
                      </div>
                      <div className="text-white text-[28px] font-bold font-['Space Mono'] capitalize leading-[39.20px]">
                        :
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                        <div className="self-stretch text-white text-[38px] font-bold font-['Space Mono'] capitalize leading-[45.60px]">
                          59
                        </div>
                        <div className="self-stretch grow shrink basis-0 text-white text-xs font-normal font-['Space Mono'] leading-[13.20px]">
                          Seconds
                        </div>
                      </div>
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
