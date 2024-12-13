import React from "react";

import { TextWeight } from "./enums";
import { TextProps } from "./interfaces";
import { Size } from "../../enums/size.enum";
import { cn } from "../../../src/utils/classnames";

const weightClasses = {
  [TextWeight.REGULAR]: "font-normal",
  [TextWeight.SEMIBOLD]: "font-semibold",
  [TextWeight.BOLD]: "font-bold",
};
const sizeClasses = {
  [Size.XS]: "text-xs",
  [Size.SM]: "text-sm",
  [Size.MD]: "text-base",
  [Size.LG]: "text-lg",
  [Size.XL]: "text-xl",
  [Size.XXL]: "text-2xl",
};

const Text: React.FC<TextProps> = ({
  children,
  size = Size.MD,
  weight = TextWeight.REGULAR,
  className,
  Component = "p",
  color,
  ...rest
}) => {
  return (
    <Component
      className={cn(weightClasses[weight], sizeClasses[size], className)}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Text;
