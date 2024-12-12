import React from "react";

import { Size } from "@/enums/size.enum";
import { TextWeight } from "./enums";
import { Color } from "@/enums/color.enum";

interface TextBaseProps {
  size?: Exclude<Size, Size.XXXL | Size.XXXXL | Size.XXXXXL>;
  color?: Color.ACCENT_GRADIENT;
  weight?: TextWeight;
  className?: string;
  tagName?: React.ElementType;

  [key: string]: any;
}

interface PlainTextProps extends TextBaseProps {
  children: React.ReactNode;
  renderAsRichText?: false;
}

interface RichTextProps extends TextBaseProps {
  children: string | JSX.Element | (string | Element)[];
  renderAsRichText?: true;
}

type TextProps = PlainTextProps | RichTextProps;

export type { TextProps };
