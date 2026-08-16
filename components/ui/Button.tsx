import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  loading = false,
  error = false,
  fullWidth = false,
  ariaLabel,
  onClick,
  className = "",
}: ButtonProps) {
  const stateClass = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : "",
    loading ? styles.loading : "",
    error ? styles.error : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={stateClass}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      aria-invalid={error || undefined}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {loading ? <span className={styles.spinner} aria-hidden /> : null}
      <span className={loading ? styles.loadingLabel : undefined}>{children}</span>
    </button>
  );
}
