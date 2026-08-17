"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/components/commerce/CartProvider";
import { WhatsAppOrderButton } from "@/components/commerce/WhatsAppOrderButton";
import { WhatsAppIcon } from "@/components/icons/CommerceIcons";
import { formatPrice } from "@/lib/catalog";
import {
  buildProductOrderMessage,
  getWhatsAppUrl,
} from "@/lib/whatsapp";
import type { Product } from "@/lib/types";
import styles from "./ProductDetails.module.css";

export function ProductDetails({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [weight, setWeight] = useState(product.weights[0] ?? "");
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);

  async function handleAdd() {
    if (product.soldOut) return;
    setLoading(true);
    setError(false);
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

  const whatsappUrl = useMemo(() => {
    const origin =
      typeof window !== "undefined" ? window.location.origin : undefined;
    const message = buildProductOrderMessage(product, weight, { origin });
    return getWhatsAppUrl(message);
  }, [product, weight]);

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
            aria-label={
              product.soldOut
                ? `${product.name} is sold out`
                : `Add ${product.name} to cart`
            }
          >
            {added ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 7h12l-1 12H7L6 7z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M9 7a3 3 0 016 0" stroke="currentColor" strokeWidth="2" />
              </svg>
            )}
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
        <WhatsAppOrderButton
          href={whatsappUrl}
          className={styles.whatsapp}
          disabled={product.soldOut}
          ariaLabel={`Order ${product.name} on WhatsApp`}
        >
          <WhatsAppIcon size={22} />
          <span>Order on WhatsApp</span>
        </WhatsAppOrderButton>
        {error ? (
          <p className={styles.error} role="alert">
            Could not add to cart. Try again.
          </p>
        ) : null}
      </div>
    </div>
  );
}
