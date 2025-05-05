import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  ChevronDown,
  Store
} from 'lucide-react';
import { useCartStore } from '../../store/cart';
import { useAuthStore } from '../../store/auth';
import Button from '../ui/Button';
import { categories } from '../../data/categories';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const location = useLocation();
  const cartStore = useCartStore();
  const { isAuthenticated, user } = useAuthStore();
  
  // Update header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
      setIsSearchOpen(false);
    }
  };
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold"
          >
            <Store className="h-8 w-8 text-primary" />
            <span className={`${isScrolled ? 'text-primary' : 'text-primary'}`}>
              LuxeMarket
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium hover:text-accent transition-colors ${
                location.pathname === '/' ? 'text-accent' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button className="flex items-center text-sm font-medium hover:text-accent transition-colors">
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link 
              to="/products" 
              className={`text-sm font-medium hover:text-accent transition-colors ${
                location.pathname.startsWith('/products') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Shop All
            </Link>
            
            <Link 
              to="/about" 
              className={`text-sm font-medium hover:text-accent transition-colors ${
                location.pathname === '/about' ? 'text-accent' : 'text-foreground'
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className={`text-sm font-medium hover:text-accent transition-colors ${
                location.pathname === '/contact' ? 'text-accent' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Link 
              to={isAuthenticated ? '/account' : '/login'} 
              className="text-foreground hover:text-accent transition-colors"
              aria-label={isAuthenticated ? 'Account' : 'Login'}
            >
              <User className="h-5 w-5" />
            </Link>
            
            <button 
              onClick={() => cartStore.openCart()}
              className="text-foreground hover:text-accent transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartStore.getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                  {cartStore.getTotalItems()}
                </span>
              )}
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-foreground hover:text-accent transition-colors"
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-fadeIn">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 pl-10 pr-4 rounded-md border border-input"
              autoFocus
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 animate-slideInRight">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
                <Store className="h-8 w-8 text-primary" />
                <span className="text-primary">LuxeMarket</span>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="space-y-6">
              <Link 
                to="/"
                className="block text-lg font-medium hover:text-accent transition-colors"
              >
                Home
              </Link>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Categories</h3>
                <div className="space-y-2 pl-4">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="block text-foreground hover:text-accent transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/products"
                className="block text-lg font-medium hover:text-accent transition-colors"
              >
                Shop All
              </Link>
              
              <Link 
                to="/about"
                className="block text-lg font-medium hover:text-accent transition-colors"
              >
                About
              </Link>
              
              <Link 
                to="/contact"
                className="block text-lg font-medium hover:text-accent transition-colors"
              >
                Contact
              </Link>
              
              <div className="pt-6 border-t">
                {isAuthenticated ? (
                  <div className="space-y-4">
                    <p className="font-medium">Hello, {user?.name}</p>
                    <Link to="/account" className="block hover:text-accent transition-colors">
                      My Account
                    </Link>
                    <Link to="/orders" className="block hover:text-accent transition-colors">
                      My Orders
                    </Link>
                    <button 
                      onClick={() => useAuthStore.getState().logout()}
                      className="text-error"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Button 
                      as={Link}
                      to="/login"
                      variant="primary"
                      fullWidth
                    >
                      Login
                    </Button>
                    <Button 
                      as={Link}
                      to="/register"
                      variant="outline"
                      fullWidth
                    >
                      Register
                    </Button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;