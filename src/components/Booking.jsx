import React from 'react';
import { Calendar, Clock, Mail } from 'lucide-react';

export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Book Your Session</h2>
            <p className="text-gray-600 mb-8">
              Ready to get inked? Fill out the form below and we'll get back to you within 24 hours to discuss your ideas and schedule your appointment.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Calendar className="w-6 h-6 text-gray-400" />
                <div>
                  <h3 className="font-medium">Flexible Scheduling</h3>
                  <p className="text-gray-500">Tuesday - Saturday, 11 AM - 8 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-gray-400" />
                <div>
                  <h3 className="font-medium">Consultation Required</h3>
                  <p className="text-gray-500">Free 30-minute consultation for custom work</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-gray-400" />
                <div>
                  <h3 className="font-medium">Quick Response</h3>
                  <p className="text-gray-500">24-hour response time guaranteed</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Style Preference</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black">
                <option>Black & Grey Realism</option>
                <option>Japanese Traditional</option>
                <option>Neo Traditional</option>
                <option>American Traditional</option>
                <option>Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                placeholder="Tell us about your tattoo idea..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}