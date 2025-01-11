import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturedProducts from "./components/FeaturedProuducts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  )
}

