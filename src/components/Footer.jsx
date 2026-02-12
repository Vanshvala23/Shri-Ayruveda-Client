import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* --- MAIN FOOTER GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              Shri Ayu <span className="text-orange-500">Chikitsalay</span>
            </h2>
            <p className="text-green-100 text-sm leading-relaxed mb-6">
              Restoring the natural balance of your body, mind, and spirit through ancient Ayurvedic wisdom and modern care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-serif mb-6 text-orange-400">Quick Links</h3>
            <ul className="space-y-4 text-sm text-green-100">
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">Treatments</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition-colors">Book Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (FIXED) */}
          <div>
            <h3 className="text-lg font-bold font-serif mb-6 text-orange-400">Our Therapies</h3>
            <ul className="space-y-4 text-sm text-green-100">
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors block">Panchakarma</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors block">Shirodhara</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors block">Abhyangam</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors block">Yoga Classes</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-serif mb-6 text-orange-400">Contact Us</h3>
            <div className="space-y-4 text-sm text-green-100">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-orange-500 shrink-0" size={18} />
                <p>123 Wellness Street, Ayurveda Park, <br /> Pune, Maharashtra 411001</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-orange-500 shrink-0" size={18} />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-orange-500 shrink-0" size={18} />
                <p>contact@shriayu.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* --- DIVIDER --- */}
        <div className="border-t border-green-800 pt-8 text-center text-xs text-green-300">
          <p>&copy; {new Date().getFullYear()} Shri Ayu Chikitsalay. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;