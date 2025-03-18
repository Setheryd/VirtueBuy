import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-neon dark:hover:shadow-neon-dark transform hover:scale-105 transition-all duration-300 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain rounded-md mb-4 relative z-10"
      />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 truncate relative z-10">
        {product.title}
      </h3>
      <p className="mt-2 text-blue-500 dark:text-purple-400 font-bold relative z-10">${product.price}</p>
    </div>
  );
};

export default ProductCard;