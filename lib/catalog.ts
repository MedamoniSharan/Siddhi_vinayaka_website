import products from "@/data/products.json";
import type { Product } from "@/lib/types";

export const allProducts = products as Product[];

export type ProductSort = "featured" | "price-asc" | "price-desc" | "name-asc";

export type ProductFilterOptions = {
  collection?: string | null;
  oil?: string | null;
  sort?: ProductSort;
};

export function getProductBySlug(slug: string) {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCollection(collection: string) {
  return allProducts.filter((p) => p.collection.includes(collection));
}

export function filterProducts(
  source: Product[],
  { collection, oil, sort = "featured" }: ProductFilterOptions,
) {
  let result = source;

  if (collection) {
    result = result.filter((product) => product.collection.includes(collection));
  }

  if (oil) {
    result = result.filter((product) => product.oil === oil);
  }

  result = [...result];

  switch (sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      break;
  }

  return result;
}

export function formatPrice(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
