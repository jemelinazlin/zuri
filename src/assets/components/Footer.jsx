import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';  // Import social media icons

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white text-center py-12 mt-16">
      <div className="container mx-auto px-6">
        {/* Footer Top Section - About Us, Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* About Us */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">
              Tisap Threads offers the latest fashion trends with unbeatable quality. Shop a wide selection of apparel
              for men and women. We pride ourselves on delivering excellence and customer satisfaction.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-400">
              <li><a href="/" className="hover:text-blue-500">Shop</a></li>
              <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-500">Terms & Conditions</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">
              123 Fashion St, City Center, Country, Zip Code
            </p>
            <p className="text-gray-400">
              Email: <a href="mailto:support@tisapthreads.com" className="text-blue-500">support@tisapthreads.com</a>
            </p>
            <p className="text-gray-400">
              Phone: <a href="tel:+1234567890" className="text-blue-500">+123 456 7890</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom Section - Social Media */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} className="text-blue-500 hover:text-blue-600" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} className="text-blue-400 hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="text-pink-500 hover:text-pink-600" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} className="text-red-600 hover:text-red-700" />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterest size={30} className="text-red-700 hover:text-red-800" />
            </a>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center">
            <h4 className="text-2xl font-semibold mb-4">Join Our Newsletter</h4>
            <p className="text-gray-400 mb-4">Get the latest updates and offers delivered to your inbox!</p>
            <div className="flex justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-lg text-black w-[300px] mb-4"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="text-gray-400 mt-6">
          <p>&copy; 2025 Tisap Threads. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
