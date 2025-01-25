import Hero from "@/components/Landing/Hero";
import NewArrivals from "@/components/Landing/NewArrivals";
import TopPicks from "@/components/Landing/TopPicks";
import { client } from "@/sanity/lib/client";
import { newArrivalsQuery, categoryQuery } from "@/sanity/schemaTypes/sanity_query";
import ProductCategories, { IProduct } from "@/components/Landing/ProductCategories";
import Blog from "@/components/ourBlog";
import SellingProducts from "@/components/Landing/SellingProducts";

export type Category = {
  _id: string;
  category: string;
  image: string;
  categorySlug: string;
};

const Home = async () => {
  const newArrivals = await client.fetch(newArrivalsQuery);
  const products = await client.fetch(categoryQuery);


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
      <SellingProducts/>
      <TopPicks />
      <NewArrivals product={newArrivalsProduct} />
      <Blog/>
    </main>
  );
};

export default Home;
