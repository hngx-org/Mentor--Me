import { useState, Dispatch, SetStateAction } from "react";

interface CardSelectProps {
  onSetStep: (s:number)=>void;
}

export default function WalletDetails(props: CardSelectProps) {
  const [selectedTab, setSelectedTab] = useState("This week");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="p-12 text-left">
      <div className="mt-1">
        <div className="flex justify-left">
          <span
            className={`${
              selectedTab === "This week" ? "border-b-2 border-blue-500" : ""
            } cursor-pointer mx-2 py-2`}
            onClick={() => handleTabClick("This week")}
          >
            This week
          </span>
          <span
            className={`${
              selectedTab === "Overtime" ? "border-b-2 border-blue-500" : ""
            } cursor-pointer mx-2 py-2`}
            onClick={() => handleTabClick("Overtime")}
          >
            Overtime
          </span>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <div className="bg-black text-white-00 p-8 mb-7 rounded" style={{color:"white"}}>
          <div className="mb-3 font-bold text-white-100" style={{color:"white"}}>
            <h2><strong>Amazing Chimazie</strong></h2>
          </div>
          <div className="mb-1 font-light">
            <span className="py-2">Total wallet balance</span>
          </div>
          <div className="text-xl font-extrabold">
            <h1><b>$1,830</b></h1>
          </div>
        </div>

        {/* Additional content for details and subheader */}
        <div className="mt-1">
          <div className="font-black text-xl mt-2">Earnings Summary</div>
          <div style={{ borderBottom: "1px solid #ccc", flex: 1 }} className="flex justify-between text-sm font-thin mt-1">
            <p>
              Include your wallet details here.
            </p>
            <span className="text-blue-700" style={{ alignSelf: "flex-end" }}>View details</span>
          </div>
        </div>
        <div className="mt-2">
          <h3 className="font-semibold">Mentorship Season</h3>
          <div style={{ borderBottom: "1px solid #ccc", flex: 1 }} className="flex justify-between text-sm font-thin mt-1">
            <p>
              Additional information or subheader content here.
            </p>
            <span className="text-blue-700" style={{ alignSelf: "flex-end" }}>View details</span>
          </div>
        </div>
        <div className="mt-2">
          <h3 className="font-semibold">'a corporate body' resource</h3>
          <div style={{ borderBottom: "1px solid #ccc", flex: 1 }} className="flex justify-between text-sm font-thin mt-1">
            <p>
              Additional information or subheader content here.
            </p>
            <span className="text-blue-700" style={{ alignSelf: "flex-end" }}>View details</span>
          </div>
        </div>
        <div className="mt-2">
          <h3 className="font-semibold">'design made easy' resource</h3>
          <div style={{ borderBottom: "1px solid #ccc", flex: 1 }} className="flex justify-between text-sm font-thin mt-1">
            <p>
              Additional information or subheader content here.
            </p>
            <span className="text-blue-700" style={{ alignSelf: "flex-end" }}>View details</span>
          </div>
        </div>
        <div className="font-black text-xl mt-2 flex justify-between">
          Total week earnings
          <span className="ml-auto font-semibold text-green-600">
            $5,000 {/* Replace with your desired amount */}
          </span>
        </div>

        <div className="mt-4 self-end">
          <button
            onClick={() => props.onSetStep(2)}
            className="bg-black text-white-100 py-2 px-2 rounded hover:bg-blue-600" style={{color:"white"}}
          >
            Withdraw Now
          </button>
        </div>
      </div>
    </div>
  );
}