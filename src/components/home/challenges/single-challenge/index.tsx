import Image from "next/image";
import { FC, ReactNode } from "react";
import arrowRight from "@/assets/images/arrow-right.svg";

interface ISingleChallengeProps {
  children: ReactNode;
  mainText: string;
}

const SingleChallenge: FC<ISingleChallengeProps> = ({ children, mainText }) => {
  return (
    <div className="text-white flex items-center gap-5 lg:gap-7 tracking-slight scale-95 xs:scale-100">
      <div className="bg-[#716fe6] min-w-[80px] min-h-[80px] lg:min-w-[100px] lg:min-h-[100px] relative rounded-[20px]">
        <div className="absolute inset-0 rounded-[20px] backdrop-custom-blur bg-white/20  flex justify-center items-center scale-90 xs:scale-100">
          {children}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h6 className="font-bold text-base lg:text-xl">{mainText}</h6>
        <button className="w-fit opacity-50 flex items-center gap-4 xs:gap-8 hover:border-b">
          Learn&nbsp;more
          <Image src={arrowRight} alt="Crucified Pose" />
        </button>
      </div>
    </div>
  );
};

export default SingleChallenge;
