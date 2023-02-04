import Emoticon from "@/components/emoticon";
import EmoticonCard from "@/components/emoticon-card";
import Image from "next/image";
import workout from "@/assets/images/workout.png";
import balloonPink from "@/assets/images/balloon-pink.svg";

type Props = {};

const WorkoutImage = (props: Props) => {
  return (
    <div className="ml-6 -mt-28 xs:mt-12 md:mt-0 w-fit sm:ml-20 md:pr-8 md:pl-0 scale-[0.5] xs:scale-75 sm:scale-100 -translate-y-8 sm:translate-y-0 relative">
      <Image
        src={workout}
        alt="Workout picture"
        // className="object-cover"
        className="max-w-[420px] object-contain  pr-2 xs:pr-0 xs:-mt-20 sm:mt-0"
      />
      <Emoticon
        posture="dancer-motion"
        gradientColor="from-secondary-main to-secondary-light"
        positioningClasses="absolute top-5 left-9"
      />
      <Emoticon
        posture="stretching"
        gradientColor="from-[#4BACE1] to-[#D8F1FF]"
        positioningClasses="absolute top-24 sm:top-48 -right-16 md:-right-12"
      />
      <EmoticonCard
        mainText="800 kall"
        helperText="Born fat"
        positioningClasses="absolute bottom-10 -left-20"
        extraPadding
      >
        <Emoticon
          posture="crucified-pose"
          gradientColor="from-[#5478EF] to-[#D6DFFF]"
          positioningClasses=""
        />
      </EmoticonCard>

      <div className="min-w-[260px] min-h-[260px] xs:min-w-[380px] xs:min-h-[380px] rounded-full absolute top-4 xs:-top-12 sm:top-12 -right-6 md:right-0 bg-[#DBDFFF] -z-50"></div>
      <div className="  absolute bottom-0 -left-4 -z-50">
        <Image src={balloonPink} alt="pink-balloon" />
      </div>
    </div>
  );
};

export default WorkoutImage;
