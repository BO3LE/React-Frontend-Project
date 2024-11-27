import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-green-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-green-800">About Us</h1>
      <p className="text-lg text-gray-700 mb-4 max-w-2xl text-center">
        Welcome to our plant website! We are dedicated to providing a wide variety of trees and plants that not only beautify your surroundings but also contribute to preserving the environment. Our mission is to promote green living by offering high-quality plants at very reasonable prices. Whether you're looking to create a lush garden or start a small indoor plant collection, we have something for everyone. Join us in our journey to make the world greener and healthier, one plant at a time.
      </p>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        Our collection includes a diverse range of species, carefully selected to thrive in various conditions. We believe in the power of plants to transform spaces and improve air quality, and we are here to support you in every step of your planting journey.
      </p>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        Thank you for choosing us as your trusted plant provider. Together, we can make a positive impact on the environment and create beautiful, sustainable spaces for future generations.
      </p>
    </div>
  );
}

export default About;
