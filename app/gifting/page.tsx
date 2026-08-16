import Link from "next/link";
import styles from "../page-shell.module.css";

export default function GiftingPage() {
  return (
    <div className={`section ${styles.page}`}>
      <div className="container">
        <h1 className="section-title">Perfect Gifts for Every Occasion</h1>
        <p className="section-subtitle">
          From engagements to baby announcements, curated gifts for you and your
          loved ones.
        </p>
        <p className={styles.body}>
          Explore hampers and artisanal assortments from our bestsellers. Checkout
          is coming soon in this static demo.
        </p>
        <Link href="/shop/" className={styles.link}>
          Browse gift-ready products
        </Link>
      </div>
    </div>
  );
}
