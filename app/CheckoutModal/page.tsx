import React from "react";
import { WarningIcon, LoadingIcon } from "@/public/SVGs";

export default function page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[700px] h-[600px] bg-white rounded-[8px]">
        <div className="flex flex-col items-center justify-center mt-[15%]">
          <LoadingIcon />
          <p>Loading...</p>
          <p className="mt-[20px] text-[#565656] text-[14px]">
            Your details have been received and is currently being processed.
          </p>
        </div>

        <div className="flex justify-between ml-[100px] mt-[50px] mr-[100px]">
          <div>
            <p className="text-[#565656] mt-[20px]">Transaction ID</p>
            <p className=" text-[#565656] mt-[20px]">Amount</p>
            <p className=" text-[#565656] mt-[20px]">Status</p>
            <p className=" text-[#565656] mt-[20px]">Date</p>
          </div>

          <div>
            <p className="mt-[20px]">:</p>
            <p className="mt-[20px]">:</p>
            <p className="mt-[20px]">:</p>
            <p className="mt-[20px]">:</p>
          </div>

          <div>
            <p className="text-[#121212] mt-[20px]">12387560934</p>
            <p className="text-[#121212] mt-[20px]">N3,325</p>
            <p className="text-[#121212] mt-[20px]">Pending</p>
            <p className="text-[#121212] mt-[20px]">23 September 2023.</p>
          </div>
        </div>
        <div className="ml-[100px] flex mt-[40px]">
          <WarningIcon />
          <p className="text-[10px] ml-[5px] mt-[5px] text-[#767676]">
            Note that this could take some minutes.
          </p>
        </div>
      </div>
    </div>
  );
}

// import { useState, Fragment } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import Button from '@/components/ui/Button';

// interface pageProps {
//     title: string;
//     description: string;
//     isOpen: boolean;
//     handleCancelAction: ()=> void;
//     handleConfirmationAction: () => void;
// }

// export default function page({
//         title,
//         description,
//         isOpen,
//         handleCancelAction,
//         handleConfirmationAction,
// }: pageProps) {
// //   let [isOpen, setIsOpen] = useState(true)

//   return (
//     // Use the `Transition` component at the root level
//     <Transition show={isOpen} as={Fragment}>
//       <Dialog onClose={() => {}}>
//         {/*
//           Use one Transition.Child to apply one transition to the backdrop...
//         */}
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black/30" araia-hidden="true" />
//         </Transition.Child>

//         {/*
//           ...and another Transition.Child to apply a separate transition
//           to the contents.
//         */}
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           <div className='fixed inset-0 flex items-center justify-center' >
//           <Dialog.Panel className="relative mx-auto rounded bg-white p-4 w-96">
//             <Dialog.Title className='text-2xl'>{title}</Dialog.Title>
//             <Dialog.Description className="text-gray-600">
//                 {description}
//             </Dialog.Description>
//             <div className='mt-4 flex justify-between gap-4'>
//                 <Button  onClick={handleConfirmationAction}>
//                     Comfirm
//                 </Button>
//                 <Button onClick={handleCancelAction}>
//                     Cancel
//                 </Button>
//             </div>

//             {/* ... */}
//           </Dialog.Panel>
//           </div>
//         </Transition.Child>
//       </Dialog>
//     </Transition>
//   )
// }
