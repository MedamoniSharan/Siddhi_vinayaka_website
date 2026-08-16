import Link from "next/link";
import styles from "./GiftingBanner.module.css";

export function GiftingBanner() {
  return (
    <section className={styles.section} aria-labelledby="gifting-heading">
      <div className={`container ${styles.inner}`}>
        <div>
          <h2 id="gifting-heading" className={styles.title}>
            Perfect Gifts for Every Occasion
          </h2>
          <p className={styles.body}>
            From engagements to baby announcements, we&apos;ve got you covered.
            Curated gifts for you and your loved ones.
          </p>
        </div>
        <Link href="/gifting/" className={styles.cta}>
          Explore Gifting by Sidhi Vinayaka
        </Link>
      </div>
    </section>
  );
}
