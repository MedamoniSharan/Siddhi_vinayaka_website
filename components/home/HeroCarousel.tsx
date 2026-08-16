"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./HeroCarousel.module.css";

type Slide = {
  id: string;
  desktop: string;
  mobile: string;
  alt: string;
  href: string;
};

const SLIDES: Slide[] = [
  {
    id: "snacks",
    desktop: "/images/hero/snacks-desktop.jpg",
    mobile: "/images/hero/snacks-mobile.jpg",
    alt: "Traditional snacks — sakinalu, muruku and more",
    href: "/shop/?collection=savouries",
  },
  {
    id: "sweets",
    desktop: "/images/hero/sweets-desktop.jpg",
    mobile: "/images/hero/sweets-mobile.jpg",
    alt: "Handcrafted sweets and laddus",
    href: "/shop/?collection=sweets",
  },
  {
    id: "pickles",
    desktop: "/images/hero/pickles-desktop.jpg",
    mobile: "/images/hero/pickles-mobile.jpg",
    alt: "Home-style mutton, chicken, fish and prawns pickle",
    href: "/shop/?collection=pickles",
  },
  {
    id: "festival",
    desktop: "/images/hero/festival-desktop.jpg",
    mobile: "/images/hero/festival-mobile.jpg",
    alt: "Festival sweets and specials",
    href: "/shop/?collection=festival",
  },
];

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setActiveSlide((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      className={styles.section}
      aria-label="Featured offers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {SLIDES.map((slide, i) => (
            <article
              key={slide.id}
              className={styles.slide}
              aria-hidden={activeSlide !== i}
            >
              <Link
                href={slide.href}
                className={styles.link}
                aria-label={`View ${slide.alt}`}
                tabIndex={activeSlide === i ? 0 : -1}
              />
              <picture className={styles.picture}>
                <source media="(max-width: 767px)" srcSet={slide.mobile} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.desktop}
                  alt={slide.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </picture>
            </article>
          ))}
        </div>
      </div>

      <nav className={styles.controls} aria-label="Choose featured slide">
        {SLIDES.map((slide, slideIndex) => (
          <button
            key={slide.id}
            className={styles.dot}
            type="button"
            aria-label={`Show slide ${slideIndex + 1}: ${slide.alt}`}
            aria-current={activeSlide === slideIndex ? "true" : "false"}
            onClick={() => setActiveSlide(slideIndex)}
          />
        ))}
      </nav>
    </section>
  );
}
