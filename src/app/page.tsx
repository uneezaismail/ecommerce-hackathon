import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import NewArrivals from "@/components/NewArrivals";
import Blog from "@/components/ourBlog";
import TopPicks from "@/components/TopPicks";
import { client } from "@/sanity/lib/client";
import { newArrivalsQuery } from "@/sanity/schemaTypes/sanity_query";
import ProductCategory from "./category/page";


export default async function Home() {
  const newArrivals = await client.fetch(newArrivalsQuery);
  const newArrivalsProduct = newArrivals[0];

  return (
    <main className="flex flex-col">
      <Hero />
<ProductCategory/>

      <TopPicks />
      <NewArrivals product={newArrivalsProduct} />
      
      <HomeContact />
    </main>
  );
}
