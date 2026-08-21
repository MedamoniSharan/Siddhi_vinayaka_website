import { formatPrice, getPriceForWeight } from "@/lib/catalog";
import type { CartItem, Product } from "@/lib/types";

export const WHATSAPP_PHONE = "919948647319";
export const WHATSAPP_DISPLAY = "+91 99486 47319";

export function buildContactMessage(fields: {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const lines = [
    "Hello Siddhi Vinayaka Home Foods,",
    "",
    "I would like to get in touch:",
    "",
  ];

  if (fields.name?.trim()) lines.push(`Name: ${fields.name.trim()}`);
  if (fields.email?.trim()) lines.push(`Email: ${fields.email.trim()}`);
  if (fields.phone?.trim()) lines.push(`Phone: ${fields.phone.trim()}`);
  if (fields.subject?.trim()) lines.push(`Subject: ${fields.subject.trim()}`);

  lines.push("", "Message:", fields.message.trim(), "", "Thank you!");

  return lines.join("\n");
}

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function buildProductOrderMessage(
  product: Product,
  weight: string,
  options?: { quantity?: number; origin?: string },
) {
  const quantity = options?.quantity ?? 1;
  const unitPrice = getPriceForWeight(product.price, weight);
  const lineTotal = unitPrice * quantity;
  const productUrl = options?.origin
    ? `${options.origin}/product/${product.slug}/`
    : `/product/${product.slug}/`;

  return [
    "Hello Siddhi Vinayaka Home Foods,",
    "",
    "I would like to order:",
    "",
    `• ${product.name}`,
    `• Weight: ${weight}`,
    `• Quantity: ${quantity}`,
    `• Price: ${formatPrice(unitPrice)}${quantity > 1 ? ` (Total: ${formatPrice(lineTotal)})` : ""}`,
    "",
    `Product: ${productUrl}`,
    "",
    "Please confirm availability and delivery details. Thank you!",
  ].join("\n");
}

export function buildCartOrderMessage(
  items: CartItem[],
  subtotal: number,
  options?: { origin?: string },
) {
  const lines = items.map((item, index) => {
    const lineTotal = item.price * item.quantity;
    const productUrl = options?.origin
      ? `${options.origin}/product/${item.slug}/`
      : `/product/${item.slug}/`;

    return `${index + 1}. ${item.name} (${item.weight}) × ${item.quantity} — ${formatPrice(lineTotal)}\n   ${productUrl}`;
  });

  return [
    "Hello Siddhi Vinayaka Home Foods,",
    "",
    "I would like to place an order:",
    "",
    ...lines,
    "",
    `Estimated subtotal: ${formatPrice(subtotal)}`,
    "",
    "Please confirm availability and delivery details. Thank you!",
  ].join("\n");
}
