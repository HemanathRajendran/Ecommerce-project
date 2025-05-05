import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Mail } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real application, you would handle the subscription here
    }
  };
  
  return (
    <section className="py-16 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to get updates on new products, special offers, and exclusive discounts.
          </p>
          
          {isSubmitted ? (
            <div className="bg-success/10 text-success p-4 rounded-md">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm mt-1">
                We've sent a confirmation email to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<Mail className="h-5 w-5 text-muted-foreground" />}
                  required
                  className="h-12"
                />
              </div>
              <Button type="submit" className="h-12">
                Subscribe
              </Button>
            </form>
          )}
          
          <p className="text-sm text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;