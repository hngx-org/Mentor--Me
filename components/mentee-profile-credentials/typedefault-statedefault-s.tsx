/* eslint-disable react/prop-types */
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import "../../app/(mentee)/mentee-profile-creation/page.module.css";

type TypedefaultStatedefaultSType = {
  label?: string;
  iconLeft?: string;
  placeholder?: string;
  iconRight?: string;
  showIconLeft?: boolean;
  showRightContent?: boolean;
  showIconRight?: boolean;
  showHelperText?: boolean;

  /** Style props */
  typedefaultStatedefaultSWidth?: CSSProperties["width"];
  labelLineHeight?: CSSProperties["lineHeight"];
  labelColor?: CSSProperties["color"];
};

const TypedefaultStatedefaultS: NextPage<TypedefaultStatedefaultSType> = ({
  label,
  placeholder,
  typedefaultStatedefaultSWidth,
  labelLineHeight,
  labelColor,
}) => {
  const typedefaultStatedefaultSStyle: CSSProperties = useMemo(() => ({
      width: typedefaultStatedefaultSWidth,
    }), [typedefaultStatedefaultSWidth]);

  const labelStyle: CSSProperties = useMemo(() => ({
      lineHeight: labelLineHeight,
      color: labelColor,
    }), [labelLineHeight, labelColor]);

  return (
    <div>
      <div
        className="w-[400px] typed flex flex-col items-start justify-start gap-[4px] text-left text-sm text-neutral-base font-paragraph-large-medium"
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <label
            className="self-stretch relative leading-[145%] font-medium"
          >
            {label}
          </label>
          <input placeholder={placeholder} className="self-stretch rounded-md text-base bg-neutral-0 box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-start p-2 gap-[12px] text-grey-900 border-[1px] border-solid border-neutral-10" /> 
        </div>
      </div>
    </div>
  );
};

export default TypedefaultStatedefaultS;
