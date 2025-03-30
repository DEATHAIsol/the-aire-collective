import React from 'react';
import BackgroundImage from './components/BackgroundImage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      title: 'Digital Marketing Course',
      description: 'Master digital marketing strategies and techniques',
      price: 99.99,
      category: 'Education',
    },
    {
      id: 2,
      title: 'Premium UI Kit',
      description: 'Modern UI components for web developers',
      price: 49.99,
      category: 'Design',
    },
    {
      id: 3,
      title: 'Business Growth Template',
      description: 'Excel templates for business planning',
      price: 29.99,
      category: 'Business',
    },
  ];

  return (
    <main className="min-h-screen relative">
      <BackgroundImage />
      
      {/* Hero Section */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-center drop-shadow-lg">
            THE AIRE COLLECTIVE
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-center max-w-2xl mx-auto text-gray-100 drop-shadow">
            Your exclusive gateway to luxury, success, and the extraordinary lifestyle
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-4">
          <div className="flex gap-4">
            <a
              href="/join"
              className="w-[200px] bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition text-center"
            >
              Join Now
            </a>
            <a
              href="/products"
              className="w-[200px] border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition text-center"
            >
              Explore Products
            </a>
          </div>
          <a
            href="/auth/signin"
            className="w-[416px] bg-black/40 text-white px-8 py-3 rounded-md font-semibold hover:bg-black/60 transition text-center border border-white/30"
          >
            Login
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-20 bg-black/80 py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Exclusive Access</h3>
            <p>Get access to premium products and services not available anywhere else</p>
          </div>
          <div className="text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Premium Community</h3>
            <p>Connect with like-minded individuals who share your drive for success</p>
          </div>
          <div className="text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Verified Sellers</h3>
            <p>All our sellers are thoroughly vetted to ensure the highest quality</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
