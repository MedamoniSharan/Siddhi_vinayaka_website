import Link from "next/link";
import stores from "@/data/stores.json";
import type { Store } from "@/lib/types";
import styles from "./StoreLocator.module.css";

const items = stores as Store[];

export function StoreLocator() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="visit-us" id="stores">
      <div className="container">
        <div className={styles.header}>
          <h2 id="visit-us" className="section-title">
            Visit Us
          </h2>
          <Link href="/about/#stores" className={styles.viewAll}>
            View All
          </Link>
        </div>
        <ul className={styles.grid}>
          {items.map((store) => (
            <li key={store.id} className={styles.card}>
              <h3>{store.name}</h3>
              <p>
                <strong>Address :</strong> {store.address}
              </p>
              <p>
                <a href={`tel:${store.phone.replace(/\s/g, "")}`}>{store.phone}</a>
              </p>
              <p>{store.hours}</p>
              <a
                className={styles.directions}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`}
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
