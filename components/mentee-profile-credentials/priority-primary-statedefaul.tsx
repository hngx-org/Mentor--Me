/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import "../../app/(mentee)/mentee-profile-creation/page.module.css";

type PriorityPrimaryStatedefaulType = {
  button?: string;

  /** Style props */
  priorityPrimaryStatedefauWidth?: CSSProperties["width"];
  priorityPrimaryStatedefauBackgroundColor?: CSSProperties["backgroundColor"];
  priorityPrimaryStatedefauBorder?: CSSProperties["border"];
  priorityPrimaryStatedefauCursor?: CSSProperties["cursor"];
  buttonColor?: CSSProperties["color"];

  /** Action props */
  onButtonLargeClick?: () => void;
};

const PriorityPrimaryStatedefaul: NextPage<PriorityPrimaryStatedefaulType> = ({
  button,
  priorityPrimaryStatedefauWidth,
  // eslint-disable-next-line react/prop-types
  priorityPrimaryStatedefauBackgroundColor,
  priorityPrimaryStatedefauBorder,
  priorityPrimaryStatedefauCursor,
  buttonColor,
  onButtonLargeClick,
}) => {
  const priorityPrimaryStatedefaulStyle: CSSProperties = useMemo(() => ({
      width: priorityPrimaryStatedefauWidth,
      backgroundColor: priorityPrimaryStatedefauBackgroundColor,
      border: priorityPrimaryStatedefauBorder,
      cursor: priorityPrimaryStatedefauCursor,
    }), [
    priorityPrimaryStatedefauWidth,
    priorityPrimaryStatedefauBackgroundColor,
    priorityPrimaryStatedefauBorder,
    priorityPrimaryStatedefauCursor,
  ]);

  const buttonStyle: CSSProperties = useMemo(() => ({
      color: buttonColor,
    }), [buttonColor]);

  return (
    <div 
      className="rounded-lg button bg-neutral-base hover:bg-neutral-400 w-[170px] h-12 flex flex-row items-center justify-center py-5 px-10 box-border text-left text-base text-neutral-0 font-heading-3-h3-medium"
      role="button"
      style={priorityPrimaryStatedefaulStyle}
      onClick={onButtonLargeClick}
    >
      <div className="relative font-medium" style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

export default PriorityPrimaryStatedefaul;
