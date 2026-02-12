import React, { useState } from 'react';
import { ArrowRight, X, Clock, CheckCircle, Sparkles } from 'lucide-react';

const TherapyCenter = () => {
  const [selectedTherapy, setSelectedTherapy] = useState(null);

  const therapies = [
    {
      id: 1,
      title: 'Luxury Spa',
      shortDesc: 'Luxury spa treatments: indulging senses, relaxing mind.',
      fullDesc: 'Our Luxury Spa package is designed to transport you to a state of pure bliss. It combines a full-body exfoliation, a hydrating body wrap, and a soothing head massage using premium essential oils.',
      benefits: ['Deep Relaxation', 'Skin Hydration', 'Stress Reduction'],
      duration: '90 Mins',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      title: 'Stone Therapy',
      shortDesc: 'Hot stone therapy: melting tension, easing muscles.',
      fullDesc: 'Smooth, heated basalt stones are placed on specific points of your body to melt away tension and increase muscle circulation. The heat penetrates deep into tissues for profound relief.',
      benefits: ['Muscle Relief', 'Improved Circulation', 'Better Sleep'],
      duration: '60 Mins',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      title: 'Aroma Therapy',
      shortDesc: 'Aroma therapy: scents soothing soul, oils healing body.',
      fullDesc: 'Harnessing the power of natural plant extracts, this gentle massage uses a personalized blend of essential oils to heal the body and soothe the mind.',
      benefits: ['Mood Enhancement', 'Anxiety Relief', 'Boosts Immunity'],
      duration: '45 Mins',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 4,
      title: 'Skin Treatment',
      shortDesc: 'Skin treatments: glowing radiance, nourishing care.',
      fullDesc: 'Our Ayurvedic skin treatments use herbal pastes and medicated milks to cleanse, tone, and nourish your skin, leaving it radiant and blemish-free.',
      benefits: ['Natural Glow', 'Anti-Aging', 'Detoxification'],
      duration: '60 Mins',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600'
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="bg-[#EAF4F2] rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* --- LEFT SIDE: Content --- */}
            <div>
              <div className="mb-12">
                <p className="text-teal-600 text-xs font-bold tracking-widest uppercase mb-2">
                  Have a look at our services
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                  Massage Therapy Center
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                  Experience the ultimate relaxation at our massage therapy center. 
                  Our expert therapists use ancient techniques to restore your vitality.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {therapies.map((item) => (
                  <div key={item.id} className="group">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mb-4"></div>
                    <h3 className="text-lg font-bold text-gray-900 font-serif mb-2 group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-[11px] leading-5 mb-3">
                      {item.shortDesc}
                    </p>
                    
                    {/* BUTTON: Opens Modal */}
                    <button 
                      onClick={() => setSelectedTherapy(item)}
                      className="inline-flex items-center text-[10px] font-bold text-gray-900 uppercase tracking-widest hover:text-teal-600 transition-colors cursor-pointer"
                    >
                      Read More <ArrowRight size={12} className="ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* --- RIGHT SIDE: Main Image --- */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" 
                alt="Massage Therapy" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>
        </div>
      </div>

      {/* --- MODAL (POPUP) --- */}
      {selectedTherapy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden relative animate-fadeIn scale-100 transform transition-transform">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedTherapy(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Modal Image */}
              <div className="md:w-5/12 h-64 md:h-auto">
                <img 
                  src={selectedTherapy.image} 
                  alt={selectedTherapy.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2 text-orange-500 text-xs font-bold uppercase tracking-widest">
                  <Sparkles size={14} /> Recommended Therapy
                </div>
                
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  {selectedTherapy.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {selectedTherapy.fullDesc}
                </p>

                {/* Benefits List */}
                <div className="mb-6 space-y-2">
                  <p className="font-bold text-gray-900 text-sm mb-2">Key Benefits:</p>
                  {selectedTherapy.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-600">
                      <CheckCircle size={14} className="text-teal-500 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                  <div className="flex items-center text-gray-500 text-xs font-bold uppercase">
                    <Clock size={16} className="mr-2 text-orange-400" />
                    {selectedTherapy.duration}
                  </div>
                  
                  <button className="bg-green-900 text-white px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-orange-500 transition-colors">
                    Book This
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default TherapyCenter;