import React from "react";
import { TooltipSide } from "./enums";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: TooltipSide;
  hidden?: boolean;
  disabled?: boolean;
  tabIndex?: number;
}

export type { TooltipProps };
