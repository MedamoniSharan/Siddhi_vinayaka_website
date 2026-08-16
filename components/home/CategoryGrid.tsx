import Link from "next/link";
import categories from "@/data/categories.json";
import type { Category } from "@/lib/types";
import styles from "./CategoryGrid.module.css";

const items = categories as Category[];

export function CategoryGrid() {
  return (
    <section className={styles.section} aria-labelledby="shop-by-category">
      <div className="container">
        <h2 id="shop-by-category" className="section-title">
          Shop By Category
        </h2>
        <ul className={styles.scroller}>
          {items.map((cat) => (
            <li key={cat.id}>
              <Link href={cat.href} className={styles.item}>
                <span className={styles.circle}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cat.image} alt="" />
                  {cat.badge ? <span className={styles.badge}>{cat.badge}</span> : null}
                </span>
                <span className={styles.label}>{cat.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
