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
          Explore hampers and artisanal assortments from our bestsellers — including
          curated Pelli Saree boxes for weddings and engagements.
        </p>
        <div className={styles.links}>
          <Link href="/shop/?collection=pelli-saree" className={styles.link}>
            Shop Pelli Saree
          </Link>
          <Link href="/shop/" className={styles.link}>
            Browse all products
          </Link>
        </div>
      </div>
    </div>
  );
}
