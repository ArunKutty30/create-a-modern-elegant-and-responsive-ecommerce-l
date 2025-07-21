import { Star, ChevronRight, Truck, Leaf, Gift, Instagram, Facebook, Twitter } from 'lucide-react';
import Newsletter from './components/Newsletter';
import ProductCard from './components/ProductCard';
import TestimonialCard from './components/TestimonialCard';
import FeatureCard from './components/FeatureCard';

export default function App() {
  const products = [
    {
      id: 1,
      name: "Dark Truffle Collection",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      name: "Signature Pralines",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      name: "Luxury Gift Box",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1621871607318-1f3b7152a4fe?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "The finest chocolates I've ever tasted. Each piece is a masterpiece!",
      rating: 5
    },
    {
      name: "James Wilson",
      text: "Exceptional quality and presentation. Perfect for special occasions.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      text: "These chocolates are divine! The attention to detail is remarkable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&q=80&w=1200')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-6xl font-serif text-white mb-6">
              Indulge in Luxury,<br />Taste the Delight
            </h1>
            <p className="text-xl text-cream-100 mb-8">
              Handcrafted premium chocolates for life's sweetest moments
            </p>
            <button className="bg-[#8B4513] text-white px-8 py-3 rounded-full hover:bg-[#6B3410] transition-colors flex items-center gap-2 mx-auto">
              Shop Now <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12 text-[#3C1810]">
          Our Signature Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#3C1810] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12 text-[#3C1810]">
          Why Choose ChocoDelight
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Leaf className="w-8 h-8" />}
            title="Organic Ingredients"
            description="Premium organic cocoa sourced from sustainable farms"
          />
          <FeatureCard
            icon={<Gift className="w-8 h-8" />}
            title="Handcrafted"
            description="Artisanal chocolates made with love and expertise"
          />
          <FeatureCard
            icon={<Truck className="w-8 h-8" />}
            title="Free Shipping"
            description="Complimentary delivery on orders over $50"
          />
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-[#3C1810] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">ChocoDelight</h3>
              <p className="text-sm text-gray-300">
                Crafting moments of pure chocolate bliss since 1989.
              </p>
            </div>
            <div>
              <h4 className="text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Shop</a></li>
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg mb-4">Contact</h4>
              <address className="text-sm text-gray-300 not-italic">
                123 Chocolate Lane<br />
                Sweet City, SC 12345<br />
                Tel: (555) 123-4567<br />
                Email: hello@chocodelights.com
              </address>
            </div>
            <div>
              <h4 className="text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300"><Instagram /></a>
                <a href="#" className="hover:text-gray-300"><Facebook /></a>
                <a href="#" className="hover:text-gray-300"><Twitter /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
            © 2024 ChocoDelight. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}