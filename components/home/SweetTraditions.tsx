import styles from "./SweetTraditions.module.css";

type Tradition = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const traditions: Tradition[] = [
  {
    title: "Traditional",
    description:
      "From humble beginnings in a small town to a beloved household name, we have been crafting traditional Indian delicacies with love and expertise for generations. Each sweet tells a story of heritage, flavor, and sweet memories shared across families.",
    image: "/images/traditions/traditional.svg",
    alt: "Illustration representing traditional Indian sweets",
  },
  {
    title: "Purity",
    description:
      "Crafted with purity and tradition, our sweets are made with our finest cattle ghee, ensuring each bite is a taste of pure bliss.",
    image: "/images/traditions/purity.svg",
    alt: "Illustration representing pure ingredients and ghee",
  },
  {
    title: "Social Responsibility",
    description:
      "We not only delight taste buds but also nurture minds. By establishing schools and colleges for students, we embody a commitment to uplift the community and pave the way for a brighter future.",
    image: "/images/traditions/social-responsibility.svg",
    alt: "Illustration representing education and community support",
  },
];

export type SweetTraditionsProps = {
  title?: string;
  items?: Tradition[];
};

export function SweetTraditions({
  title = "Our Sweet Traditions",
  items = traditions,
}: SweetTraditionsProps) {
  return (
    <section
      className={styles.section}
      aria-labelledby="sweet-traditions-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="sweet-traditions-title" className={styles.title}>
            {title}
          </h2>
        </header>
        <div className={styles.grid}>
          {items.map((item) => (
            <div className={styles.column} key={item.title}>
              <article className={styles.card}>
                <figure className={styles.imageWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={styles.image}
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    width={220}
                    height={150}
                  />
                </figure>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
