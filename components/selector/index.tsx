import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { ArrowDown, ArrowUp } from "@/public/SVGs";

// options - array of items the user should select from this can be string or number
// onSelect - pass a define setAction here defined in your component
// selected - pass the selected reference to to show when user clicks on a selection
// placeholder a text that shows the selector option

interface SelectorProps {
  options: any[];
  onSelect: Dispatch<SetStateAction<any>>;
  selected: string;
  placeHolder: string;
}

export default function Selector({
  options,
  onSelect,
  selected,
  placeHolder,
}: SelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex flex-col text-left w-full border border-Neutra10 p-3 rounded-lg w-[100%]"
      onClick={() => setIsOpen((prev) => !prev)}
      role="presentation"
    >
      <div className="flex justify-between items-center w-full px-2 py-2">
        {selected ? (
          <p> {selected}</p>
        ) : (
          <p className="text-xs text-Neutra10">{placeHolder}</p>
        )}

        <AnimatePresence initial={false} mode="wait">
          <motion.div
            animate={{
              zIndex: 1,
              rotate: 0,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circOut",
              },
            }}
            exit={{
              zIndex: 0,
              rotate: isOpen ? -90 : 90,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circIn",
              },
            }}
          >
            {isOpen ? <ArrowDown /> : <ArrowUp />}
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            className="font-light max-h-[250px] overflow-scroll"
          >
            {options.map((option) => (
              <Fragment key={option}>
                <Options item={option} onSelect={onSelect} />
              </Fragment>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Options({
  item,
  onSelect,
}: {
  item: any;
  onSelect: Dispatch<SetStateAction<any>>;
}) {
  return (
    <div className=" transition duration-150 ease-out  w-[100%] h-fit hover:bg-Accent3 my-1   rounded-[6px] ">
      <button
        type="button"
        onClick={() => {
          onSelect(item);
        }}
        className="p-2 w-[100%] flex"
      >
        {item}
      </button>
      <hr />
    </div>
  );
}
