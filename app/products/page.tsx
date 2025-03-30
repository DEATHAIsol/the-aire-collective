'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  'All',
  'Education',
  'Design',
  'Business',
  'Technology',
  'Marketing',
];

const products = [
  {
    id: 1,
    title: 'Digital Marketing Course',
    description: 'Master digital marketing strategies and techniques',
    price: 99.99,
    category: 'Education',
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    title: 'Premium UI Kit',
    description: 'Modern UI components for web developers',
    price: 49.99,
    category: 'Design',
    image: '/placeholder.jpg',
  },
  // Add more products...
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return -1;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="relative h-[400px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/products-header-bg.jpg"
              alt="Products header background"
              fill
              priority
              className="object-cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Digital Products Marketplace
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Browse our curated collection of premium digital products.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex gap-4 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <div className="h-48 bg-gray-100" />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 