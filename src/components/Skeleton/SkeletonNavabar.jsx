import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";

const SkeletonNavabar = () => {
  return (
    <div className="flex justify-center gap-4 items-center w-full h-16  text-white bg-gray-900  px-4 animate-pulse fixed z-10">
 {/* <AiOutlineLoading3Quarters className="animate-spin-slow "></AiOutlineLoading3Quarters>  */}
    </div>
  );
};

export default SkeletonNavabar;
