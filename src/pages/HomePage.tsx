import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategorySection from '../components/home/CategorySection';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeaturedProducts />
      <CategorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;