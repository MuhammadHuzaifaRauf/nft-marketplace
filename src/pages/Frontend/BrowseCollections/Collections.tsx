import BrowseCard from "../../../components/browseCard/BrowseCard";
import { useAppSelector } from "../../../redux/hooks/hooks";

export default function Collections() {
  const collections = useAppSelector((state) => state.collections.data);

  const randomNumber = Math.random() * collections?.length;
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-44">
        <div className="flex flex-col lg:w-[1032px] md:w-[768px] sm:w-[375px]  ">
          <div className=" text-white py-3 text-[28px] font-semibold capitalize leading-[39.20px] ms-5 md:ms-6">
            Browse Categories
          </div>
          <div className=" text-white text-base font-normal font-['Work Sans'] leading-snug ms-5 md:ms-6">
            Checkout our weekly updated trending categories.
          </div>
        </div>
        <div className=" mb-3 flex flex-wrap md:justify-around justify-center">
          {collections.slice(randomNumber, randomNumber + 4).map((e, i) => (
            <BrowseCard key={i} item={e} />
          ))}
        </div>
        <div className="flex sm:mt-10 flex-wrap md:justify-around  justify-center">
          {collections.slice(randomNumber + 5, randomNumber + 9).map((e, i) => (
            <BrowseCard key={i} item={e} />
          ))}
        </div>
      </div>
    </>
  );
}
