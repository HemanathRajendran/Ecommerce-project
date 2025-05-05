import React from 'react';
import { 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  CreditCard 
} from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Free Shipping',
    description: 'Free shipping on all orders over $50'
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Secure Payments',
    description: 'Safe & secure payment processing'
  },
  {
    icon: <RotateCcw className="h-8 w-8" />,
    title: 'Easy Returns',
    description: '30-day money back guarantee'
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: 'Flexible Payment',
    description: 'Multiple payment options available'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;