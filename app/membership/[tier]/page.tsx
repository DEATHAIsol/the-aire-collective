'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const tierContent = {
  bronze: {
    title: 'Bronze Membership',
    subtitle: 'Unlock the Power of Community and Knowledge',
    price: 20,
    description: 'The Bronze Membership is designed for individuals seeking to expand their network, enhance their financial literacy, and gain access to exclusive opportunities.',
    benefits: [
      'Connect with like-minded professionals and entrepreneurs',
      'Gain valuable insights into tax strategies and financial structures',
      'Access exclusive partnership opportunities tailored to your industry',
      'Receive monthly lessons from top mentors in your chosen field'
    ],
    conclusion: 'This membership serves as the perfect foundation for those looking to grow, learn, and establish meaningful connections in their industry.',
    image: '/bronze.jpg',
    features: [
      {
        title: 'Networking Events',
        description: 'Monthly virtual networking events with industry professionals and fellow members.'
      },
      {
        title: 'Learning Resources',
        description: 'Access to our basic library of educational content and monthly workshops.'
      },
      {
        title: 'Community Access',
        description: 'Join our growing community of ambitious professionals and entrepreneurs.'
      }
    ]
  },
  silver: {
    title: 'Silver Membership',
    subtitle: 'Elevate Your Network and Accelerate Your Growth',
    price: 100,
    description: 'The Silver Membership is tailored for ambitious professionals and entrepreneurs who are ready to take their journey to the next level. With all the benefits of Bronze, plus premium features.',
    benefits: [
      'An exclusive, members-only chat room for high-value discussions',
      'Weekly mentorship lessons from industry leaders',
      'Additional partnership opportunities to expand your reach and influence',
      'Special perks, including discounts on courses and resources'
    ],
    conclusion: 'Designed for those who seek continuous growth and deeper engagement, Silver provides the tools and connections needed to move forward with confidence.',
    image: '/silver.jpg',
    features: [
      {
        title: 'Premium Networking',
        description: 'Weekly virtual and monthly in-person networking events with industry leaders.'
      },
      {
        title: 'Enhanced Resources',
        description: 'Full access to our premium content library and weekly expert-led workshops.'
      },
      {
        title: 'Direct Messaging',
        description: 'Connect directly with other members and build valuable relationships.'
      }
    ]
  },
  gold: {
    title: 'Gold Membership',
    subtitle: 'Unparalleled Access. Unmatched Opportunities.',
    price: 500,
    description: 'The Gold Membership is the pinnacle of exclusivity, reserved for elite professionals and high-net-worth individuals who demand the best.',
    benefits: [
      'Access to an ultra-exclusive chat room reserved for top-tier members',
      'Daily group calls featuring discussions with industry leaders and high-net-worth individuals',
      'Premium partnership opportunities available only at the highest level',
      'Unrivaled perks, including 50% off first-class flights and 60% off select luxury hotels'
    ],
    conclusion: 'This membership is built for those who operate at the highest level and seek premium connections, insights, and advantages that few can access.',
    image: '/gold.jpg',
    features: [
      {
        title: 'VIP Events',
        description: 'Exclusive access to high-end networking events and luxury retreats.'
      },
      {
        title: 'Concierge Service',
        description: 'Personal concierge available 24/7 to handle your requests and arrangements.'
      },
      {
        title: 'Elite Network',
        description: 'Direct access to our network of industry leaders and high-net-worth individuals.'
      }
    ]
  }
};

export default function MembershipTier() {
  const params = useParams();
  const tier = params.tier as string;
  const content = tierContent[tier as keyof typeof tierContent];

  if (!content) {
    return <div>Membership tier not found</div>;
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={content.image}
              alt={`${content.title} background`}
              fill
              priority
              className="object-cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6">
              {content.subtitle}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl md:text-7xl font-bold text-white">${content.price}</span>
              <span className="text-xl text-gray-300">/month</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-block bg-gray-100 px-6 py-3 rounded-full">
                <span className="text-2xl font-bold text-black">${content.price}</span>
                <span className="text-gray-600 ml-2">per month</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 mb-12">
              {content.description}
            </p>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {content.features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50">
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6">Membership Benefits</h2>
            <ul className="space-y-4 mb-12">
              {content.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-black flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 p-6 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-4">Why Choose This Tier?</h2>
              <p className="text-lg text-gray-700">
                {content.conclusion}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
              <div className="flex gap-4">
                <a
                  href="/auth/signup"
                  className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition text-center min-w-[200px]"
                >
                  Join Now
                </a>
                <a
                  href="/contact"
                  className="border-2 border-black text-black px-8 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition text-center min-w-[200px]"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 