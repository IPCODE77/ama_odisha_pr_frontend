
import Hero from '../../components/Home/Hero/Hero';
import Benefits from '../../components/Home/Benefits/Benefits';
import FeaturedProducts from '../../components/Home/FeaturedProducts/FeaturedProducts';
import OurStory from '../../components/Home/OurStory/OurStory';
import Testimonials from '../../components/Home/Testimonials/Testimonials';

import './Home.css';

function Home() {
  return (
    <main className="home-page">

      <Hero />
       <Benefits />
        <FeaturedProducts />
        <OurStory />
        <Testimonials />

    </main>
  );
}

export default Home;
