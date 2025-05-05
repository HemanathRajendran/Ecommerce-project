import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Heart, 
  Share2, 
  ShoppingCart, 
  ArrowLeft,
  Plus,
  Minus,
  Check,
  AlertTriangle
} from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/cart';
import Button from '../components/ui/Button';
import { formatPrice, getDiscountPercentage } from '../lib/utils';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  
  const { addItem } = useCartStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>();
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The product you are looking for doesn't exist or has been removed.
        </p>
        <Button as={Link} to="/products">
          Continue Shopping
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      variant: selectedVariant,
    });
  };
  
  const discount = getDiscountPercentage(product.price, product.compareAtPrice);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link 
          to="/products" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex space-x-4 overflow-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-md overflow-hidden h-20 w-20 flex-shrink-0 border-2 ${
                    selectedImage === index 
                      ? 'border-primary' 
                      : 'border-transparent hover:border-muted'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - View ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-${i < product.rating ? 'accent' : 'muted-foreground/30'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            
            <div className="flex items-baseline space-x-3 mb-4">
              <span className="text-2xl font-bold">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-muted-foreground line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                  {discount && (
                    <span className="bg-success/10 text-success text-sm font-semibold px-2 py-1 rounded">
                      Save {discount}%
                    </span>
                  )}
                </>
              )}
            </div>
            
            <div className="border-t border-b py-4 mb-6">
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
            
            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                {product.variants.map((variant) => (
                  <div key={variant.id} className="mb-4">
                    <h3 className="font-medium mb-2">{variant.name}</h3>
                    <div className="flex flex-wrap gap-3">
                      {variant.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => setSelectedVariant(option)}
                          className={`px-3 py-1 border rounded-md ${
                            selectedVariant === option
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-input hover:border-muted-foreground'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10 flex items-center justify-center border rounded-l-md"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <div className="h-10 w-12 flex items-center justify-center border-t border-b">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                  className="h-10 w-10 flex items-center justify-center border rounded-r-md"
                  aria-label="Increase quantity"
                  disabled={quantity >= product.stockQuantity}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center text-success">
                  <Check className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">
                    In Stock ({product.stockQuantity} available)
                  </span>
                </div>
              ) : (
                <div className="flex items-center text-error">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Out of Stock</span>
                </div>
              )}
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                variant="primary"
                fullWidth
                disabled={!product.inStock}
                icon={<ShoppingCart className="h-4 w-4" />}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                fullWidth
                icon={<Heart className="h-4 w-4" />}
              >
                Wishlist
              </Button>
              <Button
                variant="ghost"
                className="sm:w-auto px-3"
                icon={<Share2 className="h-4 w-4" />}
              >
                Share
              </Button>
            </div>
            
            {/* Product Specifications */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="border rounded-md overflow-hidden">
                <h3 className="font-medium p-4 bg-muted">Specifications</h3>
                <div className="p-4 grid grid-cols-1 gap-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2 py-2 border-b last:border-b-0">
                      <span className="text-muted-foreground">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;