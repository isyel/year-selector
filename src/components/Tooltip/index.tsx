import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import Text from "../Text";
import { TooltipSide } from "./enums";
import { TooltipProps } from "./interfaces";
import { Size } from "@/enums/size.enum";

/* check z-index again once we have migrated other components that have very high z-index */
const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  side = TooltipSide.TOP,
  hidden = false,
  disabled = false,
  ...props
}) => (
  <TooltipPrimitive.Provider disableHoverableContent={hidden || disabled}>
    <TooltipPrimitive.Root
      delayDuration={100}
      disableHoverableContent={hidden || disabled}
    >
      <TooltipPrimitive.Trigger {...props}>{children}</TooltipPrimitive.Trigger>
      {!hidden && (
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={5}
            className="z-50 max-w-[240px] rounded-md bg-gray-800 px-3 py-1.5 text-gray-100 shadow-md will-change-[transform,opacity]"
          >
            <TooltipContent content={content} />
            <TooltipPrimitive.Arrow className="fill-gray-800" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      )}
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);

const TooltipContent = ({ content }: { content: React.ReactNode | string }) => {
  return (
    <>
      {typeof content === "string" ? (
        <Text renderAsRichText={true} size={Size.XS}>
          {content}
        </Text>
      ) : (
        <Text renderAsRichText={false} size={Size.XS}>
          {content}
        </Text>
      )}
    </>
  );
};

export default Tooltip;
