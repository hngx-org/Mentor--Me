import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ResetLinkSentContainer from "./reset-link-sent-container";
import "../../app/(mentee)/mentee-profile-creation/page.module.css";

type SuccessModalType = {
  resetLinkSent?: string;
  aResentLinkHasBeenSentToY?: string;
  button?: string;

  /** Style props */
  successModalPosition?: CSSProperties["position"];
  successModalTop?: CSSProperties["top"];
  successModalLeft?: CSSProperties["left"];
  buttonLargeCursor?: CSSProperties["cursor"];

  /** Action props */
  onButtonLarge2Click?: () => void;
};

const SuccessModal: NextPage<SuccessModalType> = ({
  resetLinkSent,
  aResentLinkHasBeenSentToY,
  button,
  successModalPosition,
  successModalTop,
  successModalLeft,
  buttonLargeCursor,
  onButtonLarge2Click,
}) => {
  const successModalStyle: CSSProperties = useMemo(() => ({
      position: successModalPosition,
      top: successModalTop,
      left: successModalLeft,
    }), [successModalPosition, successModalTop, successModalLeft]);

  const priorityPrimaryStatedefaulStyle: CSSProperties = useMemo(() => ({
      cursor: buttonLargeCursor,
    }), [buttonLargeCursor]);

  return (
    <div className="w-[818px] h-[656px]" style={successModalStyle}>
      <div className="absolute top-[0px] left-[55px] rounded-lg bg-neutral-0 w-[700px] h-[556px]" />
      <ResetLinkSentContainer
        notificationMessage="Reset Link Sent"
        resetPasswordMessage="A resent link has been sent to your email address. Please follow the instructions to reset your password"
        actionButtonText="Check inbox"
      />
    </div>
  );
};

export default SuccessModal;
