import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Siddhi Vinayaka Sweets & Snacks",
  description:
    "Get in touch with Siddhi Vinayaka Sweets & Snacks. We will get back to you within 24–48 hours.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
