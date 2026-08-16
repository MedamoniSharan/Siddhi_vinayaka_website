import Link from "next/link";
import stories from "@/data/stories.json";
import type { Story } from "@/lib/types";
import styles from "../page-shell.module.css";

const items = stories as Story[];

export default function BlogPage() {
  return (
    <div className={`section ${styles.page}`}>
      <div className="container">
        <h1 className="section-title">Stories</h1>
        <ul className={styles.list}>
          {items.map((story) => (
            <li key={story.id}>
              <Link href={story.href}>{story.title}</Link>
              <p className={styles.body}>{story.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
