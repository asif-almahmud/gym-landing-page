import { type } from "os";

export interface INavOption {
  name: string;
  link: string;
}

export type Posture =
  | "stretching"
  | "strengthen-posture"
  | "dancer-motion"
  | "crucified-pose"
  | "dancer-balance"
  | null;

export type GradientDirection =
  | "to-t"
  | "to-tr"
  | "to-r"
  | "to-br"
  | "to-b"
  | "to-bl"
  | "to-l"
  | "to-tl";
