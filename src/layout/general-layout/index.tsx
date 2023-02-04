import Container from "@/components/container";
import Navbar from "@/components/navbar";
import { FC, ReactNode } from "react";

interface IGeneralLayoutProps {
  children: ReactNode;
}
const GeneralLayout: FC<IGeneralLayoutProps> = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default GeneralLayout;
