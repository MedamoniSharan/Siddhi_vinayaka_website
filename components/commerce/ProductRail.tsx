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
  if (!products.length) {
    return (
      <section className={`section ${styles.section}`}>
        <div className="container">
          <h2 className="section-title">{title}</h2>
          <p className={styles.empty}>No products available in this collection.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <h2 className="section-title">{title}</h2>
            {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
          </div>
          <Link href={viewAllHref} className={styles.viewAll}>
            View All
          </Link>
        </div>
        <div className={styles.rail} tabIndex={0} aria-label={`${title} products`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
