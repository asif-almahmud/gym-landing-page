import { FC } from "react";

interface IEllipseProps {
  modifyingClasses?: string;
}

const Ellipse: FC<IEllipseProps> = ({ modifyingClasses = "" }) => {
  return (
    <div
      className={`absolute w-[780px] h-[780px] bg-secondary-light/20 rounded-full mix-blend-multiply filter blur-3xl -z-50 ${modifyingClasses}`}
    ></div>
  );
};

export default Ellipse;
