'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const features = {
  bronze: [
    'Access to basic networking features',
    'Member-only events (virtual)',
    'Basic community access',
    'Monthly digital newsletter',
  ],
  silver: [
    'All Bronze features',
    'Priority networking features',
    'Exclusive virtual & in-person events',
    'Direct messaging with members',
    'Monthly mastermind sessions',
  ],
  gold: [
    'All Silver features',
    'VIP networking features',
    'Private events & retreats',
    'Personal concierge service',
    'Exclusive investment opportunities',
    'Private mentorship sessions',
  ],
};

export default function Join() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/join-background.jpg"
              alt="Join the Collective background"
              fill
              priority
              className="object-cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Join The AIRE Collective
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Access an exclusive networking ecosystem designed for ambitious individuals seeking success, connections, and growth opportunities.
            </p>
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Choose Your Membership Tier
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Select the membership level that best aligns with your ambitions and goals.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Bronze Tier */}
              <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-xl transition duration-300">
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">Bronze</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">Perfect for those beginning their journey.</p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {features.bronze.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 mt-8">
                  <a href="/auth/signup" className="block w-full rounded-md bg-black px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    Join Now
                  </a>
                  <a href="/membership/bronze" className="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold leading-6 text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Learn More
                  </a>
                </div>
              </div>

              {/* Silver Tier */}
              <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-xl transition duration-300">
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">Silver</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">For serious networkers and entrepreneurs.</p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {features.silver.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 mt-8">
                  <a href="/auth/signup" className="block w-full rounded-md bg-black px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    Join Now
                  </a>
                  <a href="/membership/silver" className="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold leading-6 text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Learn More
                  </a>
                </div>
              </div>

              {/* Gold Tier */}
              <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-black p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-xl transition duration-300">
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-white">Gold</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-400">For elite members seeking the ultimate experience.</p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-400">
                    {features.gold.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 mt-8">
                  <a href="/auth/signup" className="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Join Now
                  </a>
                  <a href="/membership/gold" className="block w-full rounded-md bg-transparent px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm ring-1 ring-inset ring-white/30 hover:bg-white/10">
                    Learn More
                  </a>
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