import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { collectionsImages } from "../../redux/slice/getCollectionsSlice";
import { Link } from "react-router-dom";

interface ImageData {
  image_url: string;
  collection: string;
  name: string;
}

interface DiscoverCardProps {
  display?: string;
}

const DiscoverCard: React.FC<DiscoverCardProps> = ({ display }) => {
  const dispatch = useAppDispatch();
  const collections = useAppSelector((state) => state.collections.data);

  useEffect(() => {
    dispatch(collectionsImages());
  }, [dispatch]);

  const randomNumber = Math.random() * collections?.length;

  return (
    <>
      {collections
        .slice(randomNumber, randomNumber + 1)
        .map((item: ImageData, i: number) => (
          <div key={i} className={`${display}`}>
            <div className="w-full h-[310px] bg-neutral-500 rounded-[20px] flex-col justify-center items-center mb-3">
              <div className="self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
                <Link to={`/collection/${item.collection}`}>
                  <img
                    className="w-[330px] h-[296px] rounded-tl-[20px] rounded-tr-[20px]"
                    src={item.image_url}
                    alt={item.collection.slice(0, 15)}
                  />
                </Link>
              </div>
              <div className="self-stretch h-[173px] px-[30px] bg-neutral-700 pt-5 pb-[25px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-start items-start gap-[25px]">
                <div className="self-stretch h-[60px] flex flex-col justify-start items-start gap-[5px]">
                  <div className="self-stretch text-white text-[22px] font-semibold work-sans capitalize leading-[30.80px]">
                    {item.name.slice(0, 15)}
                  </div>
                  <div className="self-stretch justify-start items-start gap-3 inline-flex">
                    <div className="justify-start items-start gap-2.5 flex">
                      <div className="w-6 h-6 justify-center items-center flex">
                        <img
                          className="w-6 h-6 rounded-[120px]"
                          src={item.image_url}
                          alt={item.collection.slice(0, 15)}
                        />
                      </div>
                    </div>
                    <div className="grow shrink basis-0 text-white text-base font-normal space-mono leading-snug">
                      MoonDancer
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 pr-[21px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-zinc-500 text-xs font-normal space-mono leading-[13.20px]">
                      Price
                    </div>
                    <div className="self-stretch text-white text-base font-normal space-mono leading-snug">
                      1.63 ETH
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-end gap-2 inline-flex">
                    <div className="self-stretch text-right text-zinc-500 text-xs font-normal space-mono leading-[13.20px]">
                      Highest Bid
                    </div>
                    <div className="self-stretch text-right text-white text-base font-normal space-mono leading-snug">
                      0.33 wETH
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default DiscoverCard;
