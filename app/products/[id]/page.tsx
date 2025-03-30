'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Mock product data - in a real app, this would come from an API
const product = {
  id: 1,
  title: 'Digital Marketing Course',
  description: `Master the art of digital marketing with our comprehensive course. Learn everything from social media marketing to SEO and content strategy.

Key Features:
• 20+ hours of video content
• Practical exercises and assignments
• Real-world case studies
• Certificate of completion
• Lifetime access to updates`,
  price: 99.99,
  category: 'Education',
  author: {
    name: 'John Doe',
    image: '/placeholder.jpg',
    bio: 'Digital Marketing Expert with 10+ years of experience',
  },
  features: [
    'Comprehensive curriculum',
    'Project-based learning',
    'Expert instruction',
    'Community support',
    'Regular updates',
  ],
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: params.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to initiate checkout');
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to initiate checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="bg-black">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {product.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {product.category}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            {/* Product details */}
            <div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 mb-8">
                <div className="h-96 bg-gray-200" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900">Description</h3>
              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-600 whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Product form */}
            <div className="mt-10 lg:mt-0">
              <div className="sticky top-8">
                <div className="rounded-lg border border-gray-200 bg-white p-8">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                    ${product.price}
                  </h2>

                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-900">Features</h3>
                    <div className="mt-4">
                      <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                        {product.features.map((feature) => (
                          <li key={feature} className="text-gray-600">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <button
                      type="button"
                      onClick={handlePurchase}
                      disabled={isLoading}
                      className="w-full rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      {isLoading ? 'Processing...' : 'Purchase Now'}
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{product.author.name}</h3>
                      <p className="text-sm text-gray-600">{product.author.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 