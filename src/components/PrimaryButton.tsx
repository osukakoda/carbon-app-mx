import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  testId?: string;
}

export function PrimaryButton({
  children,
  className = "",
  testId,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      type="button"
      data-testid={testId ?? "carbon-button-primary"}
      className={`
        rounded-none 
        bg-[var(--cds-button-primary)]
        px-[var(--cds-spacing-05)]
        min-h-[3rem]
        text-[var(--cds-text-on-color)]
        text-sm
        leading-5
        hover:bg-[var(--cds-button-primary-hover)]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--cds-focus)]
        disabled:bg-[var(--cds-button-disabled)]
        disabled:text-[var(--cds-text-disabled)]
        transition-colors
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}