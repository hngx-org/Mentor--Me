import Link from "next/link";

type cardType = {
  name: string;
  types: string;
  day: number;
  min: number;
  month: string;
  location: string;
};

const MentorSessionCard = ({
  name,
  types,
  location,
  day,
  month,
  min,
}: cardType) => (
  <div className="border-Neutra10 border rounded-lg bg-white py-5 lg:py-10 px-3 flex flex-col gap-2 lg:gap-3">
    <p className="text-Neutra30 text-sm font-normal font-Hanken">{types}</p>
    <h5 className="text-base md:text-lg text-[#121212] font-medium">{name}</h5>
    <p className="text-Neutra30 text-sm font-normal font-Hanken">{location}</p>
    <div className="flex justify-center font-Inter ">
      <div className="border-r border-Neutra10 pr-3 py-2 text-center">
        <h5 className="text-lg lg:text-5xl font-medium">{day}</h5>
        <p className="text-base lg:text-lg font-medium text-[#121212]">
          {month}
        </p>
      </div>
      <div className="pl-3 py-2 text-center">
        <h5 className=" text-lg lg:text-5xl font-medium">{min}</h5>
        <p className="text-base lg:text-lg font-medium text-[#121212]">MINS</p>
      </div>
    </div>
    <Link
      className="w-full border border-[#121212] text-[#121212] text-center border-red block rounded-lg py-2"
      href="#"
    >
      View Detail
    </Link>
  </div>
);

export default MentorSessionCard;
