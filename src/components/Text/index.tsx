import React from "react";
import { Interweave } from "interweave";

import { cn } from "@/utils/classnames";
import { TextWeight } from "./enums";
import { TextProps } from "./interfaces";
import { Size } from "@/enums/size.enum";

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
  tagName = "p",
  renderAsRichText = false,
  color,
  ...rest
}) => {
  const Component = renderAsRichText ? Interweave : tagName;

  return (
    <Component
      className={cn(weightClasses[weight], sizeClasses[size], className)}
      {...(renderAsRichText ? { content: children, tagName } : { children })}
      {...rest}
    />
  );
};

export default Text;
