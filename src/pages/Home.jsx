import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedJobs from "../components/FeaturedJobs";
import PopularCategories from "../components/PopularCategories";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function Home() {

  return (

    <div>

      <Navbar />
      <Hero />
      <PopularCategories/>
      <FeaturedJobs/>
      <HowItWorks/>
      <Testimonials/>
      <CTASection/>
      <Footer/>

    </div>
  );
}

export default Home;