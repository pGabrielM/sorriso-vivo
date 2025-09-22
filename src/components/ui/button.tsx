import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "sm" | "lg";
  }
>(({ className, variant = "default", size = "default", ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "default",
          "border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50": variant === "outline",
          "hover:bg-gray-100 text-gray-900": variant === "ghost",
        },
        {
          "h-10 px-4 py-2": size === "default",
          "h-8 px-3 text-xs": size === "sm",
          "h-12 px-8": size === "lg",
        },
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };