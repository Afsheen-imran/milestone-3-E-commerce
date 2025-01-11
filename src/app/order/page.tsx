'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function OrderPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });
  const router = useRouter();

  // Fetch cart data from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  // Handle form data input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Get total price of the cart items
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock order submission, you would normally post this data to a backend
    const orderData = {
      ...formData,
      cart,
      total: getTotalPrice(),
    };
    
    console.log('Order submitted:', orderData);
    
    // Clear cart from localStorage after submission
    localStorage.removeItem('cart');
    
    // Redirect to the confirmation page
    router.push('/order-confirmation');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Complete Your Order</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-2">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Your cart is empty.</p>
            )}
            {/* Total Price */}
            <div className="border-t pt-2 mt-4">
              <div className="flex justify-between items-center font-semibold">
                <span>Total</span>
                <span>${getTotalPrice()}</span>
              </div>
            </div>
          </div>

          {/* Shipping Information Form */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="address" className="block mb-1">Shipping Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                  rows={3}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
