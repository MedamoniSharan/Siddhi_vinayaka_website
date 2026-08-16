"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/commerce/CartProvider";
import { formatPrice } from "@/lib/catalog";
import type { Product } from "@/lib/types";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [weight, setWeight] = useState(product.weights[0] ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleAdd() {
    if (product.soldOut) return;
    setError(false);
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 220));
      addItem(product, weight);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <article className={styles.card} data-sold-out={product.soldOut || undefined}>
      {product.tag ? <p className={styles.tag}>{product.tag}</p> : null}
      <Link href={`/product/${product.slug}/`} className={styles.mediaLink}>
        <div className={styles.media}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} loading="lazy" />
          {product.badge ? (
            <span
              className={
                product.soldOut || product.badge.toLowerCase().includes("sold")
                  ? styles.badgeSold
                  : styles.badge
              }
            >
              {product.badge}
            </span>
          ) : null}
        </div>
        <h3 className={styles.title}>{product.name}</h3>
      </Link>
      <div className={styles.priceRow}>
        <span className={styles.price}>{formatPrice(product.price)}</span>
        {product.compareAt ? (
          <span className={styles.compare}>{formatPrice(product.compareAt)}</span>
        ) : null}
      </div>
      {product.weights.length > 1 ? (
        <div
          className={styles.weights}
          role="group"
          aria-label={`Select weight for ${product.name}`}
        >
          {product.weights.map((w) => (
            <button
              key={w}
              type="button"
              className={weight === w ? styles.weightActive : styles.weight}
              aria-pressed={weight === w}
              onClick={() => setWeight(w)}
            >
              {w}
            </button>
          ))}
        </div>
      ) : (
        <p className={styles.singleWeight}>{product.weights[0]}</p>
      )}
      {product.reviews > 0 ? (
        <p className={styles.reviews}>{product.reviews} reviews</p>
      ) : (
        <p className={styles.reviews}>No reviews</p>
      )}
      <p className={styles.description}>{product.description}</p>
      <Button
        fullWidth
        variant="dark"
        disabled={product.soldOut}
        loading={loading}
        error={error}
        onClick={handleAdd}
        ariaLabel={
          product.soldOut
            ? `${product.name} is sold out`
            : `Add ${product.name} ${weight} to cart`
        }
      >
        {product.soldOut ? "Sold Out" : "Add to cart"}
      </Button>
      {error ? (
        <p className={styles.errorText} role="alert">
          Could not add to cart. Try again.
        </p>
      ) : null}
    </article>
  );
}
