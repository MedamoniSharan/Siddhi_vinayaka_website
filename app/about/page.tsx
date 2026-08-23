import { BrandPillars } from "@/components/home/BrandPillars";
import { StoreLocator } from "@/components/home/StoreLocator";
import { SweetTraditions } from "@/components/home/SweetTraditions";
import styles from "../page-shell.module.css";

export default function AboutPage() {
  return (
    <>
      <div className={`section ${styles.page}`}>
        <div className="container">
          <h1 className="section-title">Our Story</h1>
          <p className={styles.body}>
            Siddhi Vinayaka Sweets & Snacks brings traditional Telangana and Andhra
            flavours to your doorstep — from sakinalu and muruku to laddus and
            homemade pickles. Freshly prepared, rooted in family recipes, and
            crafted with care for every celebration.
          </p>
        </div>
      </div>
      <SweetTraditions />
      <BrandPillars />
      <StoreLocator />
    </>
  );
}
