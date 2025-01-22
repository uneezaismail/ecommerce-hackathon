import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import NewArrivals from "@/components/NewArrivals";
import TopPicks from "@/components/TopPicks";
import { client } from "@/sanity/lib/client";
import { newArrivalsQuery, categoryQuery } from "@/sanity/schemaTypes/sanity_query";
import ProductCategories, { IProduct } from "@/components/ProductCategories";
export type Category = {
  _id: string;
  category: string;
  image: string;
  categorySlug: string;
};

const Home = async () => {
  const newArrivals = await client.fetch(newArrivalsQuery);
  const products = await client.fetch(categoryQuery);

  // Filter unique categories on the server side
  const uniqueCategories = Array.from(
    new Set(products.map((product: IProduct) => product.category))
  ).map((category) =>
    products.find((product: IProduct) => product.category === category)
  );
  const newArrivalsProduct = newArrivals[0];

  return (
    <main className="flex flex-col">
      <Hero />
      <ProductCategories products={uniqueCategories} />
      <TopPicks />
      <NewArrivals product={newArrivalsProduct} />
      <HomeContact />
    </main>
  );
};

export default Home;
