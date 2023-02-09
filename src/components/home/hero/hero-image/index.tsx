import Emoticon from "@/components/emoticon";
import EmoticonCard from "@/components/emoticon-card";
import Image from "next/image";
import trainer from "@/assets/images/trainer.jpg";
import morningWorkout from "@/assets/images/morning-workout.jpg";

type Props = {};

const HeroImage = (props: Props) => {
  return (
    <div className=" xs:mt-12 ml-20 md:pr-8 md:pl-0 relative scale-[0.59] xs:scale-75 sm:scale-100 -translate-y-8 sm:translate-y-0">
      <Image
        src={trainer}
        alt="Picture of the trainer"
        priority
        // className="object-cover"
        className="max-w-[320px] min-h-[450px] object-cover"
      />

      <EmoticonCard
        mainText="150+"
        helperText="Members"
        positioningClasses="absolute top-20 -left-36"
        extraPadding
      >
        <Emoticon
          posture="dancer-motion"
          gradientColor="from-[#F8A422] to-[#FEDEAC]"
          positioningClasses=""
        />
      </EmoticonCard>
      <Emoticon
        posture="stretching"
        gradientColor="from-[#4BACE1] to-[#D8F1FF]"
        positioningClasses="absolute top-[84px] -right-5"
      />
      <Emoticon
        posture="strengthen-posture"
        gradientColor="from-[#5478EF] to-[#D6DFFF]"
        positioningClasses="absolute -left-32 bottom-24"
      />
      <EmoticonCard
        mainText="Zacky Simorang"
        helperText="Trainer"
        positioningClasses="absolute bottom-16 -right-12"
        modifierClasses="flex-col h-min py-[18px] text-center"
      >
        <Emoticon
          posture={null}
          gradientDirection="to-r"
          gradientColor="from-[#6765f0] to-[#6765F0]"
          positioningClasses=""
          modifierClasses="w-[66px] h-[66px]"
        />
      </EmoticonCard>
      <div className="w-[390px] h-[320px] absolute right-0 bottom-0 -z-50 hero-wave">
        <div className="w-[215px] h-[430px] rounded-l-full absolute bottom-0 -left-8 bg-[#E6E6FF]"></div>
      </div>
    </div>
  );
};

export default HeroImage;
