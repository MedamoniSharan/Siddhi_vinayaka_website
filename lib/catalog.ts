import products from "@/data/products.json";
import type { Product } from "@/lib/types";

export const allProducts = products as Product[];

export function getProductBySlug(slug: string) {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCollection(collection: string) {
  return allProducts.filter((p) => p.collection.includes(collection));
}

export function formatPrice(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
