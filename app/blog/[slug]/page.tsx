import Link from "next/link";
import stories from "@/data/stories.json";
import type { Story } from "@/lib/types";
import styles from "../../page-shell.module.css";

export function generateStaticParams() {
  return [
    { slug: "corporate-gifting" },
    { slug: "murukku-guide" },
    { slug: "podi-guide" },
  ];
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const items = stories as Story[];
  const story = items.find((s) => s.href.includes(slug));

  return (
    <div className={`section ${styles.page}`}>
      <div className="container">
        <p>
          <Link href="/blog/">← Back to Stories</Link>
        </p>
        <h1 className="section-title">{story?.title ?? "Story"}</h1>
        <p className={styles.body}>
          {story?.excerpt ??
            "This is a static placeholder article for Phase 1 visual parity."}
        </p>
        <p className={styles.body}>
          Full editorial content will be expanded with Sidhi Vinayaka stories.
        </p>
      </div>
    </div>
  );
}
