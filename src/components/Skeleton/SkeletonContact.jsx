import React from "react";

const SkeletonContact = () => {
  return (
    <div className="w-full h-max py-20 bg-gradient-to-b to-black from-gray-900  flex flex-col">
      <div className="animate-pulse flex flex-col mt-4 w-[70%] justify-center mx-auto">
        <div className=" bg-slate-700 h-9 w-[24%] rounded ml-5"></div>
        <div className="flex-1 space-y-6 py-1 my-4">
          <div className="space-y-3">
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-6 gap-4 ">
              <div className="md:col-start-1 md:col-end-6 h-12 flex w-[72%] bg-slate-700 rounded "></div>
              <div className="md:col-start-1 md:col-end-6 h-12 flex w-[72%] bg-slate-700 rounded "></div>

              <div className="md:col-start-1 md:col-end-6 h-12 flex w-[72%] bg-slate-700 rounded "></div>
              <div className="md:col-start-1 md:col-end-6 h-12 flex w-[72%] bg-slate-700 rounded "></div>
            </div>
            <div className="grid justify-items-center  ">
              <div className="h-12 w-[200px]  bg-slate-700 rounded mr-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonContact;
