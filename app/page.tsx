'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main>
        {/* Hero section */}
        <div className="relative isolate">
          <div className="absolute inset-0">
            <Image
              src="/monaco-background.jpg"
              alt="Background"
              fill
              priority
              className="object-cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Welcome to The AIRE Collective
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Join our exclusive community of ambitious professionals and unlock premium opportunities.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/join"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Join Now
                  </Link>
                  <Link
                    href="/products"
                    className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
                  >
                    Browse Products <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Join The AIRE Collective?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Access exclusive benefits and connect with like-minded professionals
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="text-lg font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const features = [
  {
    name: 'Exclusive Network',
    description:
      'Connect with successful entrepreneurs, industry leaders, and like-minded professionals in our private community.',
  },
  {
    name: 'Premium Resources',
    description:
      'Access curated content, educational materials, and expert insights to accelerate your growth.',
  },
  {
    name: 'Unique Opportunities',
    description:
      'Get early access to investment opportunities, business partnerships, and exclusive events.',
  },
];
