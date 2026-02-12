import React from 'react';
import { Link } from 'react-router-dom'; // <--- Import Link

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-green-50">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Ayurvedic Spa Background" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-green-900/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 text-center text-white container mx-auto">
        
        <p className="mb-4 text-lg font-bold tracking-widest text-[#FE7F2D] uppercase">
          Rejuvenated Body & Soul
        </p>
        
        <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl drop-shadow-lg">
          Experience the <br/> 
          <span className="text-orange-500">Ancient Healing</span>
        </h1>
        
        <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-100 md:text-2xl">
          Your journey to holistic wellness starts here with personalized Ayurvedic therapies.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          {/* LINK 1: View Treatments */}
          <Link to="/services">
            <button className="px-8 py-4 text-lg font-bold text-white transition transform bg-orange-500 rounded hover:bg-orange-600 hover:scale-105 shadow-lg w-full sm:w-auto">
              View Treatments
            </button>
          </Link>

          {/* LINK 2: Contact Us */}
          <Link to="/contact">
            <button className="px-8 py-4 text-lg font-bold text-green-900 transition transform bg-white rounded hover:bg-gray-100 hover:scale-105 shadow-lg w-full sm:w-auto">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Diagonal Cut */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-[calc(100%+1.3px)] h-[100px] text-white" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="fill-current"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;