"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/commerce/ProductCard";
import { allProducts, filterProducts } from "@/lib/catalog";
import styles from "./shop.module.css";

const COLLECTION_LABELS: Record<string, string> = {
  "best-sellers": "Best Sellers",
  sweets: "Sweets",
  savouries: "Savouries",
  pickles: "Pickles",
  festival: "Festival",
  premium: "Premium",
  healthy: "Healthy",
};

export function ShopCatalog() {
  const searchParams = useSearchParams();
  const collection = searchParams.get("collection");

  const products = useMemo(
    () => filterProducts(allProducts, { collection }),
    [collection],
  );

  const title = collection
    ? (COLLECTION_LABELS[collection] ??
      collection
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "))
    : "Shop All";

  return (
    <>
      <h1 className="section-title">{title}</h1>
      <p className="section-subtitle">
        {products.length} product{products.length === 1 ? "" : "s"}
      </p>
      {products.length === 0 ? (
        <p className={styles.empty}>No products found in this collection.</p>
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
