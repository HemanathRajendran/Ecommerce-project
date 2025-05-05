import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../products/ProductGrid';
import { products } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">
              Discover our handpicked selection of premium products
            </p>
          </div>
          <Link 
            to="/products" 
            className="flex items-center mt-4 md:mt-0 text-primary font-medium hover:text-primary/80 transition-colors"
          >
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;