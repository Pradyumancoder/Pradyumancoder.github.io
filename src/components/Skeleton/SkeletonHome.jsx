import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SkeletonHome = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 text-white h-[100%] pt-16 flex flex-col justify-center">
      <div className="animate-pulse flex flex-col mt-4 w-full md:w-[90%] justify-center mx-auto gap-4">
        <div className="grid md:grid-cols-2 grid-cols-1  space-y-6 py-1 my-4 w-[98%] justify-center items-center">
          <div className="animate-pulse flex flex-col mt-4 w-[96%] justify-center mx-auto ">
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
            <div className="justify-center mx-auto bg-slate-700 h-10 w-40  my-4 rounded"></div>
          </div>
          <div className="md:h-64 md:w-64 h-[7.8rem] w-[7.8rem] mx-auto md:mr-4 row-start-1 md:col-start-2 animate-pulse  bg-slate-700 rounded-full">
            <div className="flex flex-col justify-center items-center gap-2 animate-pulse ">
              <div className=" flex flex-col items-center md:gap-4 justify-center my-8 mx-8 md:my-20">
                {/* <p className="font-bold hidden md:block text-gray-500 ml-2  "> Pro-Picture</p>
                <p className="font-bold  text-gray-500 ml-3  "> </p>
                <AiOutlineLoading3Quarters size={20} color="white" className="animate-spin-slow m-auto"></AiOutlineLoading3Quarters> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonHome;
