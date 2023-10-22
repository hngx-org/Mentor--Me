import React from "react";

function MentorProfLoading() {
  return (
    <div>
      <div className="h-[100vh] container p-12 max-w-[1020px] mx-auto">
        <div className="flex justify-between  items-center">
          <div className="flex gap-5 items-center">
            <div
              className="bg-slate-200 h-[130px] 
                    w-[130px] rounded-[9999999px]"
            />
            <div className="h-[82px] rounded-2xl w-[200px] flex flex-col justify-between">
              <div className="bg-slate-200 h-[30px] w-full " />
              <div className="bg-slate-200 h-[30px] w-full " />
            </div>
          </div>
          <div className="h-[40px] w-[80px] bg-slate-200 rounded-xl" />
        </div>
        <div className="flex sm:flex-col md:flex-row justify-between item-center">
          <div className="h-[400px] w-[40%] flex flex-col justify-around">
            <div className="bg-slate-200 h-[40px]" />
            <div className="bg-slate-200 h-[40px]" />
            <div className="bg-slate-200 h-[40px]" />
          </div>
          <div className="h-[400px] w-[40%] h-[400px] bg-slate-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default MentorProfLoading;
