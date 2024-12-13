import React from "react";

import { Color } from "../../enums/color.enum";
import { Size } from "../../enums/size.enum";

interface LabelBaseProps {
  label?: string;
  required?: boolean;
  infoText?: string;
  size?: Size.XS | Size.SM | Size.MD;
  color?: Color.ACCENT | Color.ACCENT_GRADIENT | Color.SUCCESS | Color.GRAY;
  icon?: React.ReactNode;
  textClasses?: string;
}

type LabelProps = LabelBaseProps & React.LabelHTMLAttributes<HTMLLabelElement>;

export type { LabelBaseProps, LabelProps };
