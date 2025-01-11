'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [imageError, setImageError] = useState(false);
  const [clothingImage, setClothingImage] = useState<string>('');

  useEffect(() => {
    // Fetching a random product from the Fakestore API
    const fetchClothingImage = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        const randomClothing = data[Math.floor(Math.random() * data.length)];
        setClothingImage(randomClothing.image);
      } catch (error) {
        console.error("Error fetching clothing data:", error);
      }
    };

    fetchClothingImage();
  }, []);

  return (
    <section className="bg-gradient-to-br from-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mb-6">
            Discover Your Perfect Style
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Explore our curated collection of trendsetting fashion pieces that define you.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            Shop Now
          </Link>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
          {/* If the image failed, show a placeholder */}
          {imageError ? (
            <div className="w-full max-w-md md:max-w-lg h-auto bg-gray-200 rounded-lg shadow-2xl animate-pulse">
              <p className="text-center text-gray-500 py-24">Image not available</p>
            </div>
          ) : (
            <img
              src={clothingImage || '/images/placeholder.jpg'}  // Using fetched image from Fakestore API
              alt="A curated collection of fashionable outfits"
              className="w-full max-w-md md:max-w-lg h-auto rounded-lg shadow-2xl transform rotate-0 md:rotate-6 hover:rotate-0 transition-transform duration-300 animate__animated animate__fadeIn animate__delay-1s"
              onError={() => setImageError(true)}  // Handle image loading error
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
