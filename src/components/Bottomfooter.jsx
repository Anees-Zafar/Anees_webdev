// Footer.js
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-[#ffd630]" />
            <span>+92 3412705025</span> {/* Replace with your actual phone number */}
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-[#ffd630]" />
            <span>aneesdeveloper038@gmail.com</span> {/* Replace with your actual email */}
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-[#ffd630]" />
            <span>Faisalabad , Pakistan</span> {/* Replace with your actual address */}
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-400">&copy; {new Date().getFullYear()} Anees_webdev . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
