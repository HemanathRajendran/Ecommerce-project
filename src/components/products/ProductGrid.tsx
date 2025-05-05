import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  columns?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products,
  columns = 4
}) => {
  const getColumnClass = () => {
    switch (columns) {
      case 2:
        return 'sm:grid-cols-2';
      case 3:
        return 'sm:grid-cols-2 lg:grid-cols-3';
      case 5:
        return 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
      case 4:
      default:
        return 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    }
  };
  
  return (
    <div className={`grid grid-cols-1 ${getColumnClass()} gap-6`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;