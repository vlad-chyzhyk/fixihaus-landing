import Footer from "@/components/Footer/Footer";

import AboutUs from "./sections/AboutUs/AboutUs";
import ContactUs from "./sections/ContactUs/ContactUs";
import FAQ from "./sections/FAQ/FAQ";
import Hero from "./sections/Hero/Hero";
import OurBenefits from "./sections/OurBenefits/OurBenefits";
import OurProjects from "./sections/OurProjects/OurProjects";
import OurServices from "./sections/OurServices/OurServices";
import Process from "./sections/Process/Process";
import Reviews from "./sections/Reviews/Reviews";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <OurServices />
      <OurProjects />
      <Process />
      <Reviews />
      <OurBenefits />
      <AboutUs />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
