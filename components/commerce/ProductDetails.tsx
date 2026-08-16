"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/commerce/CartProvider";
import { formatPrice } from "@/lib/catalog";
import type { Product } from "@/lib/types";
import styles from "./ProductDetails.module.css";

export function ProductDetails({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [weight, setWeight] = useState(product.weights[0] ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleAdd() {
    if (product.soldOut) return;
    setLoading(true);
    setError(false);
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
    <div className={styles.layout}>
      <div className={styles.media}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.info}>
        {product.tag ? <p className={styles.tag}>{product.tag}</p> : null}
        <h1>{product.name}</h1>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.weights} role="group" aria-label="Select weight">
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
              : `Add ${product.name} to cart`
          }
        >
          {product.soldOut ? "Sold Out" : "Add to cart"}
        </Button>
        {error ? (
          <p className={styles.error} role="alert">
            Could not add to cart. Try again.
          </p>
        ) : null}
      </div>
    </div>
  );
}
