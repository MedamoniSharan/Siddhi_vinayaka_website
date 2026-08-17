import Link from "next/link";
import { ProductCard } from "@/components/commerce/ProductCard";
import type { Product } from "@/lib/types";
import styles from "./ProductRail.module.css";

type ProductRailProps = {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllHref?: string;
};

export function ProductRail({
  title,
  subtitle,
  products,
  viewAllHref = "/shop/",
}: ProductRailProps) {
  const featured = products.slice(0, 4);

  if (!featured.length) {
    return (
      <section className={styles.section}>
        <div className="container">
          <h2 className="section-title">{title}</h2>
          <p className={styles.empty}>No products available in this collection.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>
        <div className={styles.rail} aria-label={`${title} products`}>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className={styles.actions}>
          <Link href={viewAllHref} className={styles.pixelCornerButton}>
            <span>View All</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
