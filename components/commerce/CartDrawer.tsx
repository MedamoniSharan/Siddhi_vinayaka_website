"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
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
          <h2 id={titleId} className={styles.title}>
            Shopping Cart
          </h2>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            aria-label="Close cart drawer"
            onClick={closeCart}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>

        <div className={styles.body}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.emptyLogo}
                src="/images/logo.png"
                alt="Siddhi Vinayka Home Foods"
                width={160}
                height={160}
              />
              <p className={styles.emptyText}>Your cart is currently empty.</p>
              <Link href="/shop/" className={styles.shopNow} onClick={closeCart}>
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={`${item.productId}-${item.weight}`} className={styles.item}>
                  <Link
                    href={`/product/${item.slug}/`}
                    className={styles.itemImage}
                    onClick={closeCart}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt="" />
                  </Link>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemTop}>
                      <Link
                        href={`/product/${item.slug}/`}
                        className={styles.itemTitle}
                        onClick={closeCart}
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        className={styles.remove}
                        aria-label={`Remove ${item.name}`}
                        onClick={() => removeItem(item.productId, item.weight)}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M6 6l12 12M18 6L6 18"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className={styles.itemOption}>{item.weight}</p>
                    <p className={styles.itemPrice}>{formatPrice(item.price)}</p>
                    <div className={styles.qty} role="group" aria-label={`Quantity for ${item.name}`}>
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
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className={styles.footer}>
          <div className={styles.subtotal}>
            <span>Subtotal</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>
          <button type="button" className={styles.buyNow} disabled>
            BUY NOW
          </button>
          {items.length > 0 ? (
            <button type="button" className={styles.checkout} disabled>
              Checkout
            </button>
          ) : null}
          <p className={styles.comingSoon}>Checkout coming soon</p>
        </footer>
      </aside>
    </div>
  );
}
