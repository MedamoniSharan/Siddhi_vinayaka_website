import { Suspense } from "react";
import { ShopCatalog } from "./ShopCatalog";
import styles from "./shop.module.css";

export default function ShopPage() {
  return (
    <div className={`section ${styles.page}`}>
      <div className="container">
        <Suspense fallback={<p>Loading products…</p>}>
          <ShopCatalog />
        </Suspense>
      </div>
    </div>
  );
}
