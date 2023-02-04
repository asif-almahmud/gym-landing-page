import Image from "next/image";
import React from "react";
import crucifiedPose from "@/assets/images/crucified-pose.svg";
import dancerBalance from "@/assets/images/dancer-balance.svg";
import dancerMotionBig from "@/assets/images/dancer-motion-big.svg";
import SingleChallenge from "./single-challenge";

type Props = {};

const Challenges = (props: Props) => {
  return (
    <div className="mt-[60px] sm:mt-[80px] lg:mt-[120px] bg-gradient-to-br from-[#6462F0] to-[#9190E9] w-full p-6 xs:p-14 lg:p-20 rounded-[30px] flex items-center justify-center tablet:justify-between gap-12 xs:gap-14 tablet:gap-10 lg:gap-14 xl:gap-20 flex-wrap tablet:flex-nowrap">
      <SingleChallenge mainText="Get that 11 line in 30 days">
        <Image src={crucifiedPose} alt="Crucified pose" />
      </SingleChallenge>
      <SingleChallenge mainText="14 days shred challenge">
        <Image src={dancerBalance} alt="Dancer balance" />
      </SingleChallenge>
      <SingleChallenge mainText="Get flat belly in 30 days">
        <Image src={dancerMotionBig} alt="Dancer motion" />
      </SingleChallenge>
    </div>
  );
};

export default Challenges;
