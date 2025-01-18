import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import NewArrivals from "@/components/NewArrivals";
import Blog from "@/components/ourBlog";

import TopPicks from "@/components/TopPicks";
import { client } from "@/sanity/lib/client";
import ProductCategories from "./category/page";
import {
  categoryQuery,
  newArrivalsQuery,
} from "@/sanity/schemaTypes/sanity_query";

async function Home() {
  const products = await client.fetch(categoryQuery);
  const newArrivals = await client.fetch(newArrivalsQuery);
  const newArrivalsProduct = newArrivals[0];
  return (
    <main className="flex flex-col">
      <Hero />
      <ProductCategories products={products} />
      <TopPicks />
      <NewArrivals product={newArrivalsProduct} />
      <Blog />
      <HomeContact />
    </main>
  );
}

export default Home;
