"use client";

import { useState } from "react";
import testimonials from "@/data/testimonials.json";
import type { Testimonial } from "@/lib/types";
import styles from "./Testimonials.module.css";

const items = testimonials as Testimonial[];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = items[index];

  return (
    <section className={`section ${styles.section}`} aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading" className="section-title">
          Testimonials
        </h2>
        <p className="section-subtitle">Hear what our customers have to say</p>
        <figure className={styles.card}>
          <blockquote>
            <p>{item.quote}</p>
          </blockquote>
          <figcaption>{item.name}</figcaption>
        </figure>
        <div className={styles.controls}>
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % items.length)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
