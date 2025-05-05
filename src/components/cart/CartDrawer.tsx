import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, X, Trash, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../../store/cart';
import Button from '../ui/Button';
import { formatPrice } from '../../lib/utils';

const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateItemQuantity,
    getTotalPrice,
    clearCart,
  } = useCartStore();
  const navigate = useNavigate();
  
  if (!isOpen) return null;
  
  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };
  
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-foreground/50 animate-fadeIn"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-background shadow-xl flex flex-col animate-slideInRight">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5" />
            <h2 className="font-medium">Your Cart ({items.length})</h2>
          </div>
          <button
            onClick={closeCart}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-4">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button onClick={closeCart}>Continue Shopping</Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li 
                  key={item.id}
                  className="flex items-start space-x-4 py-4 border-b"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{item.name}</h4>
                    {item.variant && (
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.variant}
                      </p>
                    )}
                    <p className="font-medium">{formatPrice(item.price)}</p>
                    
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateItemQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="h-8 w-8 flex items-center justify-center border rounded-l-md"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <div className="h-8 w-10 flex items-center justify-center border-t border-b">
                        {item.quantity}
                      </div>
                      <button
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 flex items-center justify-center border rounded-r-md"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-error transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Subtotal</span>
              <span className="font-medium">{formatPrice(getTotalPrice())}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Shipping and taxes calculated at checkout
            </p>
            <Button 
              variant="primary" 
              fullWidth 
              onClick={handleCheckout}
              className="mb-2"
            >
              Checkout
            </Button>
            <Button
              variant="outline"
              fullWidth
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;