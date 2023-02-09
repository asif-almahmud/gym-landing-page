import Image from "next/image";
import WorkoutImage from "./workout-image";
import arrowRight from "@/assets/images/arrow-right.svg";
import Ellipse from "../../ellipse-blur";

type Props = {};

const MorningWorkout = (props: Props) => {
  return (
    <div className="-mt-28 xs:my-20 sm:my-32 flex flex-col-reverse md:flex-row-reverse items-center gap-28 lg:gap-44 relative">
      <Ellipse modifyingClasses="-right-[25%] -top-[50%]" />
      <Ellipse modifyingClasses="-left-[15%] -bottom-[75%]" />
      <WorkoutImage />
      <div className=" max-w-[500px] flex flex-col justify-center items-start gap-8 tablet:gap-12">
        <h2 className=" section-medium-heading lg:text-[40px]">
          Daily morning workout in home
        </h2>
        <p className="section-body max-w-[500px] md:max-w-full flex-1 ">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home.
        </p>
        <button className="py-2 px-3 sm:py-3.5 sm:px-6 bg-primary-dark text-white text-xs sm:text-sm lg:text-base flex justify-center items-center gap-5 sm:gap-20 rounded-xl shadow-3xl">
          <p>Get Started</p>
          <Image
            src={arrowRight}
            alt="Image of caret circle right"
            className="w-2 sm:w-2.5 sm:scale-100"
          />
        </button>
      </div>
    </div>
  );
};

export default MorningWorkout;
