"use client";
import { useRef } from "react";
import styles from "./WhyChooseUs.module.css";

// Reusable Card Component
const BentoCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`${styles.bentoCard} ${className} group`}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className={`py-24 relative ${styles.sectionBg}`}>
      <div className={styles.gridPattern}></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* SECTION HEADER: Positions you as the Integrator */}
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-3xl">
            <span className="text-[#fc1660] font-bold tracking-widest uppercase text-xs mb-4 block">
              Premier System Integrator
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Unifying Hardware, Cloud, <br/>
              <span className={styles.gradientText}>& Business Operations.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs mt-6 md:mt-0 text-sm leading-relaxed text-right hidden md:block">
             We connect the dots between your physical infrastructure and digital cloud operations.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
          
          {/* CARD 1: SYSTEM INTEGRATION (The Core Identity) - Large Square */}
          <BentoCard className="col-span-1 md:col-span-6 lg:col-span-8 row-span-2 p-8 md:p-12 flex flex-col justify-between">
            <div className="relative z-20">
              <div className="w-12 h-12 bg-[#fc1660] rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-red-900/20">
                 {/* Connection Icon */}
                 <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">End-to-End System Integration</h3>
              <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                We are the bridge between technologies. We seamlessly integrate <strong>Structured Cabling</strong>, <strong>Wireless Networks</strong>, and <strong>Telecom</strong> into a single, cohesive infrastructure stack.
              </p>
            </div>
            
            {/* Visual: Integration Diagram */}
            <div className="mt-8 w-full h-40 bg-white/5 rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  {/* Abstract connection lines */}
                  <svg className="w-full h-full" viewBox="0 0 400 150">
                     <path d="M50 75 L 150 75 L 200 40 L 350 40" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                     <path d="M150 75 L 200 110 L 350 110" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                     <circle cx="50" cy="75" r="4" fill="#fc1660" />
                     <circle cx="200" cy="40" r="4" fill="white" />
                     <circle cx="200" cy="110" r="4" fill="white" />
                  </svg>
                </div>
                <div className="relative z-10 flex gap-8">
                   <div className="px-4 py-2 bg-[#0b1121] border border-white/20 rounded text-xs text-gray-300">Telecom</div>
                   <div className="px-4 py-2 bg-[#0b1121] border border-[#fc1660] rounded text-xs text-white font-bold shadow-[0_0_15px_#fc1660]">CORE</div>
                   <div className="px-4 py-2 bg-[#0b1121] border border-white/20 rounded text-xs text-gray-300">Network</div>
                </div>
            </div>
          </BentoCard>

          {/* CARD 2: SECURITY (Fleet & IT) - Tall Vertical */}
          <BentoCard className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1 lg:row-span-2 p-8 flex flex-col relative">
             <div className={styles.radarLine}></div>
             
             <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 text-emerald-400">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
             </div>

             <h3 className="text-2xl font-bold text-white mb-2">Total Security</h3>
             <p className="text-sm text-gray-400 mb-8">Asset Protection & Fleet Management.</p>

             <ul className="space-y-4">
               {['Cyber Security', 'Vehicle Tracking', 'Access Control', 'Fleet Management SW'].map((item, i) => (
                 <li key={i} className="flex items-center text-sm text-gray-300">
                   <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                   {item}
                 </li>
               ))}
             </ul>

             <div className="mt-auto pt-6 border-t border-white/10">
               <div className="text-xs text-gray-500 uppercase tracking-widest">System Status</div>
               <div className="text-emerald-400 font-mono text-lg">SECURE</div>
             </div>
          </BentoCard>

          {/* CARD 3: CLOUD OPERATIONS (New!) - Wide Horizontal */}
          <BentoCard className="col-span-1 md:col-span-5 lg:col-span-5 row-span-1 p-8 flex flex-col justify-center">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                  {/* Cloud Icon */}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white">Cloud Operations</h3>
             </div>
             <p className="text-gray-400 text-sm mb-4">
               Scalable <strong>Cloud Solutions</strong> and custom <strong>Business Software</strong> to power your digital transformation.
             </p>
             <div className="flex gap-2">
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-300">AWS/Azure</span>
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-300">SaaS</span>
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-300">ERP</span>
             </div>
          </BentoCard>

          {/* CARD 4: TELECOM - Medium Horizontal */}
          <BentoCard className="col-span-1 md:col-span-4 lg:col-span-4 row-span-1 p-8 flex flex-col justify-center">
             <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-white">Telecom & Voice</h3>
                <div className="flex gap-1 h-6 items-end">
                   <div className={`${styles.waveBar}`} style={{ animationDelay: '0s' }}></div>
                   <div className={`${styles.waveBar}`} style={{ animationDelay: '0.2s' }}></div>
                   <div className={`${styles.waveBar}`} style={{ animationDelay: '0.1s' }}></div>
                </div>
             </div>
             <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">Unified Comms</div>
             <p className="text-gray-400 text-sm">
                Advanced <strong>Contact Center</strong> & <strong>Office Telephony</strong> for seamless business communication.
             </p>
          </BentoCard>

          {/* CARD 5: 24/7 SUPPORT */}
          <BentoCard className="col-span-1 md:col-span-3 lg:col-span-3 row-span-1 p-6 flex flex-col justify-between bg-white/5">
             <div className="text-gray-400 text-xs uppercase font-bold">Managed Services</div>
             <div className="text-3xl font-bold text-white">24/7</div>
             <div className="text-[10px] text-gray-500">
               Proactive Monitoring <br/> & Maintenance
             </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;