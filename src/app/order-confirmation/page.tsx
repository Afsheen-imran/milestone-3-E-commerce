'use client'

import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link';

// Define a type for the product
interface Product {
  id: number;
  name: string;
  price: number;
}

export default function OrderConfirmationPage() {
  const [cart, setCart] = useState<Product[]>([]); // Specify the type here
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    // Check if window is defined (ensures this runs on the client-side)
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart: Product[] = JSON.parse(savedCart); // Specify the correct type here
        setCart(parsedCart);

        // Calculate total price
        const total = parsedCart.reduce((total: number, product: Product) => total + product.price, 0);
        setTotalPrice(total);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="mb-8">Your order has been received and is being processed.</p>
        <p className="mb-8">Total: ${totalPrice.toFixed(2)}</p>

        {/* Optionally display cart items */}
        {cart.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <ul className="text-left mt-4">
              {cart.map((product) => (
                <li key={product.id} className="mb-2">
                  {product.name} - ${product.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href="/shop"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Continue Shopping
        </Link>
      </main>
      <Footer />
    </div>
  );
}
