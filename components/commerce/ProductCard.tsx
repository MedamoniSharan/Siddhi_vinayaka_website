"use client";

import Link from "next/link";
import { useState } from "react";
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

  const badgeLabel = product.soldOut
    ? "Sold Out"
    : product.badge;

  return (
    <article
      className={styles.card}
      data-sold-out={product.soldOut || undefined}
      data-has-tag={product.tag ? "true" : undefined}
    >
      {product.tag ? <p className={styles.topTag}>{product.tag}</p> : null}

      <Link href={`/product/${product.slug}/`} className={styles.mediaLink}>
        <div className={styles.media}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} loading="lazy" />
          {badgeLabel ? (
            <span
              className={
                product.soldOut || badgeLabel.toLowerCase().includes("sold")
                  ? styles.badgeSold
                  : styles.badge
              }
            >
              {badgeLabel}
            </span>
          ) : null}
        </div>
      </Link>

      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link href={`/product/${product.slug}/`}>{product.name}</Link>
        </h3>

        <div className={styles.priceRow}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          {product.compareAt ? (
            <span className={styles.compare}>{formatPrice(product.compareAt)}</span>
          ) : null}
        </div>

        {product.weights.length > 0 ? (
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
        ) : null}

        {product.reviews > 0 ? (
          <p className={styles.reviews}>{product.reviews} reviews</p>
        ) : null}

        <button
          type="button"
          className={styles.addToCart}
          disabled={product.soldOut || loading}
          aria-busy={loading || undefined}
          aria-invalid={error || undefined}
          aria-label={
            product.soldOut
              ? `${product.name} is sold out`
              : `Add ${product.name} ${weight} to cart`
          }
          onClick={handleAdd}
        >
          {loading ? "Adding…" : product.soldOut ? "Sold Out" : "Add to cart"}
        </button>

        {error ? (
          <p className={styles.errorText} role="alert">
            Could not add to cart. Try again.
          </p>
        ) : null}
      </div>
    </article>
  );
}
