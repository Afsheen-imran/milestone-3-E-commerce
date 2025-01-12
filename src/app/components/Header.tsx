'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Import hamburger and close icons

// Define a type for the cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Header = () => {
  const [cartItemsCount, setCartItemsCount] = useState<number>(() => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
      return cart.reduce((total: number, item: CartItem) => total + item.quantity, 0);
    } catch {
      return 0;
    }
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
        const count = cart.reduce((total: number, item: CartItem) => total + item.quantity, 0);
        setCartItemsCount(count);
      } catch {
        setCartItemsCount(0);
      }
    };

    // Update cart count when storage changes
    window.addEventListener('storage', updateCartCount);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          FashionStore
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-gray-600 hover:text-gray-800 transition duration-200">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-gray-800 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition duration-200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Cart and Account */}
        <div className="flex items-center space-x-6">
          <Link href="/cart" className="relative text-gray-600 hover:text-gray-800 transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-label="Cart"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </Link>
          <Link href="/account" className="text-gray-600 hover:text-gray-800 transition duration-200">
            Account
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md mt-2">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-800 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-600 hover:text-gray-800 transition duration-200">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-800 transition duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
