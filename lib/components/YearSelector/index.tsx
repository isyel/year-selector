import * as PopoverPrimitive from "@radix-ui/react-popover";
import React from "react";

import { YearSelectorProps } from "./interfaces";
import Text from "../Text";
import Label from "../Label";
import Button from "../Button";
import { ButtonVariant } from "../Button/enums";
import { cn } from "../../../src/utils/classnames";
import { Size } from "../../enums/size.enum";

const YearSelector: React.FC<YearSelectorProps> = ({
  sideOffset = 5,
  label,
  infoText,
  required,
  placeholder,
  inline,
  disabled,
  value,
  className,
  triggerClasses,
  contentClasses,
  wrapperClasses,
  fromYear = 1900,
  toYear = new Date().getFullYear(),
  order = "desc",
  onOpenChange,
  onChange,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>();
  const id = React.useId();
  const isInlineLabel = React.useMemo(() => inline && label, [inline, label]);

  const yearList = Array.from(
    { length: toYear - fromYear + 1 },
    (_, i) => fromYear + i
  ).sort((a, b) => (order === "asc" ? a - b : b - a));

  const handleOnChange = (year: string) => {
    return () => {
      onChange?.(year);
      handlePopoverState?.();
    };
  };

  const handlePopoverState = () => {
    onOpenChange?.(!isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <PopoverPrimitive.Root open={isOpen} onOpenChange={onOpenChange}>
      <PopoverPrimitive.Trigger asChild className={cn(triggerClasses)}>
        <div
          className={cn(
            "gap-2",
            isInlineLabel ? "grid grid-cols-3" : "flex flex-col",
            wrapperClasses
          )}
          onClick={handlePopoverState}
        >
          <Label
            htmlFor={id}
            label={label}
            infoText={infoText}
            required={required}
            size={Size.SM}
            className={cn({
              "col-span-3 md:col-span-1 [&_label]:md:pb-0.5 [&_label]:md:pt-1.5":
                isInlineLabel,
            })}
          />
          <div
            className={cn(
              "flex h-10 cursor-pointer items-center gap-2 overflow-hidden rounded-lg border border-gray-200 bg-white px-2 text-gray-500 focus-within:outline focus-within:outline-1",
              disabled
                ? "cursor-not-allowed border-gray-3 bg-gray-100 text-gray-300"
                : "[&:hover:not(:focus-within)]:bg-gray-50 focus-within:border-accent-9 focus-within:outline-accent-3",
              className
            )}
          >
            <Text>{value || placeholder}</Text>
          </div>
        </div>
      </PopoverPrimitive.Trigger>
      {!disabled && (
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            sideOffset={sideOffset}
            className={cn(
              "max-h-60 overflow-y-auto focus-visible:ring-accent-3 focus-visible:outline-none shadow-lg z-50 rounded-md bg-white will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
            )}
          >
            <div
              className={cn(
                "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-3",
                contentClasses
              )}
            >
              {yearList.map((year) => (
                <Button
                  key={year}
                  label={year.toString()}
                  className="w-full"
                  variant={
                    year.toString() === value
                      ? ButtonVariant.PRIMARY
                      : ButtonVariant.SECONDARY
                  }
                  onClick={handleOnChange(year.toString())}
                />
              ))}
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      )}
    </PopoverPrimitive.Root>
  );
};

export default YearSelector;
