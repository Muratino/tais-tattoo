import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80"
          alt="Tattoo Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">INK SOCIETY</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Where artistry meets skin. Creating timeless masterpieces that tell your story.</p>
        <a
          href="#booking"
          className="inline-block bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Book Your Session
        </a>
      </div>
    </section>
  );
}