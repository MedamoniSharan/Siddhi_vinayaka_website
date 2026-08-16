import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/commerce/ProductDetails";
import { allProducts, getProductBySlug } from "@/lib/catalog";
import styles from "./product.module.css";

export function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className={`section ${styles.page}`}>
      <div className="container">
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden>/</span>
          <Link href="/shop/">Shop</Link>
          <span aria-hidden>/</span>
          <span>{product.name}</span>
        </nav>
        <ProductDetails product={product} />
      </div>
    </div>
  );
}
