import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Vibrant Summer Dress', price: 79.99, image: '/placeholder.svg', description: 'A colorful and comfortable dress perfect for summer outings.' },
  { id: 2, name: 'Classic Denim Jacket', price: 89.99, image: '/placeholder.svg', description: 'A timeless denim jacket that goes well with any outfit.' },
  { id: 3, name: 'Elegant Evening Gown', price: 149.99, image: '/placeholder.svg', description: 'A stunning gown for special occasions and formal events.' },
  { id: 4, name: 'Cozy Knit Sweater', price: 59.99, image: '/placeholder.svg', description: 'A warm and stylish sweater for chilly days.' },
  { id: 5, name: 'Leather Boots', price: 129.99, image: '/placeholder.svg', description: 'Durable and stylish boots for any occasion.' },
  { id: 6, name: 'Silk Scarf', price: 39.99, image: '/placeholder.svg', description: 'A luxurious silk scarf to complement your outfit.' },
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const product = products.find(p => p.id === id);

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
}

