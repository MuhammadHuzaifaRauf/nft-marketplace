import React from "react";
import { Link } from "react-router-dom";
import { CardProps } from "../../helper/types";

const Card: React.FC<CardProps> = ({ item, contract, display }) => {
  return (
    <>
      <div className={`${display}`}>
        <div className="mb-[350px] w-[330px] h-[150px] bg-neutral-500 rounded-[20px] flex-col justify-center items-center">
          <div className=" h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
            <Link
              to={`/nft?id=${item.identifier}&address=${contract.address}&chain=${contract.chain}`}
            >
              <img
                className="w-[330px] h-[296px] rounded-tl-[20px] rounded-tr-[20px]"
                src={item.image_url}
                alt={item.collection.slice(0, 10)}
              />
            </Link>
          </div>
          <div className="h-[173px] px-5 bg-neutral-700 pt-5 pb-[25px] rounded-bl-[20px] rounded-br-[20px] flex-col justify-start items-start flex">
            <div className="pb-2">
              <div className="text-white font-semibold font-Sans capitalize pb-1">
                {item.name.slice(0, 10)}
              </div>
              <div className="flex gap-2">
                <img
                  className="w-6 h-6 rounded-[120px]"
                  src={item.image_url}
                  alt={item.collection.slice(0, 10)}
                />
                <div className="text-white font-normal font-['Space Mono']">
                  {item.name}
                </div>
              </div>
            </div>
            <div className="inline-flex justify-between font-['Space Mono'] gap-24">
              <div className="flex-col items-start">
                <div className="text-zinc-500 text-xl">Price</div>
                <div className="text-white">1.63 ETH</div>
              </div>
              <div className="flex-col items-end">
                <div className="text-zinc-500 text-xl">Highest Bid</div>
                <div className="text-white">0.33 wETH</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
