import { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

interface CartItem extends Product {
  quantity: number;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    onClose();
    alert(`${quantity} ${product.name}(s) added to cart!`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-xl relative">
        <div className="flex flex-wrap">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Product Details */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mb-4 capitalize">{product.category}</p>
            <p className="text-gray-700 mb-4">{product.description}</p>
            {product.inStock ? (
              <div>
                <div className="flex items-center mb-4">
                  <label htmlFor="quantity" className="mr-2">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                    className="border rounded px-2 py-1 w-16"
                  />
                </div>
                <button
                  onClick={addToCart}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            ) : (
              <p className="text-red-500 font-semibold">Out of Stock</p>
            )}
          </div>
        </div>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
