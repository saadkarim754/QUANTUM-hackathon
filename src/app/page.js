import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Timeline from '@/components/sections/Timeline';
import Themes from '@/components/sections/Themes';
import Prizes from '@/components/sections/Prizes';
import Organizers from '@/components/sections/Organizers';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Themes />
      <Prizes />
      <Organizers />
      <Contact />
      <Footer />
    </div>
  )
}