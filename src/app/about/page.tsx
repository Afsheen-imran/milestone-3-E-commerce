'use client';

import { useEffect, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  const [clothingImage, setClothingImage] = useState<string>('');
  const [imageError, setImageError] = useState(false);

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn">About FashionFusion</h1>
            <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">Redefining style, one outfit at a time.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeIn">Our Story</h2>
                <p className="text-gray-600 mb-4 animate__animated animate__fadeIn animate__delay-1s">
                  Founded in 2023, FashionFusion was born out of a passion for style and a vision to make fashion accessible to everyone. Our journey began with a simple idea: to create a platform where individuals could express themselves through clothing, regardless of their background or budget.
                </p>
                <p className="text-gray-600 animate__animated animate__fadeIn animate__delay-2s">
                  Today, we are proud to offer a curated collection of trendsetting pieces that cater to diverse tastes and lifestyles. Our commitment to quality, affordability, and customer satisfaction remains at the heart of everything we do.
                </p>
              </div>

              {/* Image Content */}
              <div className="relative h-64 md:h-auto animate__animated animate__fadeIn animate__delay-3s">
                {imageError ? (
                  <div className="w-full max-w-md md:max-w-lg h-auto bg-gray-200 rounded-lg shadow-lg animate-pulse">
                    <p className="text-center text-gray-500 py-24">Image not available</p>
                  </div>
                ) : (
                  <img
                    src={clothingImage || '/images/placeholder.jpg'}
                    alt="FashionFusion store"
                    className="w-full max-w-md md:max-w-lg h-auto rounded-lg shadow-lg transform rotate-0 md:rotate-6 hover:rotate-0 transition-transform duration-300 animate__animated animate__fadeIn"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center animate__animated animate__fadeIn">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Quality', description: 'We source only the best materials and partner with ethical manufacturers to ensure our products meet the highest standards.' },
                { title: 'Sustainability', description: 'We are committed to reducing our environmental impact through eco-friendly practices and sustainable packaging.' },
                { title: 'Inclusivity', description: 'We believe fashion is for everyone. Our collections cater to all body types, genders, and style preferences.' }
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 hover:text-white animate__animated animate__fadeIn"
                >
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 animate__animated animate__fadeIn">Our Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-6 bg-white shadow-lg rounded-lg animate__animated animate__fadeIn animate__delay-1s">
                <h3 className="text-2xl font-semibold mb-4">Vision</h3>
                <p className="text-gray-600">
                  To become a global leader in inclusive fashion, empowering individuals to express their true selves through high-quality, affordable, and sustainable clothing.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg animate__animated animate__fadeIn animate__delay-2s">
                <h3 className="text-2xl font-semibold mb-4">Mission</h3>
                <p className="text-gray-600">
                  Our mission is to provide stylish, comfortable, and eco-conscious clothing options that cater to all individuals, fostering a sense of belonging, confidence, and sustainability in every piece.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeIn">Join the FashionFusion Community</h2>
            <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">Stay updated on the latest trends, exclusive offers, and new arrivals.</p>
            <form className="max-w-md mx-auto flex animate__animated animate__fadeIn animate__delay-2s">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-900"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-r-md hover:bg-yellow-300 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
