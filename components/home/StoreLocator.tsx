import stores from "@/data/stores.json";
import type { Store } from "@/lib/types";
import styles from "./StoreLocator.module.css";

const items = stores as Store[];
const primaryStore = items[0];

export function StoreLocator() {
  if (!primaryStore) return null;

  return (
    <section className={`section ${styles.section}`} aria-labelledby="visit-us" id="stores">
      <div className="container">
        <div className={styles.header}>
          <h2 id="visit-us" className="section-title">
            Visit Us
          </h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.mapWrap}>
            <iframe
              className={styles.map}
              title={`Map showing ${primaryStore.name} store location`}
              src={primaryStore.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <article className={styles.card}>
            <h3>{primaryStore.name}</h3>
            <p>
              <strong>Address :</strong> {primaryStore.address}
            </p>
            <p>
              <a href={`tel:${primaryStore.phone.replace(/\s/g, "")}`}>
                {primaryStore.phone}
              </a>
            </p>
            <p>{primaryStore.hours}</p>
            <a
              className={styles.directions}
              href={primaryStore.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </article>
        </div>

        {items.length > 1 ? (
          <ul className={styles.grid}>
            {items.slice(1).map((store) => (
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
                  href={store.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
