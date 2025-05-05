import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCartStore } from '../../store/cart';
import Button from '../ui/Button';
import { Product } from '../../types';
import { formatPrice, getDiscountPercentage } from '../../lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });
  };
  
  const discount = getDiscountPercentage(product.price, product.compareAtPrice);
  
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {discount && (
            <div className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </div>
          )}
          
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
            </Button>
          </div>
          
          <button 
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4 text-muted-foreground hover:text-error transition-colors" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between">
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
            <div>
              {product.rating > 0 && (
                <div className="flex items-center space-x-1 ml-2">
                  <span className="text-accent">★</span>
                  <span className="text-sm text-muted-foreground">{product.rating}</span>
                </div>
              )}
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-1 mb-2">{product.category}</p>
          
          <div className="flex items-baseline space-x-2">
            <span className="font-medium">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
          
          {!product.inStock && (
            <div className="text-sm font-medium text-error mt-2">Out of stock</div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;