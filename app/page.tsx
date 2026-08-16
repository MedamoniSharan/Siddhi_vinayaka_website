import { CategoryGrid } from "@/components/home/CategoryGrid";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { OurCollections } from "@/components/home/OurCollections";
import { Testimonials } from "@/components/home/Testimonials";
import { BrandPillars } from "@/components/home/BrandPillars";
import { StoreLocator } from "@/components/home/StoreLocator";
import { BlogTeasers } from "@/components/home/BlogTeasers";
import { ProductRail } from "@/components/commerce/ProductRail";
import { getProductsByCollection, allProducts } from "@/lib/catalog";

export default function HomePage() {
  const bestSellers = getProductsByCollection("best-sellers").slice(0, 12);
  const savouries = getProductsByCollection("savouries");
  const sweets = getProductsByCollection("sweets");
  const pickles = getProductsByCollection("pickles");
  const healthy = getProductsByCollection("healthy");

  return (
    <>
      <CategoryGrid />
      <HeroCarousel />
      <OurCollections />
      <ProductRail
        title="Our Best Sellers"
        subtitle={`${allProducts.length} traditional favourites — sweets, snacks & pickles.`}
        products={bestSellers}
        viewAllHref="/shop/?collection=best-sellers"
      />
      <ProductRail
        title="Snacks"
        subtitle="Sakinalu, muruku, chegodi, karapusa and more."
        products={savouries}
        viewAllHref="/shop/?collection=savouries"
      />
      <ProductRail
        title="Sweets"
        subtitle="Laddus, badusha, bakshalu, gavvalu and festive sweets."
        products={sweets}
        viewAllHref="/shop/?collection=sweets"
      />
      <ProductRail
        title="Pickles"
        subtitle="Mutton, chicken, fish & prawns pickle."
        products={pickles}
        viewAllHref="/shop/?collection=pickles"
      />
      <ProductRail
        title="Healthy Laddus"
        subtitle="Ragi, flax seed, minapa, pesara and more."
        products={healthy}
        viewAllHref="/shop/?collection=healthy"
      />
      <Testimonials />
      <BrandPillars />
      <StoreLocator />
      <BlogTeasers />
    </>
  );
}
