import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Artists from './components/Artists';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Artists />
      <Gallery />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;