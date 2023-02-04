import { GradientDirection, Posture } from "@/type/type";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface IEmoticonProps {
  posture: Posture;
  gradient?: boolean;
  gradientDirection?: GradientDirection;
  gradientColor: string;
  positioningClasses: string;
  modifierClasses?: string;
}

const gradientDirectioins = {
  "to-t": "bg-gradient-to-t",
  "to-tr": "bg-gradient-to-tr",
  "to-r": "bg-gradient-to-r",
  "to-br": "bg-gradient-to-br",
  "to-b": "bg-gradient-to-b",
  "to-bl": "bg-gradient-to-bl",
  "to-l": "bg-gradient-to-l",
  "to-tl": "bg-gradient-to-tl",
};

const Emoticon: FC<IEmoticonProps> = ({
  posture = null,
  gradient = true,
  gradientDirection = "to-tr",
  gradientColor,
  positioningClasses,
  modifierClasses = "",
}) => {
  const [emo, setEmo] = useState<any>();
  const [altText, setAltText] = useState<Posture | "">("");

  const loadEmoticon = (posture: Posture) => {
    import(`../../assets/images/${posture}.svg`).then((emoticon) => {
      setEmo(emoticon);
      setAltText(posture);
    });
  };

  useEffect(() => {
    posture && loadEmoticon(posture);
  }, []);

  return (
    <div
      className={`w-[60px] h-[60px] flex justify-center items-center ${
        gradient ? `${gradientDirectioins[gradientDirection]}` : ""
      } ${gradientColor} rounded-full shadow-emo ${positioningClasses} ${modifierClasses}`}
    >
      <Image src={emo} alt={`${altText}`} />
    </div>
  );
};

export default Emoticon;
