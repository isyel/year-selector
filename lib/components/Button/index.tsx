import React from "react";

import { Color } from "../../enums/color.enum";
import Text from "../Text";
import { ButtonVariant } from "./enums";
import { ButtonProps } from "./interfaces";
import { cn } from "../../../src/utils/classnames";

const Button: React.ForwardRefExoticComponent<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      label,
      icon,
      disabled = false,
      color = Color.ACCENT,
      variant = ButtonVariant.PRIMARY,
      wrapperClasses,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const { items = [], ...rest } = { ...props };

    const variantClasses = {
      [ButtonVariant.PRIMARY]:
        "bg-accent-3 text-accent-contrast hover:opacity-90 focus:outline-accent-3",
      [ButtonVariant.SECONDARY]:
        "bg-white border border-accent-3 text-accent-3 hover:bg-gray-100",
      [ButtonVariant.GHOST]: "bg-transparent text-gray-600 hover:text-gray-800",
    };

    return (
      <div
        className={cn(
          "flex h-10",
          { "cursor-not-allowed": disabled },
          wrapperClasses
        )}
      >
        <button
          ref={ref}
          disabled={disabled}
          onClick={disabled ? undefined : onClick}
          className={cn(
            "relative flex h-full cursor-pointer select-none items-center justify-center rounded-[4px] px-3 text-base leading-4 focus:z-10 focus:rounded-[4px] focus:outline focus:outline-2 focus:outline-offset-1 disabled:pointer-events-none disabled:opacity-60",
            {
              "px-2": !label && icon,
              "bg-gradient-to-r from-accent-3 to-accent-1":
                color === Color.ACCENT_GRADIENT &&
                variant === ButtonVariant.PRIMARY,
            },
            variantClasses[variant],
            className
          )}
          {...rest}
        >
          <div
            className={cn(
              "flex h-full items-center justify-center gap-2 text-nowrap"
            )}
          >
            {icon}
            {label && <Text>{label}</Text>}
          </div>
        </button>
      </div>
    );
  }
);

export default Button;
