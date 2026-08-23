export type Product = {
  id: string;
  slug: string;
  name: string;
  /** Price for 1 kg (weight products) or 1 piece (piece products). */
  price: number;
  compareAt: number | null;
  image: string;
  badge: string | null;
  tag: string | null;
  weights: string[];
  reviews: number;
  description: string;
  collection: string[];
  soldOut: boolean;
  oil: string | null;
};

export type Category = {
  id: string;
  name: string;
  href: string;
  image: string;
  badge: string | null;
};

export type Store = {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  mapEmbedUrl: string;
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
};

export type Story = {
  id: string;
  title: string;
  href: string;
  excerpt: string;
};

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  weight: string;
  quantity: number;
};
