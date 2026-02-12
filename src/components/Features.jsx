import React from 'react';
import { Flower, Sprout, HeartHandshake } from 'lucide-react'; 

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl container px-4 mx-auto">
        
        {/* --- 1. HEADINGS --- */}
        <div className="mb-24 text-center">
            <h2 className="text-3xl font-serif font-bold text-green-900 md:text-5xl">
            Allow Your Body, Mind And Soul <br />
            Sense A Haven Of Tranquility
            </h2>
        </div>

        {/* --- 2. TALL STAGGERED IMAGE GALLERY --- */}
        {/* Increased gap-8 for better spacing between tall strips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-32">
          
          {/* Image 1: Tall & Aligned Top */}
          <div className="relative h-80 md:h-[600px] overflow-hidden rounded-2xl shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600" 
              alt="Herbal Leaves" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 2: Tall & Pushed Down (Staggered) */}
          <div className="relative h-80 md:h-[600px] overflow-hidden rounded-2xl shadow-lg mt-8 md:mt-24 group">
            <img 
              src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&q=80&w=600" 
              alt="Wooden Spoon Spices" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 3: Tall & Aligned Top */}
          <div className="relative h-80 md:h-[600px] overflow-hidden rounded-2xl shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600" 
              alt="Turmeric Powder" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 4: Tall & Pushed Down (Staggered) */}
          <div className="relative h-80 md:h-[600px] overflow-hidden rounded-2xl shadow-lg mt-8 md:mt-24 group">
            <img 
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600" 
              alt="Ayurvedic Flowers" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* --- 3. ICON FEATURES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center pt-10">
          
          {/* Feature 1: Beauty */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="mb-6 text-green-800 transition-colors duration-300 group-hover:text-orange-500">
               <Flower size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-3 font-serif">Beauty</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              Radiate natural beauty from within after our Ayurvedic treatments, which nourish your skin.
            </p>
          </div>

          {/* Feature 2: Wellness */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="mb-6 text-green-800 transition-colors duration-300 group-hover:text-orange-500">
               <Sprout size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-3 font-serif">Wellness</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              Embark on a journey of wellness that transcends mere physical healing with our therapies.
            </p>
          </div>

          {/* Feature 3: Massage */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="mb-6 text-green-800 transition-colors duration-300 group-hover:text-orange-500">
               <HeartHandshake size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-3 font-serif">Massage</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              Indulge in the blissful embrace of Ayurvedic massage, where ancient techniques meet relaxation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;