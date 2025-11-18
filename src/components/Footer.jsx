import React from 'react';
import { 
  FaPlaneDeparture, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaPaperPlane
} from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t-2 border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* --- Brand Column --- */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-linear-to-br from-blue-500 to-cyan-400 p-2.5 rounded-xl text-white shadow-lg shadow-blue-500/30">
                <FaPlaneDeparture className="text-xl" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-100">
                Sky<span className="text-blue-500">Wings</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Experience the future of travel with SkyWings. Luxury, comfort, and reliability in every journey.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaFacebookF, url: "#" },
                { icon: FaTwitter, url: "#" },
                { icon: FaInstagram, url: "#" },
                { icon: FaLinkedinIn, url: "#" },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* --- Quick Links Column --- */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><FooterLink to="/" text="Home" /></li>
              <li><FooterLink to="/search" text="Book Flight" /></li>
              <li><FooterLink to="/dashboard" text="My Bookings" /></li>
              <li><FooterLink to="/about" text="About Us" /></li>
            </ul>
          </div>

          {/* --- Support Column --- */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100 mb-6">Support</h3>
            <ul className="space-y-3">
              <li><FooterLink to="/help" text="Help Center" /></li>
              <li><FooterLink to="/faq" text="FAQs" /></li>
              <li><FooterLink to="/policy" text="Privacy Policy" /></li>
              <li><FooterLink to="/terms" text="Terms of Service" /></li>
            </ul>
          </div>

          {/* --- Newsletter Column --- */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100 mb-6">Stay Connected</h3>
            <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800/70 border border-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-500 text-sm"
              />
              <button 
                type="submit"
                className="flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
              >
                <FaPaperPlane />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-slate-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} SkyWings Airlines. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500">
            <Link to="/terms" className="hover:text-blue-400 transition">Terms & Conditions</Link>
            <Link to="/policy" className="hover:text-blue-400 transition">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for animated links
const FooterLink = ({ to, text }) => (
  <Link 
    to={to} 
    className="flex items-center gap-1 text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 group"
  >
    <BsArrowRightShort size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    <span>{text}</span>
  </Link>
);

export default Footer;