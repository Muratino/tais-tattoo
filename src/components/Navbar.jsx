import React from 'react';
import { Menu, X, Feather } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black/95 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Feather className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">INK SOCIETY</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-gray-300 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#artists" className="hover:text-gray-300 px-3 py-2 text-sm font-medium">Artists</a>
              <a href="#gallery" className="hover:text-gray-300 px-3 py-2 text-sm font-medium">Gallery</a>
              <a href="#booking" className="hover:text-gray-300 px-3 py-2 text-sm font-medium">Book Now</a>
              <a href="#contact" className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-base font-medium hover:text-gray-300">Home</a>
            <a href="#artists" className="block px-3 py-2 text-base font-medium hover:text-gray-300">Artists</a>
            <a href="#gallery" className="block px-3 py-2 text-base font-medium hover:text-gray-300">Gallery</a>
            <a href="#booking" className="block px-3 py-2 text-base font-medium hover:text-gray-300">Book Now</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium hover:text-gray-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}