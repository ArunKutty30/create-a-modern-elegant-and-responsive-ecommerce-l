import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-serif text-[#3C1810] mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">${price}</span>
          <button className="bg-[#8B4513] text-white px-4 py-2 rounded-full hover:bg-[#6B3410] transition-colors flex items-center gap-2">
            Add to Cart
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}