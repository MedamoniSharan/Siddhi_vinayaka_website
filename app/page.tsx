import { CategoryGrid } from "@/components/home/CategoryGrid";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { Testimonials } from "@/components/home/Testimonials";
import { SweetTraditions } from "@/components/home/SweetTraditions";
import { StoreLocator } from "@/components/home/StoreLocator";
import { ProductRail } from "@/components/commerce/ProductRail";
import { TrustStrip } from "@/components/layout/TrustStrip";
import { getProductsByCollection, allProducts } from "@/lib/catalog";

export default function HomePage() {
  const bestSellers = getProductsByCollection("best-sellers").slice(0, 12);
  const savouries = getProductsByCollection("savouries");
  const sweets = getProductsByCollection("sweets");
  const pickles = getProductsByCollection("pickles");
  const premium = getProductsByCollection("premium");

  return (
    <>
      <TrustStrip />
      <HeroCarousel />
      <CategoryGrid />
      <ProductRail
        title="Our Best Sellers"
        subtitle={`${allProducts.length} traditional favourites — sweets, snacks & pickles.`}
        products={bestSellers}
        viewAllHref="/shop/?collection=best-sellers"
      />
      <ProductRail
        title="Savouries"
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
        title="Our Master Pieces"
        subtitle="Premium picks crafted for celebrations."
        products={premium}
        viewAllHref="/shop/?collection=premium"
      />
      <Testimonials />
      <SweetTraditions />
      <StoreLocator />
    </>
  );
}
