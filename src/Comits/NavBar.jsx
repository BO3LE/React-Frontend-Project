import React, { useState } from 'react';

export default function NavBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className=''>
      <nav className='container mx-auto p-6'>
        <div className='flex items-center justify-between bg-plints-bc rounded-full m-3'>
          <div className='flex-shrink-0'>
            <a href="/"><img src="src/Icon/png-logo-plant--removebg-preview.png" alt="Logo" width="100px" /></a>
          </div>
          <div className="flex-1 flex justify-center md:justify-center">
            <div className="md:flex space-x-12 items-center">
              <a href="/" className='text-plints-ft hover:text-plints-hovre font-bold' >Home</a>
              <a href="/product" className='text-plints-ft hover:text-plints-hovre font-bold' >Product</a>
              <a href="/about" className='text-plints-ft hover:text-plints-hovre font-bold' >About</a>
              <a href="https://www.instagram.com/plantnmore?igsh=MWppMzM5NmJpZHNmdw==" className='text-plints-ft hover:text-plints-hovre font-bold' target='_blank'>Social</a>
              <a href="/rejest" className='text-plints-ft hover:text-plints-hovre font-bold' >Rejest</a>

              {/* <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search..."
                className="p-2 rounded-full border border-gray-300 focus:outline-none focus:border-green-500"
              /> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
