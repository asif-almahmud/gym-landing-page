import React from "react";

type Props = {};

const Slogan = (props: Props) => {
  return (
    <div className="max-w-[500px] md:max-w-full -mt-8 sm:mt-28 flex flex-col mx-auto md:flex-row md:items-center gap-8 md:gap-24">
      <h2 className="section-medium-heading">
        Healthy in side
        <br /> fresh out side
      </h2>
      <p className="section-body md:max-w-full flex-1 ">
        Exercise is a very important need for our body. Health and fitness will
        be obtained if you can do regular exercise and run a healthy routine.
        Even at home we still have to be diligent in exercising, either alone or
        with your friends at home. Healthy life makes you more excited to live
        the day
      </p>
    </div>
  );
};

export default Slogan;
