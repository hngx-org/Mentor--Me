import type { NextPage } from "next";
import "../../app/(profile-creation)/mentee-profile-creation/page.module.css";

type ContainerCardFormType = {
  imageDimensions?: string;
  imageDimensionsText?: string;
};

const ContainerCardForm: NextPage<ContainerCardFormType> = () => (
    <div className="absolute setup card top-[0px] left-[660px] bg-neutral-base w-[600px] h-[900px] overflow-hidden text-27xl text-neutral-0">
        <img
          className="absolute top-[0px] left-[300px] w-[337px] h-[120.58px]"
          alt=""
          src="/group-783.svg"
        />
        <img
          className="absolute top-[450px] left-[30px] w-[205.54px] h-[134px]"
          alt=""
          src="/group-784.svg"
        />
        <div className="absolute top-[30px] left-[63px] text-[42px] font-semibold inline-block w-[480px]">
          Building bridges of guidance and growth
        </div>
        <div className="absolute top-[417px] left-[520px] bg-neutral-0 w-[120px] h-[40px]" />
        <div className="absolute top-[220px] left-[-2px] bg-neutral-0 w-[120px] h-[40px]" />
        <img
          className="absolute top-[370px] left-[280px] rounded-lg w-[250px] h-[160px] overflow-hidden object-cover"
          alt=""
          src="/frame-1000007666@2x.png"
        />
        <img
          className="absolute top-[170px] left-[63px] rounded-lg w-[250px] h-[160px] overflow-hidden object-cover"
          alt=""
          src="/frame-1000007665@2x.png"
        />
      </div>
  );

export default ContainerCardForm;
