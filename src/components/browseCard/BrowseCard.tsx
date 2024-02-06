import React from "react";
import { CollectionsData } from "../../redux/slice/getCollectionsSlice";
import { Link } from "react-router-dom";

interface BrowseCardProps {
  item: CollectionsData;
}

const BrowseCard: React.FC<BrowseCardProps> = ({ item }) => {
  return (
    <>
      <div className="my-16 mx-2">
        <div className="flex flex-col w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60">
          <div className="relative rounded-tl-[20px] rounded-tr-[20px]">
            <Link to={`/collection/${item.collection}`}>
              <img
                className=" relative rounded-tl-[20px] rounded-tr-[20px] w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60 ] "
                src={item.image_url}
                alt={item.collection.slice(0, 10)}
              />
              <div className="bg-neutral-700 rounded-bl-[20px] rounded-br-[20px]">
                <div className=" h-[76px] p-5 pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] inline-flex">
                  <div className=" text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px] justify-center">
                    {item.name.slice(0, 8)}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseCard;
