import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src="https://raw.githubusercontent.com/myblackbeanca/regcoffee/refs/heads/main/regslogo.jpg"
              alt="Reg's Coffee House"
              className="h-16 w-auto rounded-full"
            />
            <p className="text-gray-400">Where music meets conversation over a perfect cup of coffee.</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400">Mix-Tapes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400">Live Shows</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400">Merch</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400">MINY Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400">Rewards Program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400">Live Q&A Sessions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400">Event Calendar</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-amber-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400">Subscribe to our newsletter</p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-neutral-800 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-r-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Reg's Coffee House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;