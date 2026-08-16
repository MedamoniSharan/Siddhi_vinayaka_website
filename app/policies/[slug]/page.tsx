import styles from "../../page-shell.module.css";

const POLICIES: Record<
  string,
  { title: string; body: string }
> = {
  shipping: {
    title: "Shipping Policy (Domestic)",
    body: "Orders ship across India. Free delivery on orders above ₹1,500. Local express delivery windows may apply in select cities.",
  },
  "shipping-international": {
    title: "Shipping Policy (International)",
    body: "International shipping is available to select countries with typical transit of 4–7 days. Duties and taxes may apply.",
  },
  returns: {
    title: "Return, Refund and Cancellation Policy",
    body: "Easy refunds are available for eligible issues. Perishable sweets may have limited return windows. Contact siddhivinayakaofficial@gmail.com for support.",
  },
  terms: {
    title: "Terms of Service",
    body: "By using this storefront you agree to our terms of service. This Sidhi Vinayaka static storefront for demonstration.",
  },
  privacy: {
    title: "Privacy Policy",
    body: "We respect your privacy. This static demo stores cart data only in your browser localStorage and does not transmit personal data.",
  },
};

export function generateStaticParams() {
  return Object.keys(POLICIES).map((slug) => ({ slug }));
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const policy = POLICIES[slug] ?? {
    title: "Policy",
    body: "Policy details coming soon.",
  };

  return (
    <div className={`section ${styles.page}`}>
      <div className="container">
        <h1 className="section-title">{policy.title}</h1>
        <p className={styles.body}>{policy.body}</p>
      </div>
    </div>
  );
}
