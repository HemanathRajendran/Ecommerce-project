import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Store, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Store className="h-6 w-6" />
              <span className="text-xl font-bold">LuxeMarket</span>
            </div>
            <p className="mb-4 text-primary-foreground/80">
              Premium shopping experience with the best products at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Commerce Street, Suite 100<br />
                  New York, NY 10001, USA
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  support@luxemarket.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LuxeMarket. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <img src="https://images.pexels.com/photos/51377/visa-mastercard-credit-card-international-payment-51377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Payment methods" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;