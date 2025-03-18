import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import SearchModal from '../components/SearchModal';

// Define the Product interface based on the Fake Store API response
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  // Add other properties like description, category, etc., if needed
}

export const meta = () => [
  { title: "VirtueBuy - Next-Gen Price Comparison" },
  { name: "description", content: "Experience price comparison with neon vibes and futuristic flair." },
];

export async function loader() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products: Product[] = await response.json();
    return json(products);
  } catch (error) {
    console.error('Loader error:', error);
    return json({ error: 'Failed to load products' }, { status: 500 });
  }
}

export default function Index() {
  const data = useLoaderData<{ products?: Product[]; error?: string }>();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  if (data.error) {
    return <div className="text-red-500 text-center py-12">Error: {data.error}</div>;
  }

  const products = data.products || [];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans">
      <Header />
      <Hero />
      <main className="container mx-auto py-12 px-4">
        <button
          onClick={() => setIsSearchOpen(true)}
          className="mb-8 px-6 py-3 bg-blue-500 dark:bg-purple-600 text-white rounded-full shadow-neon dark:shadow-neon-dark hover:bg-blue-600 dark:hover:bg-purple-700 transition-all duration-300"
        >
          Search Products
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </div>
  );
}