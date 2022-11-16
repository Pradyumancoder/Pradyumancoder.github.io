import React from "react";

const SkeletonTech = () => {
  return (
    <div className="flex flex-col  w-[100%] justify-center mx-auto bg-gradient-to-b from-gray-800 to-black">
      <div className="animate-pulse flex flex-col mt-4 w-[70%] justify-center mx-auto">
        <div className=" bg-slate-700 h-8 w-[24%] rounded ml-8"></div>
        <div className="flex-1 space-y-6 py-1 my-4">
          <div className="space-y-3">
            <div className="grid justify-items-center grid-cols-4 md:grid-cols-7 gap-4">
              <div className="h-16 flex w-[60%] bg-slate-700 rounded "></div> <div className="h-16 flex w-[60%] bg-slate-700 rounded "></div> <div className="h-16 flex w-[60%] bg-slate-700 rounded "></div> <div className="h-16 flex w-[60%] bg-slate-700 rounded "></div> <div className="h-16 flex w-[60%] bg-slate-700 rounded "></div> <div className="h-16 flex w-[60%] bg-slate-700 rounded "></div> <div className="h-16 flex w-[60%] bg-slate-700 rounded "></div> <div className="h-16 flex w-[60%] bg-slate-700 rounded "></div> <div className="h-16 flex w-[60%] bg-slate-700 rounded "></div> <div className="h-16 flex w-[60%] bg-slate-700 rounded "></div> <div className="h-16 flex w-[60%] bg-slate-700 rounded "></div> <div className="h-16 flex w-[60%] bg-slate-700 rounded "></div> <div className="h-16 flex w-[60%] bg-slate-700 rounded "></div> <div className="h-16 flex w-[60%] bg-slate-700 rounded "></div> 
            </div>
            <div className="grid grid-cols-3 gap-4 justify-items-start ml-8">
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

export default SkeletonTech;
