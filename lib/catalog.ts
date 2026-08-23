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

/** Parse pack labels like "250 g", "500 g", "1 kg" into kilograms. */
export function parseWeightToKg(weight: string): number {
  const match = weight.trim().toLowerCase().match(/^([\d.]+)\s*(kg|g)$/);
  if (!match) return 1;
  const value = Number(match[1]);
  if (!Number.isFinite(value) || value <= 0) return 1;
  return match[2] === "kg" ? value : value / 1000;
}

/** Parse piece labels like "1 pc", "10 pcs" into piece count. */
export function parsePieceCount(weight: string): number | null {
  const match = weight
    .trim()
    .toLowerCase()
    .match(/^([\d.]+)\s*(pc|pcs|piece|pieces)$/);
  if (!match) return null;
  const value = Number(match[1]);
  if (!Number.isFinite(value) || value <= 0) return null;
  return value;
}

export function isPiecePack(weight: string): boolean {
  return parsePieceCount(weight) !== null;
}

/**
 * Scale base price by selected pack.
 * Weight packs use the 1 kg rate; piece packs use the per-piece rate.
 */
export function getPriceForWeight(basePrice: number, weight: string): number {
  const pieces = parsePieceCount(weight);
  const multiplier = pieces ?? parseWeightToKg(weight);
  const raw = basePrice * multiplier;
  return Math.round(raw * 100) / 100;
}

export function getDefaultWeight(weights: string[]): string {
  const onePiece = weights.find((w) => parsePieceCount(w) === 1);
  if (onePiece) return onePiece;
  const oneKg = weights.find((w) => {
    if (isPiecePack(w)) return false;
    return parseWeightToKg(w) === 1;
  });
  return oneKg ?? weights[0] ?? "";
}
