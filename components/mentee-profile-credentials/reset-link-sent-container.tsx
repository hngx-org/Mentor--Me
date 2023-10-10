import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import PriorityPrimaryStatedefaul from "./priority-primary-statedefaul";
import "../../app/(mentee)/mentee-profile-creation/page.module.css";

type ResetLinkSentContainerType = {
  notificationMessage?: string;
  resetPasswordMessage?: string;
  actionButtonText?: string;

  /** Style props */
  propCursor?: CSSProperties["cursor"];

  /** Action props */
  onButtonLarge2Click?: () => void;
};

const ResetLinkSentContainer: NextPage<ResetLinkSentContainerType> = ({
  notificationMessage,
  resetPasswordMessage,
  actionButtonText,
  propCursor,
  onButtonLarge2Click,
}) => {
  const priorityPrimaryStatedefaulStyle: CSSProperties = useMemo(() => ({
      cursor: propCursor,
    }), [propCursor]);

  return (
    <div className="absolute top-[145px] left-[119px] flex flex-col items-center justify-start gap-[32px] text-center text-5xl text-success-50 font-heading-3-h3-medium">
      <div className="flex flex-col items-center justify-center gap-[4px]">
        <div className="relative w-[164px] h-[164px] overflow-hidden shrink-0">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/check-1-2@2x.png"
          />
        </div>
        <div className="relative leading-[120%] font-medium inline-block w-[448px] h-[29px] shrink-0">
          {notificationMessage}
        </div>
      </div>
      <div className="relative reset text-lg leading-[120%] font-heading-1-h1-bold text-neutral-base inline-block w-[520px] h-[50px] shrink-0">
        A resent link has been sent to your email address. <br/>Please follow the instructions to reset your password
      </div>
      <PriorityPrimaryStatedefaul
        button="Check inbox"
        priorityPrimaryStatedefauWidth="580px"
        priorityPrimaryStatedefauBorder="unset"
        priorityPrimaryStatedefauCursor="pointer"
        buttonColor="#fff"
      />
    </div>
  );
};

export default ResetLinkSentContainer;
