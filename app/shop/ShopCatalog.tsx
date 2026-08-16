"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/commerce/ProductCard";
import { allProducts, getProductsByCollection } from "@/lib/catalog";
import styles from "./shop.module.css";

export function ShopCatalog() {
  const searchParams = useSearchParams();
  const collection = searchParams.get("collection");

  const products = useMemo(() => {
    if (collection) return getProductsByCollection(collection);
    return allProducts;
  }, [collection]);

  const title = collection
    ? collection
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
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
