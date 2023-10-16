import Image from "next/image";

// pass in a flex-row-reverse in the style props to align with the nav design
// call useContext here auth context and pass the need value
export default function ProfileCard({
  user,
  email,
  profession,
  styles,
}: {
  user: string;
  email: string;
  profession?: string;
  styles?: string;
}) {
  return (
    <div className=" w-fit flex flex-col h-fit ">
      <div
        className={`w-[100%] flex  justify-between items-center  ${styles} `}
      >
        <div className="w-[24px]  h-[24px] sm:w-[54px] sm:h-[54px]  rounded-full relative ">
          <Image
            style={{ objectFit: "cover", borderRadius: "100%" }}
            src={`https://api.dicebear.com/7.x/initials/png?seed=${
              user || "0"
            }`}
            fill
            alt="profile"
          />
        </div>

        <div className="space-y-2 mx-2">
          <p className="font-bold  text-sm ">{user}</p>
          <p className="font-bold  text-sm ">{user}</p>
        </div>
      </div>
    </div>
  );
}
