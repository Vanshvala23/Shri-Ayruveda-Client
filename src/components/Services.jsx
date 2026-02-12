import React from 'react';
import { ArrowRight } from 'lucide-react';
import img from "../assets/download.png";
import { Link } from 'react-router-dom'; // <--- Import Link

const Services = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[40%] bg-[#E8F3F1] rounded-l-[60px] -z-0"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* --- LEFT: Text Content --- */}
          <div className="lg:w-1/3 pr-4">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              The Best Of <br /> Our Services
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Experience the pinnacle of Ayurvedic excellence with our curated services. 
              From personalized consultations to tailored treatments, embark on a journey 
              of holistic wellness designed to elevate mind, body, and spirit.
            </p>
            
            {/* LINK: Book Now Button */}
            <Link to="/contact">
              <button className="flex items-center gap-3 px-8 py-3 bg-black text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-all">
                Book Now 
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          {/* --- CENTER: Image --- */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-72 h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={img}
                alt="Ayurvedic Therapy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* --- RIGHT: List --- */}
          <div className="lg:w-1/3 pl-4 lg:pl-12 space-y-10">
            {/* We link the items to the detailed services page */}
            <Link to="/services" className="block border-b border-gray-300/50 pb-6 group cursor-pointer">
              <span className="text-xs font-bold text-teal-500 block mb-2">01</span>
              <h3 className="text-lg font-bold text-gray-900 font-serif mb-2 group-hover:text-orange-500 transition">Ayurvedic Treatment</h3>
              <p className="text-gray-500 text-[11px] leading-5">
                Ayurvedic treatments: ancient wisdom, modern healing. Discover balance.
              </p>
            </Link>

            <Link to="/services" className="block border-b border-gray-300/50 pb-6 group cursor-pointer">
              <span className="text-xs font-bold text-teal-500 block mb-2">02</span>
              <h3 className="text-lg font-bold text-gray-900 font-serif mb-2 group-hover:text-orange-500 transition">Ozone Therapy</h3>
              <p className="text-gray-500 text-[11px] leading-5">
                Explore the synergy of Ayurveda and Ozone Therapy: a modern approach.
              </p>
            </Link>

            <Link to="/services" className="block group cursor-pointer">
              <span className="text-xs font-bold text-teal-500 block mb-2">03</span>
              <h3 className="text-lg font-bold text-gray-900 font-serif mb-2 group-hover:text-orange-500 transition">Stone Cure</h3>
              <p className="text-gray-500 text-[11px] leading-5">
                Stone cure in Ayurveda: ancient remedies for modern ailments.
              </p>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;