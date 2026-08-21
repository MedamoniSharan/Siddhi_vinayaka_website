"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/commerce/CartProvider";
import {
  formatPrice,
  getDefaultWeight,
  getPriceForWeight,
} from "@/lib/catalog";
import type { Product } from "@/lib/types";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [weight, setWeight] = useState(() => getDefaultWeight(product.weights));
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);
  const unitPrice = getPriceForWeight(product.price, weight);
  const compareAtPrice = product.compareAt
    ? getPriceForWeight(product.compareAt, weight)
    : null;

  async function handleAdd() {
    if (product.soldOut) return;
    setError(false);
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 220));
      addItem(product, weight);
      setAdded(true);
      window.setTimeout(() => setAdded(false), 1800);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const badgeLabel = product.soldOut ? "Sold Out" : product.badge;
  const showBestSeller =
    typeof badgeLabel === "string" && badgeLabel.toLowerCase().includes("best");

  return (
    <article className={styles.card} data-sold-out={product.soldOut || undefined}>
      <Link href={`/product/${product.slug}/`} className={styles.mediaLink}>
        <div className={styles.media}>
          {product.tag ? <p className={styles.topTag}>{product.tag}</p> : null}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} loading="lazy" />
          <div className={styles.mediaTags}>
            {showBestSeller ? <span className={styles.badge}>Best seller</span> : null}
          </div>
          {product.soldOut ? <span className={styles.badgeSold}>Sold Out</span> : null}
        </div>
      </Link>

      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link href={`/product/${product.slug}/`}>{product.name}</Link>
        </h3>

        <div className={styles.priceRow}>
          <strong className={styles.price}>{formatPrice(unitPrice)}</strong>
          {compareAtPrice ? (
            <span className={styles.compare}>{formatPrice(compareAtPrice)}</span>
          ) : null}
        </div>

        <div className={styles.detailsRow}>
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
          ) : (
            <span />
          )}

          {product.reviews > 0 ? (
            <div className={styles.reviews} aria-label={`${product.reviews} reviews`}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 17.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73L18.18 21z" />
              </svg>
              <span>({product.reviews})</span>
            </div>
          ) : null}
        </div>

        <form
          className={styles.cartForm}
          onSubmit={(event) => {
            event.preventDefault();
            void handleAdd();
          }}
        >
          <button
            type="submit"
            className={`${styles.addToCart} ${added ? styles.added : ""}`}
            disabled={product.soldOut || loading}
            aria-busy={loading || undefined}
            aria-invalid={error || undefined}
            aria-label={
              product.soldOut
                ? `${product.name} is sold out`
                : `Add ${product.name} ${weight} to cart`
            }
          >
            <span>
              {loading
                ? "Adding..."
                : added
                  ? "Added to cart"
                  : product.soldOut
                    ? "Sold Out"
                    : "Add to cart"}
            </span>
          </button>
        </form>

        {error ? (
          <p className={styles.errorText} role="alert">
            Could not add to cart. Try again.
          </p>
        ) : null}
      </div>
    </article>
  );
}
