import React from "react";

import { Size } from "@/enums/size.enum";
import { TextWeight } from "./enums";
import { Color } from "@/enums/color.enum";

interface TextProps {
  size?: Exclude<Size, Size.XXXL | Size.XXXXL | Size.XXXXXL>;
  color?: Color.ACCENT_GRADIENT;
  weight?: TextWeight;
  className?: string;
  tagName?: React.ElementType;
  children?: React.ReactNode;
  [key: string]: any;
}

export type { TextProps };
