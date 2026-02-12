import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* --- HEADINGS --- */}
        <div className="text-center mb-16">
          <p className="text-teal-600 text-xs font-bold tracking-widest uppercase mb-3">
            What our patients say
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Testimonials
          </h2>
          <p className="text-gray-400 text-xs tracking-widest mt-2 uppercase">
            Experience the healing touch
          </p>
        </div>

        {/* --- TESTIMONIAL CARD --- */}
        <div className="relative bg-gradient-to-b from-[#EAF4F2] to-white rounded-[3rem] p-8 md:p-16 text-center shadow-sm">
          
          {/* Large Quote Icon */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg">
             <Quote size={40} className="text-teal-600 fill-teal-600" />
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            {/* Review Text */}
            <p className="text-xl md:text-2xl font-serif text-gray-800 leading-relaxed italic mb-10">
              "An absolute sanctuary for the soul. The Ayurvedic treatments here are authentic 
              and deeply restorative. After just one session of Shirodhara, my stress levels 
              vanished. Highly recommended for anyone seeking true holistic healing."
            </p>

            {/* User Profile */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-teal-500 p-1 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" 
                  alt="Patient" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Aditi Sharma</h4>
              <p className="text-teal-600 text-xs font-bold uppercase tracking-wide">Regular Patient</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;