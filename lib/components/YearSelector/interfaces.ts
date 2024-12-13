import { LabelBaseProps } from "../Label/interfaces";

interface YearSelectorBaseProps {
  sideOffset?: number;
  placeholder?: string;
  inline?: boolean;
  disabled?: boolean;
  value?: string;
  className?: string;
  triggerClasses?: string;
  contentClasses?: string;
  wrapperClasses?: string;
  fromYear?: number;
  toYear?: number;
  order?: "asc" | "desc";
  onOpenChange?: (open: boolean) => any;
  onChange?: (value: string) => any;
}

type YearSelectorProps = LabelBaseProps & YearSelectorBaseProps;

export type { YearSelectorProps };
