import React from "react";

const SkeleteonProject = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800  w-full text-white h-[100%] pt-16 flex flex-col">
      <div className="animate-pulse flex flex-col mt-4 w-[70%] justify-center mx-auto">
        <div className=" bg-slate-700 h-8 w-[24%] rounded ml-8"></div>
        <div className="flex-1 space-y-6 py-1 my-4">
          <div className="space-y-3">
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 gap-4">
              <div className="h-64 flex w-[80%] bg-slate-700 rounded "></div> <div className="h-64 w-[80%] bg-slate-700 rounded "></div>
              <div className="h-64 w-[80%] bg-slate-700 rounded "></div> <div className="h-64 w-[80%] bg-slate-700 rounded "></div>
              <div className="h-64 w-[80%] bg-slate-700 rounded "></div> <div className="h-64 w-[80%] bg-slate-700 rounded "></div>
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

export default SkeleteonProject;
