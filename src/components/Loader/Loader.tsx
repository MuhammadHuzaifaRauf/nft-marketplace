import React from "react";
const Loader: React.FC = () => {
  return (
    <div role="status" className="flex justify-center my-56">
      <div className="animate-spin shadow-inner rounded-full h-32 w-32 border-t-4 border-neutral-400 border-solid"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
