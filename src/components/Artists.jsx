import React from 'react';

const artists = [
  {
    name: "Alex Rivers",
    specialty: "Black & Grey Realism",
    image: "https://images.unsplash.com/photo-1580852300654-03c803a14e24?auto=format&fit=crop&q=80",
    experience: "8 years"
  },
  {
    name: "Sarah Chen",
    specialty: "Japanese Traditional",
    image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&q=80",
    experience: "12 years"
  },
  {
    name: "Marcus Black",
    specialty: "Neo Traditional",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80",
    experience: "6 years"
  }
];

export default function Artists() {
  return (
    <section id="artists" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Artists</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {artists.map((artist) => (
            <div key={artist.name} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold">{artist.name}</h3>
                    <p className="text-gray-300">{artist.specialty}</p>
                    <p className="text-sm text-gray-400">{artist.experience} experience</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}