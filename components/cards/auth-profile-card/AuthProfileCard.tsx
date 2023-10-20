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
  profileImg,
}: {
  user: string;
  email: string;
  profileImg: string;
  profession?: string;
  styles?: string;
  path?: string;
}) {
  console.log(user);
  return (
    // ${
    //     path === "profile"
    //       ? "bg-gradient-to-r from-orange-500 via-red-600 to-fuchsia-500 p-[1px] rounded-xl"
    //       : ""
    //   }
    <div
      className={`w-full max-w-[95%] flex justify-between items-center  ${styles} `}
    >
      <div
        className={`flex gap-2 p-1 rounded-xl bg-black  ${
          path === "profile" ? "w-full" : "overflow-hidden"
        }`}
      >
        <div className="w-[15px] h-[15px] sm:w-[40px] sm:h-[40px] rounded-full relative aspect-square">
          <Image
            style={{ objectFit: "cover", borderRadius: "100%" }}
            // src={`https://api.dicebear.com/7.x/initials/png?seed=${user}`}
            src={profileImg}
            fill
            alt="profile"
          />
        </div>

        <div className="flex flex-col">
          <span className="font-bold line-clamp-1 capitalize ">
            {user || "hello"}
          </span>
          <span className="text-sm w-full overflow-ellipsis">
            {email || "bye"}
          </span>
        </div>
      </div>
    </div>
  );
}
