import React from 'react';

export default function SearchResult({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 border border-gray-200">
      <img src={product.default_image?.thumbnail} alt={product.common_name || product.scientific_name} className="h-20 w-20 object-cover rounded" />
      <p className="text-sm font-bold mt-2">{product.common_name || product.scientific_name}</p>
    </div>
  );
}

