import { FC, ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  modifierClasses?: string;
}

const Container: FC<IContainerProps> = ({ children, modifierClasses = "" }) => {
  return (
    <div
      className={`max-w-7xl px-6 mx-auto font-poppins font-[400] ${modifierClasses}`}
    >
      {children}
    </div>
  );
};

export default Container;
