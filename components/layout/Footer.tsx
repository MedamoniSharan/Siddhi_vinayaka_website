import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <p className={styles.shipping}>
          We&apos;re now delivering across India, Singapore, Malaysia, Canada, USA,
          Australia, New Zealand, United Kingdom & Gulf Countries.
        </p>
        <div className={styles.grid}>
          <div>
            <h2>Shop</h2>
            <ul>
              <li>
                <Link href="/shop/?collection=best-sellers">Best Sellers</Link>
              </li>
              <li>
                <Link href="/shop/?collection=sweets">Sweets</Link>
              </li>
              <li>
                <Link href="/shop/?collection=savouries">Snacks</Link>
              </li>
              <li>
                <Link href="/shop/?collection=pickles">Pickles</Link>
              </li>
              <li>
                <Link href="/shop/?collection=healthy">Healthy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Brand</h2>
            <ul>
              <li>
                <Link href="/about/">About Us</Link>
              </li>
              <li>
                <Link href="/about/#stores">Our Stores</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link href="/contact/">Track Order</Link>
              </li>
              <li>
                <Link href="/contact/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Legal</h2>
            <ul>
              <li>
                <Link href="/policies/shipping/">Shipping Policy (Domestic)</Link>
              </li>
              <li>
                <Link href="/policies/shipping-international/">
                  Shipping Policy (International)
                </Link>
              </li>
              <li>
                <Link href="/policies/returns/">
                  Return, Refund and Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/terms/">Terms of Service</Link>
              </li>
              <li>
                <Link href="/policies/privacy/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>We&apos;re always here to help you</h2>
            <p>
              Email{" "}
              <a href="mailto:care@sidhivinayaka.com">care@sidhivinayaka.com</a>
            </p>
            <p>
              Phone/Whatsapp:{" "}
              <a href="tel:+919876543210">+91 98765 43210</a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          Copyright © {new Date().getFullYear()} Sidhi Vinayaka Sweets & Snacks.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
