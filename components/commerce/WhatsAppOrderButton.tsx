"use client";

import type { ReactNode } from "react";

type WhatsAppOrderButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
};

export function WhatsAppOrderButton({
  href,
  children,
  className,
  disabled = false,
  ariaLabel,
  onClick,
}: WhatsAppOrderButtonProps) {
  if (disabled) {
    return (
      <button type="button" className={className} disabled aria-label={ariaLabel}>
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
