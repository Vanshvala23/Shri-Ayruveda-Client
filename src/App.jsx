import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import TherapyCenter from './components/TherapyCenter';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import About from './components/About'; 
import Therapies from './components/Therapies'; 
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopRoute from './components/ScrollToTopRoute';

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar /> 
      <ScrollToTopRoute/>
      <main className="flex-grow">
        <Routes>
          {/* --- HOME PAGE --- */}
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Services />
              <TherapyCenter />
              <Testimonials />
              <Appointment />
            </>
          } />

          {/* --- THERAPIES / SERVICES PAGE --- */}
          <Route path="/services" element={<Therapies />} />
          
          {/* --- ABOUT PAGE --- */}
          <Route path="/about" element={<About />} /> 

          {/* --- CONTACT PAGE --- */}
          <Route path="/contact" element={
            <div className="pt-10">
               <Appointment />
            </div>
          } />
        </Routes>
      </main>

      <Footer />
      
      {/* Add it here at the bottom so it spans across all pages */}
      <ScrollToTop /> 
    </div>
  );
}

export default App;