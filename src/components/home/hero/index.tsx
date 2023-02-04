import Image from "next/image";
import caretCircleRight from "@/assets/images/caret-circle-right.png";
import playCircle from "@/assets/images/play-circle.png";
import nikeLogo from "@/assets/images/nike-logo.svg";
import lottoLogo from "@/assets/images/lotto-logo.svg";
import pumaLogo from "@/assets/images/puma-logo.svg";
import newellLogo from "@/assets/images/newell-logo.svg";
import HeroImage from "./hero-image";
import Ellipse from "@/components/ellipse-blur";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative flex flex-col items-center mt-10 md:flex-row md:justify-between md:items-end ">
      {/* ellipse effects */}
      <Ellipse modifyingClasses="left-[-93px] top-[-410px]" />
      <Ellipse modifyingClasses="left-[290px] top-[-340px]" />
      <Ellipse modifyingClasses="left-[-345px] top-[81px]" />
      {/* hero text contents */}
      <div className="max-w-[500px] flex flex-col items-start gap-[22px] z-50">
        <h1 className="section-large-heading">
          Healthy in side <br />
          <span className="text-primary-light">fresh</span> out side{" "}
        </h1>
        <p className="section-body max-w-[400px] sm:max-w-[500px] ">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine.
        </p>
        {/* cta buttons */}
        <div className="flex gap-5 sm:gap-9">
          <button className="py-2 px-3 sm:py-4 sm:px-6 bg-primary-dark text-white text-xs sm:text-sm lg:text-base flex justify-center items-center gap-5 sm:gap-20 rounded-xl shadow-3xl">
            <p>Get Started</p>
            <Image
              src={caretCircleRight}
              alt="Image of caret circle right"
              className="w-4 sm:w-6 sm:scale-100"
            />
          </button>
          <button className="py-2 px-3  sm:py-4 sm:px-6 bg-white text-primary-dark text-xs sm:text-sm lg:text-base flex justify-center items-center gap-2 sm:gap-4 rounded-xl shadow-3xl">
            <Image
              src={playCircle}
              alt="Image of play circle"
              className="w-4 sm:w-6 sm:scale-100"
            />
            <p>Learn More</p>
          </button>
        </div>
        {/* brands */}
        <div className="mt-8">
          <h4>Brands:</h4>
          <div className="flex items-center gap-4 sm:gap-8">
            <Image src={nikeLogo} alt="Nike logo" className="w-14 sm:w-20" />
            <Image src={lottoLogo} alt="Puma logo" className="w-14 sm:w-20" />
            <Image src={newellLogo} alt="Puma logo" className="w-14 sm:w-20" />
            <Image src={pumaLogo} alt="Adidas logo" className="w-14 sm:w-20" />
          </div>
        </div>
      </div>
      {/* hero image */}

      <HeroImage />
    </div>
  );
};

export default Hero;
