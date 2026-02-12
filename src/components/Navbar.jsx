import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // <--- Import Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated links to point to Routes instead of #ids
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' }, // Keeping on Home for now
    { name: 'Therapies', path: '/services' }, // Points to the new Services page
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
      <div className="container px-4 mx-auto md:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* --- LOGO --- */}
          <Link to="/" className="flex-shrink-0 cursor-pointer">
            <h1 className="text-2xl font-bold tracking-tight text-green-900">
              Shri Ayu <span className="text-orange-500">Chikitsalay</span>
            </h1>
          </Link>

          {/* --- DESKTOP LINKS --- */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-green-800 font-medium transition duration-300 hover:text-orange-500"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- CTA BUTTON --- */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="px-6 py-2.5 font-semibold text-white transition duration-300 bg-orange-500 rounded-full shadow-md hover:bg-orange-600 hover:shadow-lg">
                Book Appointment
              </button>
            </Link>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-900 hover:text-orange-500 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isOpen && (
        <div className="md:hidden bg-green-50 border-t border-green-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-green-900 rounded-md hover:bg-orange-100 hover:text-orange-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full mt-4 px-6 py-3 font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600">
                Book Appointment
                </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;