import React, { useState, useEffect } from 'react';
import { Calendar, User, Mail, Phone, Clock } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Appointment = () => {
    const location = useLocation();

    const [selectedService, setSelectedService] = useState("Select Therapy");

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        message: ""
    });

    // Prefill service from previous page
    useEffect(() => {
        if (location.state?.selectedTherapy) {
            setSelectedService(location.state.selectedTherapy);
        }
    }, [location]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.date) {
            return alert("Please fill all required fields");
        }

        if (selectedService === "Select Therapy") {
            return alert("Please select a therapy");
        }

        try {
            await axios.post("https://shri-ayruveda-backend.vercel.app/api/contact", {
                name: formData.name,
                phone: formData.phone,
                preferredDate: formData.date,
                message: formData.message,
                service: selectedService
            });

            alert(`Thank you! Your booking request for ${selectedService} has been sent.`);

            // reset
            setFormData({
                name: "",
                phone: "",
                date: "",
                message: ""
            });
            setSelectedService("Select Therapy");

        } catch (err) {
            alert("Failed to send booking");
            console.error(err);
        }
    };

    return (
        <section className="py-20 bg-green-50" id="appointment">
            <div className="container mx-auto px-4 max-w-6xl">

                <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">

                    {/* LEFT SIDE */}
                    <div className="lg:w-5/12 bg-green-900 text-white p-10 md:p-14 relative flex flex-col justify-between">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>

                        <div className="relative z-10">
                            <p className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4">
                                Reservation
                            </p>
                            <h2 className="text-4xl font-serif font-bold mb-6">
                                Book Your <br /> Appointment
                            </h2>
                            <p className="text-green-100 text-sm leading-relaxed mb-8">
                                Ready to restore your balance? Fill out the form, and our reception team will contact you within 24 hours to confirm your slot.
                            </p>
                        </div>

                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center text-orange-500">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-green-300 uppercase">Call Anytime</p>
                                    <p className="font-bold">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center text-orange-500">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-green-300 uppercase">Email Us</p>
                                    <p className="font-bold">booking@shriayu.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div className="lg:w-7/12 p-10 md:p-14">
                        <form className="space-y-6" onSubmit={handleSubmit}>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                        <User size={16} className="text-orange-500" /> Name
                                    </label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Your Full Name"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white focus:outline-none transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                        <Phone size={16} className="text-orange-500" /> Phone
                                    </label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        placeholder="Your Phone Number"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                        <Calendar size={16} className="text-orange-500" /> Service
                                    </label>
                                    <select
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white focus:outline-none transition-colors"
                                    >
                                        <option value="Select Therapy">Select Therapy</option>
                                        <option>Panchakarma</option>
                                        <option>Abhyangam Massage</option>
                                        <option>Doctor Consultation</option>
                                        <option>Shirodhara</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                        <Clock size={16} className="text-orange-500" /> Preferred Date
                                    </label>
                                    <input
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        type="date"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Message (Optional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us about your health concern..."
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white focus:outline-none transition-colors"
                                ></textarea>
                            </div>

                            <button className="w-full py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/30">
                                Confirm Booking
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Appointment;
