import styles from "./TrustStrip.module.css";

const ITEMS = [
  {
    label: "Freshly prepared",
    icon: "/images/icons/freshly.svg",
  },
  {
    label: "Lab-tested Ingredients",
    icon: "/images/icons/lab-tested.svg",
  },
  {
    label: "On-time delivery",
    icon: "/images/icons/delivery.svg",
  },
  {
    label: "Easy Refunds",
    icon: "/images/icons/refunds.svg",
  },
];

export function TrustStrip() {
  return (
    <div className={styles.strip} role="region" aria-label="Store promises">
      <ul className={styles.list}>
        {ITEMS.map((item) => (
          <li key={item.label} className={styles.item}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.icon}
              src={item.icon}
              alt=""
              width={28}
              height={28}
              aria-hidden
            />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
