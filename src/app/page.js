import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Timeline from '@/components/sections/Timeline';
import Themes from '@/components/sections/Themes';
import Prizes from '@/components/sections/Prizes';
import Organizers from '@/components/sections/Organizers';
import Contact from '@/components/sections/Contact';

export const metadata = {
  title: 'Quantum Computing Hackathon Pakistan',
  description: 'Pakistan\'s first quantum computing hackathon bringing together the brightest minds to tackle real-world challenges using quantum technologies.',
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/images/sponsors/competetion-logo.png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

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