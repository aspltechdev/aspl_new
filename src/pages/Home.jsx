import { useEffect, useState } from 'react';
import Hero from '../section/Hero';
import AboutSection from '../section/AboutSection';
import ServicesSection from '../section/ServicesSection';
import ApproachSection from '../section/ApproachSection';
import PartnersSection from '../section/PartnersSection';
import ContactSection from '../section/ContactSection';
import './Home.css';

export default function Home({ targetSection }) {
  const [selectedService, setSelectedService] = useState('Web Development');
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
  };
  useEffect(() => { if (targetSection) setTimeout(() => scrollTo(targetSection), 100); }, [targetSection]);
  const selectService = (service) => { setSelectedService(service); scrollTo('contact'); };
  return (
    <div className="home-page">
      <Hero onScrollTo={scrollTo} />
      <AboutSection onScrollTo={scrollTo} />
      <ServicesSection onSelectService={selectService} />
      <ApproachSection />
      <PartnersSection />
      <ContactSection selectedService={selectedService} onServiceChange={setSelectedService} />
    </div>
  );
}
