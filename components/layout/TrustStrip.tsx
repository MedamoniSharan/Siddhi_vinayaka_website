import styles from "./TrustStrip.module.css";

const ITEMS = [
  { label: "Freshly prepared", icon: "⏱" },
  { label: "Lab-tested ingredients", icon: "⚗" },
  { label: "On-time delivery", icon: "📦" },
  { label: "Easy Refunds", icon: "↩" },
];

export function TrustStrip() {
  return (
    <div className={styles.strip} role="region" aria-label="Store promises">
      <ul className={styles.list}>
        {ITEMS.map((item) => (
          <li key={item.label} className={styles.item}>
            <span aria-hidden className={styles.icon}>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
