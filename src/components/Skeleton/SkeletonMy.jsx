import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SkeletonMy = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800  w-full text-white h-[100%] pt-16 flex flex-col justify-center">
      <div className="animate-pulse flex flex-col mt-4 w-[90%] justify-center mx-auto">
        <div className="grid md:grid-cols-2  space-y-6 py-1 my-4 w-[98%] justify-center items-center">
          <div className="animate-pulse flex flex-col mt-4 w-[108%] justify-center mx-auto">
            <div className=" bg-slate-700 h-10 w-100 rounded"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-4 bg-slate-700 rounded my-2"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-slate-700 rounded "></div>
                  <div className="h-4 bg-slate-700 rounded"></div>
                  <div className="h-4 bg-slate-700 rounded"></div>
                </div>
                <div className="h-4 bg-slate-700 rounded"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-slate-700 rounded "></div>
                  <div className="h-4 bg-slate-700 rounded"></div>
                  <div className="h-4 bg-slate-700 rounded"></div>
                </div>
                <div className="h-4 bg-slate-700 rounded"></div>
              </div>
            </div>
            <div className=" bg-slate-700 h-10 w-40  my-4 rounded"></div>
          </div>
          <div className="md:h-64 md:w-64 h-44 w-44 mx-auto md:mr-4 row-start-1 md:col-start-2  bg-slate-700 rounded-full">
            <div className="flex flex-col justify-center items-center gap-2 animate-pulse ">
              <div className=" flex flex-col items-center gap-4 justify-center my-8 mx-8 md:my-24">
                <p className="font-bold  text-gray-500 ml-4  "> Pro-Picture Loading....</p>
                <AiOutlineLoading3Quarters size={30} color="white" className="animate-spin-slow"></AiOutlineLoading3Quarters>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonMy;
