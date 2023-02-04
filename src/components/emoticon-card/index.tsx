import { FC, ReactNode } from "react";
import Emoticon from "../emoticon";

interface IEmoticonProps {
  mainText: string;
  helperText: string;
  positioningClasses: string;
  children: ReactNode;
  modifierClasses?: string;
  extraPadding?: boolean;
}

const EmoticonCard: FC<IEmoticonProps> = ({
  mainText,
  helperText,
  positioningClasses,
  children,
  modifierClasses = "",
  extraPadding = false,
}) => {
  return (
    <div
      className={`${positioningClasses} bg-white h-20 py-3 px-5 flex items-center gap-[14px] shadow-3xl rounded-xl ${modifierClasses}`}
    >
      {children}
      <div className={`flex flex-col gap-[6px] ${extraPadding ? "pr-3" : ""} `}>
        <h6 className="font-bold tracking-slight">{mainText}</h6>
        <p className="text-xs text-dimBlack">{helperText}</p>
      </div>
    </div>
  );
};

export default EmoticonCard;
