import React from "react";

const SkeletonGit = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800  w-full text-white h-[100%] pt-16 flex flex-col">
      <div className="animate-pulse flex flex-col mt-4 w-[70%] justify-center mx-auto">
        <div className=" bg-slate-700 h-9 w-[24%] rounded ml-5"></div>
        <div className="flex-1 space-y-6 py-1 my-4">
          <div className="space-y-3">
           
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-6 gap-4 ">
          <div className="md:col-start-1 md:col-end-4 h-52 flex w-[92%] bg-slate-700 rounded "></div>
          <div className="md:col-end-7 md:col-span-3 h-52 flex w-[92%] bg-slate-700 rounded ."></div>
          <div className="md:col-start-1 md:col-end-7 h-52 flex w-[92%] bg-slate-700 rounded "></div>
        </div>
            <div className="grid grid-cols-3 gap-4 justify-items-center ml-8">
              <div className="h-4 w-1/2 bg-slate-700 rounded"></div>
              <div className="h-4 w-1/2 bg-slate-700 rounded"></div> <div className="h-4  w-1/2 bg-slate-700 rounded"></div>
              <div className="h-4 w-1/2 bg-slate-700 rounded"></div>
              <div className="h-4 w-1/2 bg-slate-700 rounded"></div> <div className="h-4 w-1/2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default SkeletonGit;
