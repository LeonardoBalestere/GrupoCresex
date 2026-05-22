import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "./utils";

export const textVariants = cva("m-0", {
  variants: {
    variant: {
      h1: "text-3xl md:text-4xl font-bold leading-tight",
      h2: "text-2xl md:text-3xl font-semibold leading-tight",
      h3: "text-xl md:text-2xl font-semibold leading-tight",
      body: "text-base leading-relaxed",
      label: "text-sm uppercase tracking-wide",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "body",
    align: "left",
    weight: "normal",
  },
});

type AsProp = keyof JSX.IntrinsicElements;

export type TextProps = {
  as?: AsProp;
  variant?: "h1" | "h2" | "h3" | "body" | "label";
  align?: "left" | "center" | "right";
  weight?: "normal" | "medium" | "bold";
  className?: string;
  [key: string]: any;
};

export function Text({
  as,
  variant,
  align,
  weight,
  className,
  ...props
}: TextProps) {
  const Component = (as ?? (variant === "h1" ? "h1" : variant === "h2" ? "h2" : variant === "h3" ? "h3" : variant === "label" ? "span" : "p")) as any;

  return <Component className={cn(textVariants({ variant, align, weight }), className)} {...props} />;
}

export { Text as default };
