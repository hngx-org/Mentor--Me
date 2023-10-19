/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, useRef, useLayoutEffect } from "react";
import usePrevious from "./usePrevious";

export interface SingleOTPInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
}

export function SingleOTPInputComponent(props: SingleOTPInputProps) {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return (
    <input
      ref={inputRef}
      {...rest}
      placeholder=""
      required
      className="w-10 h-10 border border-gray-300 rounded-md text-center text-2xl"
    />
  );
}

const SingleOTPInput = memo(SingleOTPInputComponent);
export default SingleOTPInput;
