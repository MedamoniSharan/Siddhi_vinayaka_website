"use client";

import styles from "./AnnouncementBar.module.css";

const MESSAGES = [
  "Partial COD now available | Not applicable for local delivery",
  "Order by 10PM -> Delivered within 3 hours in these cities",
  "Apply ‘WELCOME5’ for additional 5% discount",
  "4-7 days International Shipping available",
  "Free delivery across India on orders above ₹1,500",
];

export function AnnouncementBar() {
  const loop = [...MESSAGES, ...MESSAGES];

  return (
    <div className={styles.bar} role="region" aria-label="Promotions">
      <div className={styles.track}>
        {loop.map((msg, i) => (
          <a key={`${msg}-${i}`} href="/shop/" className={styles.item}>
            {msg}
          </a>
        ))}
      </div>
    </div>
  );
}
