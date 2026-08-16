"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/commerce/CartProvider";
import { formatPrice } from "@/lib/catalog";
import styles from "./CartDrawer.module.css";

export function CartDrawer() {
  const {
    isOpen,
    items,
    subtotal,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.backdrop}
        aria-label="Close cart"
        onClick={closeCart}
      />
      <aside
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className={styles.header}>
          <h2 id={titleId}>Shopping Cart</h2>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            aria-label="Close cart drawer"
            onClick={closeCart}
          >
            ×
          </button>
        </header>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <p>Your cart is currently empty.</p>
            <Link href="/shop/" className={styles.shopNow} onClick={closeCart}>
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={`${item.productId}-${item.weight}`} className={styles.item}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" />
                  <div className={styles.meta}>
                    <Link href={`/product/${item.slug}/`} onClick={closeCart}>
                      {item.name}
                    </Link>
                    <p>{item.weight}</p>
                    <p>{formatPrice(item.price)}</p>
                    <div className={styles.qty}>
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() =>
                          updateQuantity(item.productId, item.weight, item.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span aria-live="polite">{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() =>
                          updateQuantity(item.productId, item.weight, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className={styles.remove}
                      onClick={() => removeItem(item.productId, item.weight)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <footer className={styles.footer}>
              <div className={styles.subtotal}>
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <Button fullWidth variant="dark" disabled ariaLabel="Checkout coming soon">
                Checkout — Coming soon
              </Button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
