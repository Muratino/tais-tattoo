import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Feather } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Feather className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">INK SOCIETY</span>
            </div>
            <p className="text-gray-400">
              Creating timeless masterpieces that tell your story since 2010.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                <span>123 Ink Street, NY 10001</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-400" />
                <span>info@inksociety.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Hours</h3>
            <div className="space-y-2">
              <p>Tuesday - Friday: 11am - 8pm</p>
              <p>Saturday: 10am - 6pm</p>
              <p>Sunday - Monday: Closed</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ink Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}