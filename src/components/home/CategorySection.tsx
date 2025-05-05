import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

const CategorySection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of products across different categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group relative rounded-lg overflow-hidden h-64 shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-sm text-white font-medium group-hover:underline">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;