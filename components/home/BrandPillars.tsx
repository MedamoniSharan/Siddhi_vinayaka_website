import styles from "./BrandPillars.module.css";

const PILLARS = [
  {
    title: "Freshly Prepared",
    body: "Prepared daily for taste and quality.",
  },
  {
    title: "Authentic Taste",
    body: "Recipes rooted across India.",
  },
  {
    title: "Pure Ghee",
    body: "Made with pure ghee for rich flavour.",
  },
  {
    title: "Handcrafted with Care",
    body: "Crafted by hand, every time.",
  },
  {
    title: "Lab-Tested Ingredients",
    body: "Ingredients are tested for safety and purity.",
  },
];

export function BrandPillars() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="brand-pillars">
      <div className="container">
        <p className={styles.since}>Blessings in every bite</p>
        <h2 id="brand-pillars" className={styles.title}>
          Tradition. Taste. Trust.
        </h2>
        <ul className={styles.grid}>
          {PILLARS.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
