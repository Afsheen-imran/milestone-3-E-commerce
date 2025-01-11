'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

// Define the Product type
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

// Define the API response item type
interface ApiProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products'); // Fetching from Fake Store API
        const data: ApiProduct[] = await res.json(); // Define the type for the response data

        // Transform the API data to match the `Product` interface
        const formattedProducts = data.map((item) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          image: item.image,
          description: item.description,
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Collections</h2>
        {products.length === 0 ? (
          <p className="text-center text-gray-600">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
