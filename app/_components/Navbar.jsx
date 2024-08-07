'use client'
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white text-xl font-bold">BookStore</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</span>
              </Link>
              <Link href="/pages/books/new">
                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Book</span>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={isOpen ? 'hidden' : 'inline-flex'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isOpen ? 'inline-flex' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</span>
          </Link>
          <Link href="/pages/books/new">
            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Add Book</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
