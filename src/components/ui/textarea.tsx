import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-lg bg-elevated px-3.5 py-3 text-sm text-fg",
        "shadow-[0_0_0_1px_rgba(244,239,232,0.1)]",
        "placeholder:text-subtle",
        "transition-[box-shadow] duration-150 ease-out",
        "hover:shadow-[0_0_0_1px_rgba(244,239,232,0.16)]",
        "focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_var(--color-accent)]",
        "resize-y disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
