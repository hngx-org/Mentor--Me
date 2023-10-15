import React from "react";
import { AnimationProps, motion } from "framer-motion";

interface DropDownProps {
  dropDownOptions: string[];
  setSelectedOptionIdx: React.Dispatch<React.SetStateAction<number>>;
  selectedOptionIdx: number;
}

const dropDownVariant: AnimationProps["variants"] = {
  closed: { scaleX: 0, scaleY: 0.2 },
  open: {
    scaleX: 1,
    scaleY: 1,
    transition: {
      scaleX: {
        duration: 0.3,
      },
      scaleY: {
        delay: 0.35,
        duration: 0.4,
      },
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    scaleY: 0,
  },
};
const optionsVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function DropDown({
  dropDownOptions,
  selectedOptionIdx,
  setSelectedOptionIdx,
}: DropDownProps) {
  return (
    <motion.div
      variants={dropDownVariant}
      initial="closed"
      animate="open"
      exit="exit"
      className="shadow-[0_0_4px_2px_rgba(204,_204,_204,_0.25)] mt-4 p-4 rounded-lg overflow-hidden origin-top"
    >
      {dropDownOptions.map((option, idx) => (
        <motion.p
          variants={optionsVariants}
          exit={{ scaleY: 0 }}
          onClick={() => {
            setSelectedOptionIdx(selectedOptionIdx !== idx ? idx : -1);
          }}
          className={`font-Inter text-NeutalBase cursor-pointer capitalize px-4 py-2 rounded-md font-medium text-base leading-[3] ${
            selectedOptionIdx === idx ? "bg-[rgba(204,_204,_204,_0.15)]" : ""
          }`}
        >
          {option}
        </motion.p>
      ))}
    </motion.div>
  );
}

export default DropDown;
