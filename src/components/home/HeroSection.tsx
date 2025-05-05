import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-primary py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Discover Premium Quality Products
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Shop the latest trends with our curated collection of premium products. Free shipping on orders over $50.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              as={Link} 
              to="/products" 
              size="lg" 
              variant="secondary" 
              className="sm:w-auto"
            >
              Shop Now
            </Button>
            <Button 
              as={Link} 
              to="/categories" 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
            >
              Explore Categories <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="hidden md:block absolute -right-16 top-1/2 transform -translate-y-1/2">
        <img 
          src="https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Featured Product" 
          className="w-[500px] rounded-l-3xl shadow-2xl opacity-90"
        />
      </div>
    </section>
  );
};

export default HeroSection;