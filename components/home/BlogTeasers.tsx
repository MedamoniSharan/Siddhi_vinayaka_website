import Link from "next/link";
import stories from "@/data/stories.json";
import type { Story } from "@/lib/types";
import styles from "./BlogTeasers.module.css";

const items = stories as Story[];

export function BlogTeasers() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="stories-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="stories-heading" className="section-title">
            Stories
          </h2>
          <Link href="/blog/" className={styles.viewAll}>
            View All
          </Link>
        </div>
        <ul className={styles.grid}>
          {items.map((story) => (
            <li key={story.id}>
              <article className={styles.card}>
                <div className={styles.thumb} aria-hidden />
                <h3>
                  <Link href={story.href}>{story.title}</Link>
                </h3>
                <p>{story.excerpt}</p>
                <Link href={story.href} className={styles.readMore}>
                  Read more
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
