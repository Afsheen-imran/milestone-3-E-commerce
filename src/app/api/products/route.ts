import { NextResponse } from 'next/server';

const products = [
  { 
    id: 1, 
    name: 'Classic White T-Shirt', 
    price: 29.99, 
    image: '/placeholder.svg', 
    description: 'A comfortable and versatile white t-shirt made from 100% cotton.',
    category: 'T-Shirts',
    inStock: true
  },
  { 
    id: 2, 
    name: 'Slim Fit Jeans', 
    price: 59.99, 
    image: '/placeholder.svg', 
    description: 'Stylish slim fit jeans in a dark wash, perfect for any casual occasion.',
    category: 'Jeans',
    inStock: true
  },
  { 
    id: 3, 
    name: 'Leather Jacket', 
    price: 199.99, 
    image: '/placeholder.svg', 
    description: 'A classic leather jacket that adds an edge to any outfit.',
    category: 'Outerwear',
    inStock: false
  },
  { 
    id: 4, 
    name: 'Floral Summer Dress', 
    price: 49.99, 
    image: '/placeholder.svg', 
    description: 'A light and breezy floral dress, ideal for warm summer days.',
    category: 'Dresses',
    inStock: true
  },
  { 
    id: 5, 
    name: 'Running Shoes', 
    price: 89.99, 
    image: '/placeholder.svg', 
    description: 'Comfortable and supportive running shoes for your daily jog or workout.',
    category: 'Shoes',
    inStock: true
  },
  { 
    id: 6, 
    name: 'Striped Polo Shirt', 
    price: 39.99, 
    image: '/placeholder.svg', 
    description: 'A classic striped polo shirt, perfect for a smart-casual look.',
    category: 'T-Shirts',
    inStock: true
  }
];

export async function GET() {
  return NextResponse.json(products);
}

