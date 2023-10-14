/* eslint-disable jsx-a11y/control-has-associated-label */
export default function Loading() {
  return (
    <div className="w-full flex justify-center flex-col">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className="flex max-sm:w-[80%] w-full max-w-[500px] xl:max-w-[800px] px-4 sm:px-6 xl:px-8 pb-6 pt-8 border border-Neutra10 rounded-xl gap-6 flex-col sm:flex-row bg-gradient-to-r from-transparent via-black/before:via-black/20 to-transparent relative  before:absolute before:inset-0
    before:-translate-x-full
    before:animate-shimmer
    before:bg-gradient-to-r
    before:from-transparent before:via-black/20 before:to-transparent isolate overflow-hidden shadow-xl shadow-black/20 before:border-t-2 before:border-b-2 before:border-black/20 my-4 ml-2"
        >
          <div className="max-w-[120px] h-[40px] sm:h-[77px] bg-black/25 rounded-xl">
            <div className="w-[77px] h-[40px] sm:h-[77px]" />
          </div>
          <div className="flex flex-col w-full gap-4">
            <p className="flex w-full justify-between ">
              <span className="h-8 w-72 bg-gray-700/20 rounded-xl" />

              <span className="w-[40px] h-[40px]  bg-cyan-400/20 rounded-full leading-none flex justify-center items-center" />
            </p>

            <p className="w-24 h-4 bg-gray-700/20 rounded-xl" />
            <p className="w-[80%] h-6 bg-gray-700/20 rounded-xl" />
            <div className="hidden sm:flex w-full justify-center gap-4 sm:gap-6 flex-col sm:flex-row">
              <button
                className="py-4  w-full  bg-gray-700/20 rounded-xl"
                type="button"
              />
              <button
                className=" py-4  w-full  bg-gray-700/30 rounded-xl"
                type="button"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
