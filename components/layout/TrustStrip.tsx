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
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.strip} role="region" aria-label="Store promises">
      <div className={styles.track}>
        {loop.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className={styles.item}
            aria-hidden={index >= ITEMS.length ? true : undefined}
          >
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
          </div>
        ))}
      </div>
    </div>
  );
}
