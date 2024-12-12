import React from "react";

import Text from "../Text";
import { cn } from "@/utils/classnames";
import { LabelProps } from "./interfaces";
import { Size } from "@/enums/size.enum";
import Tooltip from "../Tooltip";
import { InfoCircle } from "iconsax-react";
import { Color } from "@/enums/color.enum";

const colorClasses = {
  [Color.ACCENT]: "text-accent-3",
  [Color.ACCENT_GRADIENT]: "text-accent-3",
  [Color.SUCCESS]: "text-green-800",
  [Color.GRAY]: "text-gray-800",
};

const Label: React.FC<LabelProps> = ({
  label,
  infoText,
  required,
  className,
  textClasses,
  size = Size.SM,
  color = Color.GRAY,
  icon,
}) => {
  if (!label) return;

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center">
        {icon && (
          <div
            className={cn("mr-1", colorClasses[color], {
              "text-accent-3": color === Color.ACCENT_GRADIENT,
            })}
          >
            {icon}
          </div>
        )}
        <Text
          tagName="label"
          className={cn(
            "inline w-fit",
            colorClasses[color],
            {
              "bg-gradient-to-r from-accent-3 to-accent-1 inline-block text-transparent bg-clip-text":
                color === Color.ACCENT_GRADIENT,
            },
            textClasses
          )}
          size={size}
        >
          {label}
        </Text>
        {required && (
          <Text
            tagName="abbr"
            title="required"
            className="ml-1 text-red-600 no-underline"
          >
            *
          </Text>
        )}
        {infoText && (
          <Tooltip content={infoText}>
            <InfoCircle
              size="16"
              className={cn("ml-1", colorClasses[color], {
                "text-accent-1": color === Color.ACCENT_GRADIENT,
              })}
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};
export default Label;
