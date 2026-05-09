/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Heart, MapPin, Calendar, Camera, Infinity as InfinityIcon, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

const DATA = {
  home: [
    "https://www.image2url.com/r2/default/images/1778364480333-d078ea54-c66f-47e2-a963-59beab9e5afc.png",
    "https://www.image2url.com/r2/default/images/1778364541908-b4de71b5-3ecc-436c-b789-ab8f1e3afdb2.png",
    "https://www.image2url.com/r2/default/images/1778364582171-2c834349-c3fc-486d-863e-479381a2215b.png",
    "https://www.image2url.com/r2/default/images/1778364688140-b80f9e8f-533f-4d9d-9229-49d5affe0106.png"
  ],
  sections: [
    {
      id: "meeting",
      title: "Hauz Khas",
      subtitle: "Where it all began",
      date: "The Day We Met",
      description: "Those narrow lanes, the ancient fort, and that spark. I still remember how my world felt different the moment I saw you there.",
      images: ["https://www.image2url.com/r2/default/images/1778364792137-ebac7969-01f8-4d6a-b352-9d0b8ec48a20.jpeg"],
      color: "from-orange-500/20 to-transparent"
    },
    {
      id: "central-park",
      title: "Central Park",
      subtitle: "Moments of Serenity",
      date: "Peace & Love",
      description: "Under the vast open sky, surrounded by greens, every conversation felt like a dream. You were the only beauty I could focus on.",
      images: ["https://www.image2url.com/r2/default/images/1778365225677-70f5bdae-282f-419d-84a8-ecb5894bcd66.png"],
      color: "from-green-500/20 to-transparent"
    },
    {
      id: "laxmi-nagar",
      title: "Laxmi Nagar",
      subtitle: "The Everyday Joy",
      date: "Our Daily Adventures",
      description: "Even in the busiest streets, life felt still with you by my side. These are the small moments that mean the most.",
      images: [
        "https://www.image2url.com/r2/default/images/1778364897752-dc167ca2-1a02-4167-9f8b-c8a4621c797d.png",
        "https://www.image2url.com/r2/default/images/1778364929332-b1aa6413-2d4f-4c23-85d3-2d969e38f517.png",
        "https://www.image2url.com/r2/default/images/1778364951943-80891948-e2d6-4354-b457-270a7f43ce4a.png"
      ],
      color: "from-blue-500/20 to-transparent"
    }
  ]
};

export default function App() {
  const [hasProposed, setHasProposed] = useState(false);
  const [proposalAnswer, setProposalAnswer] = useState<null | boolean>(null);

  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.4]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-page text-brand-dark">
      {/* Background Atmosphere - Adjusted for light theme */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          style={{ opacity: backgroundOpacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#f5e6e0_0%,transparent_60%),radial-gradient(circle_at_10%_80%,#c27e7e_0%,transparent_50%)] filter blur-[100px]"
        />
      </div>

      {/* Side Label */}
      <div className="fixed top-0 right-0 p-12 vertical-label h-full flex items-center pointer-events-none z-40">
        My Dearest &bull; Will You Be My Forever? &bull; Since 2021
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center border-b border-border bg-page/80 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-serif text-2xl italic tracking-tighter"
        >
          Our Journey
        </motion.div>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60">
          <a href="#home" className="hover:text-brand transition-colors">Home</a>
          <a href="#memories" className="hover:text-brand transition-colors">Memories</a>
          <a href="#proposal" className="hover:text-brand transition-colors font-bold text-brand">Forever?</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center z-10 mb-12"
        >
          <div className="w-16 h-px bg-brand mx-auto mb-6"></div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-brand/80 mb-4 block font-bold">My Everything</span>
          <h1 className="font-serif text-6xl md:text-8xl italic mb-6 leading-none text-brand-dark">To my most <br/> beautiful one</h1>
          <p className="max-w-md mx-auto text-brand-dark/70 leading-relaxed font-light italic">
            Every moment with you is a new favorite memory. Here's a small glimpse into the scrapbook of our hearts.
          </p>
        </motion.div>

        {/* Hero Image Mosaic (Polaroid Style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full px-4 h-[40vh] items-center">
          {DATA.home.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="polaroid aspect-[3/4] flex flex-col"
            >
              <img 
                src={img} 
                alt="Memory" 
                className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 text-[10px] text-center font-semibold tracking-widest uppercase opacity-40 italic">Memory #{i+1}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-12 opacity-30 text-brand"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Memories Path */}
      <section id="memories" className="relative py-32 space-y-32 lg:space-y-64">
        {DATA.sections.map((section, idx) => (
          <div key={section.id} className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Gallery Column */}
            <div className={`relative ${idx % 2 === 1 ? 'lg:order-last' : ''} flex justify-center`}>
               <motion.div
                 initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
                 className="relative z-10 p-4"
               >
                 {section.images.map((img, i) => (
                    <div 
                      key={i} 
                      className={`polaroid ${i === 0 ? 'w-[300px] md:w-[400px] aspect-[4/5]' : 'hidden'} transform ${idx % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'}`}
                    >
                      <img src={img} alt={section.title} className="w-full h-full object-cover grayscale-[10%]" referrerPolicy="no-referrer" />
                      <div className="mt-6 text-center text-xs font-semibold tracking-widest">{section.title} &bull; 2026</div>
                    </div>
                 ))}
               </motion.div>
               {/* Accent Blob */}
               <div className={`absolute inset-0 blur-[120px] rounded-full opacity-10 bg-brand`} />
            </div>

            {/* Content Column */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="space-y-8"
            >
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand">
                <MapPin size={14} />
                {section.title}
              </div>
              <h2 className="font-serif text-5xl md:text-7xl italic leading-tight text-brand-dark">{section.subtitle}</h2>
              <div className="flex items-center gap-2 text-brand font-serif italic text-xl border-l border-brand/30 pl-4 py-2">
                <Calendar size={18} />
                {section.date}
              </div>
              <p className="text-lg text-brand-dark/70 font-light leading-relaxed max-w-md">
                {section.description}
              </p>
            </motion.div>
          </div>
        ))}
      </section>

      {/* The Big Question */}
      <section id="proposal" className="relative h-screen flex items-center justify-center p-6 border-t border-border">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl w-full bg-white p-12 lg:p-20 shadow-2xl border border-border relative overflow-hidden rotate-[-1deg]"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-brand" />
          
          <AnimatePresence mode="wait">
            {!hasProposed ? (
              <motion.div 
                key="pre-proposal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-12"
              >
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Heart size={64} className="mx-auto text-brand fill-brand/20" />
                </motion.div>

                <h2 className="font-serif text-4xl md:text-5xl italic leading-tight text-brand-dark">
                  Every mile we've walked has led me directly to this page.
                </h2>
                <p className="text-brand-dark/60 text-lg italic">
                  "In you, I've found the home I never knew I was looking for."
                </p>
                
                <button 
                  onClick={() => setHasProposed(true)}
                  className="px-10 py-4 bg-brand text-white rounded-full font-bold uppercase tracking-[0.2em] hover:bg-brand-dark transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  Turn the Final Page
                </button>
              </motion.div>
            ) : proposalAnswer === null ? (
              <motion.div 
                key="proposal-question"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-10"
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand">A Question...</div>
                <h2 className="font-serif text-6xl md:text-8xl italic leading-none text-brand-dark">Marry Me?</h2>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
                  <button 
                    onClick={() => setProposalAnswer(true)}
                    className="w-full sm:w-auto px-10 py-4 bg-brand text-white rounded-full font-bold uppercase tracking-widest transition-all hover:scale-110 shadow-lg"
                  >
                    Yes
                  </button>
                  <button 
                    onMouseEnter={(e) => {
                      const btn = e.target as HTMLButtonElement;
                      btn.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
                    }}
                    className="w-full sm:w-auto px-10 py-4 border border-brand text-brand rounded-full font-bold uppercase tracking-widest transition-all"
                  >
                    Absolutely Yes
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="proposal-accepted"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8"
              >
                <div className="flex flex-col items-center gap-4">
                  <InfinityIcon size={80} className="text-brand animate-pulse" />
                  <h2 className="font-serif text-6xl md:text-8xl italic text-brand-dark">Forever</h2>
                </div>
                <p className="text-xl text-brand font-serif italic">
                  I promise to love you, cherish you, and fill our scrapbook with a lifetime of beautiful new dates.
                </p>
                <div className="flex justify-center gap-4 opacity-30 mt-8">
                   {[...Array(5)].map((_, i) => <Heart key={i} size={16} className="text-brand" fill="currentColor" />)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-brand/30 text-[10px] tracking-widest uppercase font-bold bg-page border-t border-border">
        To my future wife, with all my love &copy; 2026
      </footer>

      {/* Floating Elements (Rose tinted) */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              y: Math.random() * 1000,
              x: Math.random() * 1000
            }}
            animate={{ 
              y: [null, -100],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute"
          >
            <Heart size={12 + Math.random() * 20} className="text-brand/10" fill="currentColor" />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
