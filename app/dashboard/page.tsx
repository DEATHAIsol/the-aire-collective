'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

// Mock data - in a real app, this would come from an API
const products = [
  {
    id: 1,
    title: 'Digital Marketing Course',
    price: 99.99,
    sales: 150,
    revenue: 14998.50,
    status: 'active',
  },
  {
    id: 2,
    title: 'Premium UI Kit',
    price: 49.99,
    sales: 300,
    revenue: 14997.00,
    status: 'active',
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('products');

  const totalRevenue = products.reduce((sum, product) => sum + product.revenue, 0);
  const totalSales = products.reduce((sum, product) => sum + product.sales, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="bg-black">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Seller Dashboard
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Manage your digital products and track your sales.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          {/* Stats */}
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
              <dt>
                <div className="absolute rounded-md bg-black p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.171-.879-1.171-2.303 0-3.182C10.536 7.719 11.768 7.5 12 7.5c1.277 0 2.555.439 3.536 1.318" />
                  </svg>
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">Total Revenue</p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">${totalRevenue.toFixed(2)}</p>
              </dd>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
              <dt>
                <div className="absolute rounded-md bg-black p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">Total Sales</p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{totalSales}</p>
              </dd>
            </div>
          </dl>

          {/* Tabs */}
          <div className="mt-12">
            <div className="sm:hidden">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              >
                <option value="products">Products</option>
                <option value="analytics">Analytics</option>
                <option value="settings">Settings</option>
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {['products', 'analytics', 'settings'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`
                        whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                        ${activeTab === tab
                          ? 'border-black text-black'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }
                      `}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-8">
            {activeTab === 'products' && (
              <div>
                <div className="sm:flex sm:items-center">
                  <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Products</h1>
                    <p className="mt-2 text-sm text-gray-700">
                      A list of all your digital products including their price and sales information.
                    </p>
                  </div>
                  <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <Link
                      href="/dashboard/products/new"
                      className="block rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Add product
                    </Link>
                  </div>
                </div>
                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                              Product
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Price
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Sales
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Revenue
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Status
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {products.map((product) => (
                            <tr key={product.id}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                {product.title}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                ${product.price}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {product.sales}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                ${product.revenue.toFixed(2)}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                  {product.status}
                                </span>
                              </td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                <Link href={`/dashboard/products/${product.id}/edit`} className="text-black hover:text-gray-900">
                                  Edit
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="text-center py-12">
                <p className="text-gray-500">Analytics coming soon...</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="text-center py-12">
                <p className="text-gray-500">Settings coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 