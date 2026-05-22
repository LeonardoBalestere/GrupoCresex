import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed gap-2",
  {
    variants: {
      variant: {
        primary: "bg-[#c71212] text-[#fafafa] border-2 border-[#c71212] hover:border-[#d4af37] hover:shadow-[0_10px_30px_rgba(199,18,18,0.4)]",
        secondary: "bg-[#d4af37] text-black border-2 border-[#d4af37] hover:bg-[#fafafa] hover:text-[#c71212] hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]",
        outline: "bg-transparent border-2 border-[#c71212] text-[#c71212] hover:bg-[#c71212] hover:text-[#fafafa] hover:shadow-[0_10px_30px_rgba(199,18,18,0.2)]",
        ghost: "bg-transparent text-[#c71212] border-2 border-transparent hover:bg-[#fafafa] hover:border-[#c71212] hover:shadow-[0_5px_15px_rgba(199,18,18,0.1)]",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
        icon: "w-10 h-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
