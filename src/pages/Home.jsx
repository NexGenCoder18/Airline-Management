import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGlobeAmericas, FaHeadset, FaWineGlassAlt, FaStar } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 dark:bg-slate-950">
      
      {/* --- Hero Section with Stable Image --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Image with Zoom Effect */}
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 -z-10 bg-slate-900"
        >
          <img 
            // New Stable Pexels Image (High Quality Airport/Travel)
            src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" 
            alt="Travel Background" 
            className="w-full h-full object-cover opacity-60 dark:opacity-40"
          />
          {/* linear Overlay for Text Readability */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-50 dark:from-slate-950 via-transparent to-black/30" />
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-6 relative z-10 text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              World's Best Airline 2025
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Fly Beyond <br/> 
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-cyan-400 to-teal-300 filter drop-shadow-lg">
                Boundaries
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the pinnacle of luxury travel. AI-driven schedules, world-class comfort, and destinations that inspire.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link to="/search">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Your Flight <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              
              <Link to="/about">
                <button className="px-8 py-4 rounded-full border border-white/30 text-white font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition">
                  Explore Deals
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Glass Stats Strip */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-white/5 backdrop-blur-xl hidden md:block">
          <div className="container mx-auto px-6 py-6 grid grid-cols-4 divide-x divide-white/10">
             <StatItem number="150+" label="Destinations" />
             <StatItem number="2.5k" label="Daily Flights" />
             <StatItem number="10M+" label="Happy Travelers" />
             <StatItem number="24/7" label="Support" />
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Why Fly SkyWings?</h2>
          <div className="h-1 w-20 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={FaWineGlassAlt} 
            title="First Class Comfort" 
            desc="Recline in our fully flat beds with personal minibars and designer amenity kits." 
            delay={0.1}
          />
          <FeatureCard 
            icon={FaGlobeAmericas} 
            title="Global Coverage" 
            desc="Connecting you to over 150 countries with our partner network alliances." 
            delay={0.2}
          />
          <FeatureCard 
            icon={FaHeadset} 
            title="Premium Support" 
            desc="Dedicated concierge service available 24/7 to handle your every need." 
            delay={0.3}
          />
        </div>
      </section>

      {/* --- Popular Destinations (New Section) --- */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
           <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-2">Popular Destinations</h2>
                <p className="text-slate-500">Explore our most booked locations this month.</p>
              </div>
              <Link to="/search" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">View All</Link>
           </div>

           <div className="grid md:grid-cols-3 gap-6">
              <DestinationCard 
                img="https://images.pexels.com/photos/161963/chicago-illinois-skyline-skyscrapers-161963.jpeg?auto=compress&cs=tinysrgb&w=800"
                city="New York, USA"
                price="$450"
              />
              
              <DestinationCard 
                img="https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=800"
                city="Paris, France"
                price="$620"
              />
              <DestinationCard 
                img="https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800"
                city="Dubai, UAE"
                price="$580"
              />
           </div>
        </div>
      </section>

    </div>
  );
};

// --- Helper Components ---

const StatItem = ({ number, label }) => (
  <div className="text-center">
    <div className="text-2xl md:text-3xl font-bold text-white">{number}</div>
    <div className="text-slate-400 text-sm uppercase tracking-wider">{label}</div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -10 }}
    className="glass-card p-8 text-center group hover:bg-white/10 hover:border-blue-500/30 transition-colors"
  >
    <div className="w-16 h-16 mx-auto bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-3xl text-blue-500 group-hover:text-cyan-400 transition-colors" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
  </motion.div>
);

const DestinationCard = ({ img, city, price }) => (
  <div className="group relative rounded-2xl overflow-hidden h-96 cursor-pointer">
    <img src={img} alt={city} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
    <div className="absolute bottom-6 left-6">
      <div className="flex items-center gap-1 text-yellow-400 mb-1 text-xs font-bold">
        <FaStar /> 4.9 (2k+ Reviews)
      </div>
      <h3 className="text-2xl font-bold text-white">{city}</h3>
      <p className="text-slate-300">Direct Flights available</p>
    </div>
    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full font-bold border border-white/30">
      from {price}
    </div>
  </div>
);

export default Home;