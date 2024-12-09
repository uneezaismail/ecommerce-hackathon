import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import NewArrivals from "@/components/NewArrivals";
import Blog from "@/components/ourBlog";
import Product from "@/components/product";
import Table from "@/components/table";
import TopPicks from "@/components/TopPicks";
import ProductDetails from "./productdetails/page";
import HomePage from "./blog/page";


export default function Home() {
  return (
   <main className="">
    {/* <Hero/>
<Table/>
<TopPicks/>
<NewArrivals/>
<Blog/>
<HomeContact/> */}


{/* <ProductDetails/> */}
<HomePage/>

{/* <Product/> */}
   </main>
  );
}
