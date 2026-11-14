import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-body font-medium transition-all duration-200 ease-[var(--ease-brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cta)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "rounded-xl bg-[var(--color-cta)] text-white shadow-sm hover:bg-[var(--color-cta-hover)] hover:shadow-md active:scale-[0.98]",
        ghost:
          "rounded-xl bg-transparent text-[var(--color-ink)] border border-[var(--color-ink)]/20 hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)]/5",
        ink: "rounded-xl bg-[var(--color-ink)] text-[var(--color-bg)] hover:bg-[var(--color-ink)]/90 active:scale-[0.98]",
        pill: "rounded-full bg-[var(--color-sand)] text-[var(--color-ink)] hover:bg-[var(--color-sand)]/80",
        icon:
          "rounded-full border border-[var(--color-ink)]/15 bg-transparent text-[var(--color-ink)]/80 hover:border-[var(--color-cta)] hover:text-[var(--color-cta)]",
        /** Icon button on dark surfaces (olive band / contact dark hero / mobile sheet) */
        iconInverse:
          "rounded-full ring-1 ring-white/15 bg-white/5 text-[var(--color-bg)]/85 hover:bg-white/10 hover:text-[var(--color-bg)]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[15px]",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10 p-0",
        iconSm: "h-9 w-9 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
