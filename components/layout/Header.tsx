"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { useCart } from "@/components/commerce/CartProvider";
import styles from "./Header.module.css";

const NAV = [
  {
    label: "Shop All",
    href: "/shop/",
    children: [
      { label: "Sweets", href: "/shop/?collection=sweets" },
      { label: "Savouries", href: "/shop/?collection=savouries" },
      { label: "Pickles", href: "/shop/?collection=pickles" },
      { label: "Healthy", href: "/shop/?collection=healthy" },
      { label: "Festival", href: "/shop/?collection=festival" },
      { label: "Premium", href: "/shop/?collection=premium" },
      { label: "Best Sellers", href: "/shop/?collection=best-sellers" },
    ],
  },
  { label: "Gifting", href: "/gifting/" },
  { label: "Our Story", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export function Header() {
  const { itemCount, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dialogTitle = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const leftNav = NAV.slice(0, Math.ceil(NAV.length / 2));
  const rightNav = NAV.slice(Math.ceil(NAV.length / 2));

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <div className={styles.sideLeft}>
          <button
            type="button"
            className={`${styles.iconBtn} ${styles.menuBtn}`}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <span className={styles.burger} aria-hidden />
          </button>

          <nav className={styles.desktopNav} aria-label="Primary">
            <ul>
              {leftNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Link href="/" className={styles.logo} aria-label="Siddhi Vinayka Home Foods home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" width={512} height={512} alt="Siddhi Vinayka Home Foods" />
        </Link>

        <div className={styles.sideRight}>
          <nav className={styles.desktopNav} aria-label="Secondary">
            <ul>
              {rightNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label={`Cart, ${itemCount} items`}
              onClick={openCart}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 7h12l-1 12H7L6 7z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M9 7a3 3 0 016 0" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className={styles.badge}>{itemCount}</span>
            </button>
          </div>
        </div>
      </div>

      {searchOpen ? (
        <div className={styles.searchPanel} role="search">
          <label className="sr-only" htmlFor="site-search">
            Search our store
          </label>
          <input
            id="site-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sweets, murukku, mixture…"
            aria-invalid={false}
          />
          <p className={styles.popular}>
            Popular: Ghee Mysore Pak · Kaju Katli · Murukku · Sev
          </p>
        </div>
      ) : null}

      {mobileOpen ? (
        <div className={styles.mobileRoot}>
          <button
            type="button"
            className={styles.mobileBackdrop}
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            className={styles.mobilePanel}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitle}
          >
            <div className={styles.mobileHeader}>
              <h2 id={dialogTitle}>Menu</h2>
              <button
                ref={closeRef}
                type="button"
                className={styles.iconBtn}
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                ×
              </button>
            </div>
            <ul className={styles.mobileList}>
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                  {item.children ? (
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link href={child.href} onClick={() => setMobileOpen(false)}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
              <li>
                <Link href="/account/" onClick={() => setMobileOpen(false)}>
                  Account
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
