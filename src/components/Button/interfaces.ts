import React from "react";
import { ButtonVariant } from "./enums";
import { Color } from "@/enums/color.enum";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: React.ReactNode;
  loading?: boolean;
  color?: Color.ACCENT | Color.GRAY | Color.ACCENT_GRADIENT;
  variant?: ButtonVariant;
  wrapperClasses?: string;
}

export type { ButtonProps };
