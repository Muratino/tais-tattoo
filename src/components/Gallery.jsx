import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1560707854-fb9a10ced4e2?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1612459284970-e8f027596582?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1610925877803-1a2a732fa0b7?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1571987937066-69dc4df71d35?auto=format&fit=crop&q=80",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Our Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
              <img
                src={image}
                alt={`Tattoo work ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">View Work</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}