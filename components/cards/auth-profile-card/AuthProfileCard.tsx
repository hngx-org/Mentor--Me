import Image from "next/image";
// import { useAuthCtx } from "@/context/AuthContext";

// pass in a flex-row-reverse in the style props to align with the nav design
// call useContext here auth context and pass the need value
// default font color is black you can change it ins the styles props
export default function AuthProfileCard({
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
            src={`https://api.dicebear.com/7.x/initials/png?seed=${user}`}
            fill
            alt="profile"
          />
        </div>

        <div className="space-y-0.5 mx-2">
          <p className="font-bold  text-base capitalize ">{user || "hello"}</p>
          <p className="text-sm ">{email || "bye"}</p>
        </div>
      </div>
    </div>
  );
}
