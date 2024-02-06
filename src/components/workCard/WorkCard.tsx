import React from "react";
import { CollectionsData } from "../../redux/slice/getCollectionsSlice";
import { Link } from "react-router-dom";

interface WorkCardProps {
  item: CollectionsData;
}

const WorkCard: React.FC<WorkCardProps> = ({ item }) => {
  return (
    <>
      <Link to={`/collection/${item.collection}`}>
        <div className="lg:w-[320px] sm:w-[240px]  pb-[30px] bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
          <div className="lg:w-[320px] sm:w-[240px] w-[240px] h-[250px] md:h-[150px] relative">
            <img
              className="lg:w-[320px] sm:w-[240px] w-[240px] h-[280px] md:h-[220px] rounded-tr-[20px] rounded-tl-[20px]"
              src={item.image_url}
              alt={item.collection.slice(0, 15)}
            />
          </div>
          <div className="h-[129px] flex-col justify-end items-center gap-2.5 flex">
            <div className="text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
              {item.name.slice(0, 15)}
            </div>
            <div className="self-stretch text-center text-white text-base font-normal font-['Work Sans'] leading-snug">
              {item.collection.slice(0, 15)}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default WorkCard;
