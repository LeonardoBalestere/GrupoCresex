import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";
import { cn } from "./utils";

export const flexVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      col: "flex-col",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
    wrap: {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
    },
    gap: {
      0: "gap-0",
      2: "gap-2",
      4: "gap-4",
      6: "gap-6",
      8: "gap-8",
      10: "gap-10",
      12: "gap-12",
    },
  },
  defaultVariants: {
    direction: "row",
    align: "start",
    justify: "start",
    gap: 0,
    wrap: "nowrap",
  },
});

export type FlexVariantProps = VariantProps<typeof flexVariants>;

export type FlexProps = React.ComponentProps<"div"> & FlexVariantProps & {
  as?: keyof JSX.IntrinsicElements;
};

export function Flex({
  className,
  direction,
  align,
  justify,
  wrap,
  gap,
  as = "div",
  ...props
}: FlexProps) {
  const Comp = as as any;

  return (
    <Comp className={cn(flexVariants({ direction, align, justify, wrap, gap, className }))} {...(props as any)} />
  );
}

export { Flex as default };
