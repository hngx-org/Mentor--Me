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
  path,
}: {
  user: string;
  email: string;
  profession?: string;
  styles?: string;
  path?: string;
}) {
  return (
    <div
      className={`w-full max-w-[95%] flex   justify-between items-center  ${styles} ${
        path === "profile"
          ? "bg-gradient-to-r from-orange-500 via-red-600 to-fuchsia-500 p-[2px] rounded-xl"
          : ""
      } `}
    >
      <div
        className={`flex gap-2 p-1 rounded-xl bg-black  ${
          path === "profile" ? "w-full" : "overflow-hidden"
        }`}
      >
        <div className="w-[20px]  h-[20px] sm:w-[54px] sm:h-[54px]  rounded-full relative ">
          <Image
            style={{ objectFit: "cover", borderRadius: "100%" }}
            src={`https://api.dicebear.com/7.x/initials/png?seed=${user}`}
            fill
            alt="profile"
          />
        </div>

        <div className="space-y-0.5 ">
          <p className="font-bold  text-base capitalize ">{user || "hello"}</p>
          <p className="text-sm ">{email || "bye"}</p>
        </div>
      </div>
    </div>
  );
}
