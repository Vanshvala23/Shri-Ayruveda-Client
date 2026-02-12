import React, { useState } from 'react';
import PageHeader from './PageHeader';
import { Check, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import img from "../assets/image.png";
import kati from "../assets/kati.png";

const Therapies = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Panchakarma", "Pain Management", "Stress Relief", "Beauty & Skin"];

  const therapyData = [
    {
      id: 1,
      category: "Panchakarma",
      title: "Vamana (Therapeutic Emesis)",
      image: img,
      desc: "A controlled vomiting therapy to eliminate excess Kapha dosha. Highly effective for asthma, bronchitis, allergies, and skin disorders.",
      duration: "45 - 60 Mins",
      benefits: ["Clears chest congestion", "Relieves asthma", "Detoxifies upper body"]
    },
    {
      id: 2,
      category: "Panchakarma",
      title: "Virechana (Purgation)",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600",
      desc: "A medicated purgation therapy that removes Pitta toxins from the body. It cleanses the liver, gallbladder, and intestines.",
      duration: "Day Long Process",
      benefits: ["Liver detox", "Treats skin diseases", "Relieves acidity & digestive issues"]
    },
    {
      id: 3,
      category: "Panchakarma",
      title: "Basti (Medicated Enema)",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600",
      desc: "Considered the mother of all treatments, Basti balances Vata dosha effectively. It involves introducing herbal oils or decoctions into the colon.",
      duration: "30 - 45 Mins",
      benefits: ["Relieves constipation", "Treats arthritis & back pain", "Boosts neurological health"]
    },
    {
      id: 4,
      category: "Pain Management",
      title: "Kati Basti (Lower Back Care)",
      image: kati,
      desc: "Warm medicated oil is retained over the lower back using a dough ring. This deeply penetrates the muscles to relieve stiffness and pain.",
      duration: "45 Mins",
      benefits: ["Treats sciatica", "Relieves lumbar spondylitis", "Strengthens back muscles"]
    },
    {
      id: 5,
      category: "Pain Management",
      title: "Potli Massage (Bolus Therapy)",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600",
      desc: "Herbal pouches (potlis) dipped in warm oil are used to massage the body. The heat and herbs work together to reduce inflammation.",
      duration: "60 Mins",
      benefits: ["Reduces joint swelling", "Relieves muscle cramps", "Improves circulation"]
    },
    {
      id: 6,
      category: "Stress Relief",
      title: "Shirodhara",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600",
      desc: "A continuous stream of warm, medicated oil is poured onto the forehead. This induces a deep state of relaxation and mental clarity.",
      duration: "45 - 60 Mins",
      benefits: ["Cures insomnia", "Reduces anxiety & stress", "Improves memory & focus"]
    },
    {
      id: 7,
      category: "Stress Relief",
      title: "Takradhara",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600",
      desc: "Similar to Shirodhara but uses medicated buttermilk instead of oil. It is exceptionally cooling and soothing for the brain.",
      duration: "45 Mins",
      benefits: ["Cures migraines", "Reduces hypertension", "Prevents premature graying"]
    },
    {
      id: 8,
      category: "Beauty & Skin",
      title: "Udvartana (Powder Massage)",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600",
      desc: "A vigorous massage using herbal powders against the direction of hair growth. It exfoliates the skin and breaks down subcutaneous fat.",
      duration: "60 Mins",
      benefits: ["Weight loss support", "Improves skin texture", "Reduces cellulite"]
    },
    {
      id: 9,
      category: "Beauty & Skin",
      title: "Mukha Lepam (Ayurvedic Facial)",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600",
      desc: "A traditional beauty ritual using exotic herbs, saffron, and milk to cleanse, tone, and nourish the facial skin.",
      duration: "45 Mins",
      benefits: ["Natural glow", "Anti-aging effects", "Removes tan & blemishes"]
    }
  ];

  const filteredData = activeCategory === "All" 
    ? therapyData 
    : therapyData.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader title="Our Therapies" subtitle="Holistic Treatments for Every Need" />

      {/* --- CATEGORY FILTER --- */}
      <div className="sticky top-20 z-40 bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex gap-4 md:justify-center min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- THERAPY GRID --- */}
      <section className="py-16 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {filteredData.map((therapy) => (
            <div key={therapy.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group flex flex-col h-full border border-gray-100">
              
              <div className="relative h-60 overflow-hidden">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-green-900 text-xs font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wider">
                  {therapy.category}
                </div>
                <img 
                  src={therapy.image} 
                  alt={therapy.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors font-serif">
                    {therapy.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {therapy.desc}
                </p>

                <div className="mb-6 space-y-2">
                  {therapy.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-600 font-medium">
                      <Check size={14} className="text-green-500 mr-2 shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-xs font-bold uppercase">
                    <Clock size={14} className="mr-1 text-orange-400" />
                    {therapy.duration}
                  </div>
                  
                  {/* --- MAGIC HAPPENS HERE: Passing State to Route --- */}
                  <Link to="/contact" state={{ selectedTherapy: therapy.title }}>
                    <button className="text-orange-500 font-bold text-sm flex items-center hover:translate-x-1 transition-transform">
                      Book Now <ArrowRight size={16} className="ml-1" />
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* --- CONSULTATION CTA --- */}
      <section className="bg-green-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <Sparkles className="mx-auto text-orange-400 mb-6" size={48} />
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Not sure which therapy you need?</h2>
          <p className="text-green-100 max-w-2xl mx-auto text-lg mb-10">
            Ayurveda treats the individual, not just the disease. Schedule a consultation with our Vaidya to get a personalized treatment plan based on your pulse diagnosis.
          </p>
          <Link to="/contact" state={{ selectedTherapy: "Doctor Consultation" }}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-orange-500/50">
              Book a Consultation
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Therapies;