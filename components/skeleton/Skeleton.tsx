export default function Skeleton() {
  return (
    <div className="w-[100%] flex flex-col  h-[100%] animate-pulse  px-10">
      <div className=" flex flex-col justify-between w-[100%] items-center  space-y-2 md:flex-row">
        <div className="flex items-center  flex-col md:flex-row">
          <div className="bg-slate-500 h-[90px]  md:h-[150px] md:w-[150px] w-[90px] rounded-full m-2 " />
          <div className="space-y-2">
            <div className="bg-slate-500 h-2 w-[100px]" />
            <div className="bg-slate-500 h-2 w-[100px]" />
            <div className="bg-slate-500 h-2 w-[100px]" />
          </div>
        </div>

        <div className="bg-slate-500  h-[20px] md:h-[40px] w-[90px] rounded-[6px]" />
      </div>

      <div className="w-[100%] my-20 grid md:grid-cols-2 gap-4">
        <div className="space-y-2 my-10">
          <div className="bg-slate-500 h-1 w-[100%] rounded-full" />
          <div className="bg-slate-500 h-1 w-[100%] rounded-full" />
          <div className="bg-slate-500 h-1 w-[100%] rounded-full" />
          <div className="bg-slate-500 h-1 w-[100%] rounded-full" />
          <div className="bg-slate-500 h-1 w-[100%] rounded-full" />
          <div className="bg-slate-500 h-1 w-[100%] rounded-full" />
        </div>
        <div className="space-y-4 my-10 ">
          <div className="bg-slate-500 h-2 w-[40%] rounded-full" />
          <div className="flex w-[100% space-x-2">
            <div className="bg-slate-500 h-[40px] w-[10%] " />
            <div className="w-[100%] space-y-2">
              <div className="bg-slate-500 h-2 w-[80%] rounded-full" />
              <div className="bg-slate-500 h-2 w-[80%] rounded-full" />
            </div>
          </div>
        </div>
        <div className="space-y-4 my-10 ">
          <div className="bg-slate-500 h-2 w-[40%] rounded-full" />
          <div className="flex w-[100% space-x-2">
            <div className="bg-slate-500 h-[40px] w-[10%] " />
            <div className="w-[100%] space-y-2">
              <div className="bg-slate-500 h-2 w-[80%] rounded-full" />
              <div className="bg-slate-500 h-2 w-[80%] rounded-full" />
            </div>
          </div>
        </div>
        <div className="space-y-4 my-10 ">
          <div className="bg-slate-500 h-2 w-[40%] rounded-full" />
          <div className="flex w-[100% space-x-2">
            <div className="bg-slate-500 h-[40px] w-[10%] " />
            <div className="w-[100%] space-y-2">
              <div className="bg-slate-500 h-2 w-[80%] rounded-full" />
              <div className="bg-slate-500 h-2 w-[80%] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
