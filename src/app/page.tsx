import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import NewArrivals from "@/components/NewArrivals";
import Blog from "@/components/ourBlog";
import Table from "@/components/table";
import TopPicks from "@/components/TopPicks";


export default function Home() {
  return (
   <main className="flex flex-col">
    <Hero/>
<Table/>
<TopPicks/>
<NewArrivals/>
<Blog/>
<HomeContact/>
   </main>
  );
}
