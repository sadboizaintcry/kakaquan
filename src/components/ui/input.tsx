import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md bg-elevated px-3.5 text-sm text-fg",
        "shadow-[0_0_0_1px_rgba(244,239,232,0.1)]",
        "placeholder:text-subtle",
        "transition-[box-shadow] duration-150 ease-out",
        "hover:shadow-[0_0_0_1px_rgba(244,239,232,0.16)]",
        "focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_var(--color-accent)]",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
