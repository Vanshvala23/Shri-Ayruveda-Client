import React from 'react';
import { 
  Users, Award, Clock, Heart, 
  Sprout, Activity, CheckCircle, Leaf 
} from 'lucide-react';
import PageHeader from './PageHeader';

const About = () => {
  
  // --- DATA: Our Core Values ---
  const values = [
    {
      icon: <Sprout size={32} />,
      title: "Authentic Ayurveda",
      desc: "We strictly follow classical texts (Samhitas) for all treatments and formulations."
    },
    {
      icon: <Activity size={32} />,
      title: "Root Cause Analysis",
      desc: "We don't just treat symptoms; we diagnose the root cause (Nidan) to prevent recurrence."
    },
    {
      icon: <Heart size={32} />,
      title: "Personalized Care",
      desc: "Every body type (Prakriti) is unique. Our treatments are customized for your specific dosha balance."
    }
  ];

  // --- DATA: Doctors Team ---
  const doctors = [
    {
      name: "Dr. Rajesh Verma",
      role: "Senior Vaidya (BAMS, MD)",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
      specialty: "Chronic Disease Specialist"
    },
    {
      name: "Dr. Anjali Deshmukh",
      role: "Ayurvedic Nutritionist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
      specialty: "Panchakarma & Diet"
    },
    {
      name: "Dr. Sameer Khan",
      role: "Yoga & Therapy Expert",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
      specialty: "Stress Management"
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HEADER */}
      <div className="relative bg-green-900 py-32 text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <p className="text-orange-400 text-sm tracking-[0.2em] uppercase font-bold mb-4">
            Since 2010
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            About Shri Ayu Chikitsalay
          </h1>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">
            A sanctuary where ancient wisdom meets modern healing.
          </p>
        </div>
      </div>

      {/* 2. OUR STORY & STATS */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Images Collage */}
            <div className="lg:w-1/2 relative">
              <div className="absolute top-0 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600" 
                alt="Clinic Interior" 
                className="rounded-tr-[4rem] rounded-bl-[4rem] shadow-2xl w-full z-10 relative"
              />
              <div className="hidden md:block absolute -bottom-10 -right-10 w-48 h-48 border-8 border-white rounded-full overflow-hidden shadow-xl z-20">
                <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif font-bold text-green-900 mb-6 leading-tight">
                Healing with Ancient Wisdom <br/> 
                <span className="text-orange-500">For Modern Life</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Shri Ayu Chikitsalay was founded with a singular mission: to bring the authentic healing power of Ayurveda to modern life. We believe that true health is not just the absence of disease, but a vibrant state of balance between body, mind, and spirit.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-3xl font-bold text-green-900">15+</h3>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Years Experience</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-3xl font-bold text-green-900">5k+</h3>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Happy Patients</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-3xl font-bold text-green-900">20+</h3>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Expert Therapists</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-3xl font-bold text-green-900">100%</h3>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Natural Herbs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PHILOSOPHY (Values) */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mt-2">Our Healing Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-orange-500 group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-800 mb-6 group-hover:bg-orange-100 group-hover:text-orange-500 transition-colors">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">{val.title}</h3>
                <p className="text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS (Timeline) */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900">How We Treat</h2>
            <p className="text-gray-500 mt-2">Our step-by-step approach to holistic wellness</p>
          </div>

          <div className="space-y-12">
            {[
              { step: "01", title: "Nadi Pariksha (Pulse Diagnosis)", text: "We start by reading your pulse to understand your body's constitution (Prakriti) and current imbalance (Vikriti)." },
              { step: "02", title: "Customized Treatment Plan", text: "Based on the diagnosis, we design a plan that includes diet corrections, herbal medicines, and therapy sessions." },
              { step: "03", title: "Detoxification (Shodhan)", text: "We use Panchakarma therapies to flush out deep-seated toxins from the body tissues." },
              { step: "04", title: "Rejuvenation (Rasayana)", text: "The final step focuses on strengthening immunity and restoring vitality to prevent future illness." }
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 md:items-center group">
                <div className="flex-shrink-0 w-16 h-16 bg-green-900 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:bg-orange-500 transition-colors">
                  {item.step}
                </div>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow border border-gray-100 hover:border-green-200 transition-colors">
                  <h3 className="text-xl font-bold text-green-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEET THE EXPERTS */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-orange-400 font-bold tracking-widest uppercase text-xs">The Team</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">Meet Our Specialists</h2>
            </div>
            <button className="hidden md:block px-6 py-3 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition rounded-full font-bold text-sm">
              View All Doctors
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doc, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition duration-300">
                <div className="h-72 overflow-hidden">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500 grayscale hover:grayscale-0"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{doc.name}</h3>
                  <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">{doc.role}</p>
                  <div className="flex items-center gap-2 text-green-100 text-sm">
                    <CheckCircle size={16} className="text-green-400" />
                    {doc.specialty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GALLERY STRIP */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-green-900">Tour Our Clinic</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
           <img src="https://images.unsplash.com/photo-1519823551278-64ac927accc9?auto=format&fit=crop&q=80&w=400" className="h-64 w-full object-cover hover:opacity-90 transition" alt="Clinic 1" />
           <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400" className="h-64 w-full object-cover hover:opacity-90 transition" alt="Clinic 2" />
           <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=400" className="h-64 w-full object-cover hover:opacity-90 transition" alt="Clinic 3" />
           <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=400" className="h-64 w-full object-cover hover:opacity-90 transition" alt="Clinic 4" />
        </div>
      </section>

    </div>
  );
};

export default About;