import Link from "next/link";
import collections from "@/data/collections.json";
import { getProductsByCollection } from "@/lib/catalog";
import styles from "./OurCollections.module.css";

type CollectionItem = {
  id: string;
  name: string;
  href: string;
  image: string;
  collectionKey: string;
};

const items = collections as CollectionItem[];

export function OurCollections() {
  return (
    <section
      className={styles.section}
      aria-labelledby="our-collections-heading"
    >
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h2 id="our-collections-heading" className={styles.title}>
            Our Collections
          </h2>
          <p className={styles.subtitle}>
            Explore delicious products: sweets, snacks, pickles and more —
            freshly prepared traditional favourites.
          </p>
        </header>

        <ul className={styles.grid}>
          {items.map((item) => {
            const count = getProductsByCollection(item.collectionKey).length;
            return (
              <li key={item.id}>
                <Link href={item.href} className={styles.card}>
                  <span className={styles.media}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt="" />
                  </span>
                  <span className={styles.meta}>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.count}>
                      {count} Product{count === 1 ? "" : "s"}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
