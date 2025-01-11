import { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState<Product | null>(null);

  const toggleDetails = async () => {
    if (!showDetails) {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${product.id}`);
        const data = await res.json();
        setDetails({
          id: data.id,
          name: data.title,
          price: data.price,
          image: data.image,
          description: data.description,
        });
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      }
    }
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <button
          onClick={toggleDetails}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-md hover:from-pink-500 hover:to-purple-600 transition duration-300"
        >
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
        {showDetails && details && (
          <div className="mt-4">
            <p className="text-gray-700">{details.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
