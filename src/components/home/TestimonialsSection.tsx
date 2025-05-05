import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Verified Customer',
    content: 'I was skeptical about ordering online but LuxeMarket exceeded my expectations. The quality of the products is outstanding and shipping was very fast!',
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'James Wilson',
    title: 'Verified Customer',
    content: 'Customer service is incredible. I had an issue with my order and they resolved it immediately. Will definitely shop here again!',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Emily Chang',
    title: 'Verified Customer',
    content: 'The products are of exceptional quality and the prices are very reasonable. My new favorite online store!',
    rating: 4,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their shopping experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-muted rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-${i < testimonial.rating ? 'accent' : 'muted-foreground/30'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              <p className="italic mb-6">{testimonial.content}</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;