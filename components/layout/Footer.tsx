"use client";

import Link from "next/link";
import { useState } from "react";
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import styles from "./Footer.module.css";

const footerGroups = [
  {
    title: "Shop",
    links: [
      { label: "Best Sellers", href: "/shop/?collection=best-sellers" },
      { label: "Sweets", href: "/shop/?collection=sweets" },
      { label: "Snacks", href: "/shop/?collection=savouries" },
      { label: "Pickles", href: "/shop/?collection=pickles" },
      { label: "Healthy", href: "/shop/?collection=healthy" },
      { label: "Festival", href: "/shop/?collection=festival" },
      { label: "Premium", href: "/shop/?collection=premium" },
      { label: "Pelli Saree", href: "/shop/?collection=pelli-saree" },
    ],
  },
  {
    title: "Brand",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Our Stores", href: "/about/#stores" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Track Order", href: "/contact/" },
      { label: "Contact Us", href: "/contact/" },
      { label: "Gifting", href: "/gifting/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Shipping Policy (Domestic)", href: "/policies/shipping/" },
      {
        label: "Shipping Policy (International)",
        href: "/policies/shipping-international/",
      },
      {
        label: "Return, Refund and Cancellation Policy",
        href: "/policies/returns/",
      },
      { label: "Terms of Service", href: "/policies/terms/" },
      { label: "Privacy Policy", href: "/policies/privacy/" },
    ],
  },
];

export function Footer() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <footer className={styles.footer}>
      <div className={styles.shell}>
        <header className={styles.intro}>
          <Link href="/" className={styles.brandMark} aria-label="Siddhi Vinayka Home Foods home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              width={512}
              height={512}
              alt=""
              className={styles.brandLogo}
            />
            <span className={styles.brandText}>
              <span className={styles.brandScript}>Siddhi Vinayka</span>
              <span className={styles.brandSubtitle}>HOME FOODS</span>
            </span>
          </Link>

          <div className={styles.deliveryNote}>
            <svg className={styles.deliveryIcon} viewBox="0 0 64 64" aria-hidden="true">
              <path
                d="M9 27 32 10l23 17v25H9Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              />
              <path
                d="M20 51V34h24v17M27 25h10M18 18h28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              />
              <circle cx="32" cy="20" r="3" fill="currentColor" />
            </svg>
            <p>
              7-2-199, Opp. Surabhi Car Wash, Mankammathota, Karimnagar 505001.
              Fresh homemade sweets, savouries &amp; pickles delivered across India.
            </p>
          </div>
        </header>

        <div className={styles.divider} aria-hidden="true">
          <span className={styles.dividerDiamond}>✦</span>
        </div>

        <div className={styles.main}>
          <div className={styles.linksArea}>
            <nav className={styles.navigation} aria-label="Footer navigation">
              {footerGroups.map((group) => {
                const isOpen = openGroup === group.title;
                return (
                  <section
                    className={`${styles.group} ${isOpen ? styles.isOpen : ""}`}
                    key={group.title}
                  >
                    <button
                      className={styles.groupHeading}
                      type="button"
                      onClick={() => setOpenGroup(isOpen ? null : group.title)}
                      aria-expanded={isOpen}
                    >
                      <span>{group.title}</span>
                      <svg
                        className={styles.groupChevron}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <ul className={styles.groupList}>
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </nav>

            <div className={styles.socialRow}>
              <h2>We&apos;re social</h2>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg width="21" height="21" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.6l.4-3H14V9z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/siddhivinayakaofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <aside className={styles.contactCard}>
            <h2>We&apos;re always here to help you</h2>
            <div className={styles.cardRule} aria-hidden="true">
              <span>✦</span>
            </div>
            <div className={styles.contactDetail}>
              <div>
                <h3>Address</h3>
                <p>
                  7-2-199, Opp. Surabhi Car Wash, Mankammathota, Karimnagar
                  505001
                </p>
                <p>
                  <a
                    href="https://maps.app.goo.gl/bjEE3ky7dcjrfG8w6?g_st=iw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
              <div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:siddhivinayakaofficial@gmail.com">
                    siddhivinayakaofficial@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h3>Contact</h3>
                <p>
                  Phone/Whatsapp:{" "}
                  <a
                    href={getWhatsAppUrl(
                      "Hello Siddhi Vinayaka Home Foods, I would like to get in touch.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          Copyright © {new Date().getFullYear()} Siddhi Vinayka Home Foods. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
