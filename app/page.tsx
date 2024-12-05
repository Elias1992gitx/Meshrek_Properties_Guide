import Hero from "@/components/hero";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

export default async function Index() {
  return (
    <>
      <Navbar />
      <main>
       <Hero />
      </main>
      <Footer />
    </>
  );
}
