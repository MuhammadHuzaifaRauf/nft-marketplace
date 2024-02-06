import React from "react";
import { CollectionsData } from "../../redux/slice/getCollectionsSlice";
import { Link } from "react-router-dom";

interface Display {
  display: string;
}

interface BoxProps {
  item: CollectionsData;
  display?: Display | string;
}

const Box: React.FC<BoxProps> = ({ item, display }) => {
  return (
    <>
      <div>
        <div className={`${display}`}>
          <div className="mx-2 py-14 flex flex-wrap justify-center  ">
            <div className="max-w-[330px] bg-zinc-800 rounded-[20px] flex-col justify-start items-start gap-[15px] inline-flex">
              <div className=" h-[445px] flex-col justify-start items-start gap-[15px] flex">
                <div className="max-w-[375px]">
                  <Link to={`/collection/${item.collection}`}>
                    <img
                      className=" h-[300px] mx-2 my-5 rounded-[20px]"
                      src={item.image_url}
                      alt=""
                    />
                  </Link>
                  <div className="items-center justify-between gap-[15px] inline-flex">
                    <Link to={`/collection/${item.collection}`}>
                      <img
                        className=" basis-0 h-[100px] max-w-[100px] rounded-[20px]"
                        src={item.image_url}
                        alt=""
                      />
                    </Link>
                    <Link to={`/collection/${item.collection}`}>
                      <img
                        className=" basis-0 h-[100px] max-w-[100px] rounded-[20px]"
                        src={item.image_url}
                        alt=""
                      />
                    </Link>
                    <div className=" basis-0 h-[100px] px-[14px] py-8 bg-purple-500 rounded-[20px] flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-white text-[22px] font-bold font-['Work Sans'] capitalize leading-9">
                        1025+
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" h-[65px] flex-col justify-start items-start gap-2.5 flex">
                  <div className=" text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                    {item.name.slice(0, 10)}
                  </div>
                  <div className=" rounded-[20px] justify-start items-start gap-3 inline-flex">
                    <div className="justify-start items-start gap-2.5 flex">
                      <div className="w-6 h-6 justify-center items-center flex">
                        <img
                          className="w-6 h-6 rounded-[100px]"
                          src={item.image_url}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" basis-0 text-white text-base font-normal font-['Work Sans']">
                      {item.collection.slice(0, 10)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
