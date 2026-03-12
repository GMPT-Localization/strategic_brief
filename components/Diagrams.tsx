
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, CreditCard, Ban, Users, Code, LineChart, 
  FileText, Megaphone, Database, Globe, Zap, ShieldCheck, 
  CheckCircle2, XCircle, MessageSquare, ExternalLink,
  Puzzle, TrendingUp, Heart, ArrowDown, AlertTriangle,
  Clock, Check, Activity, Lock, ArrowRight, Layers,
  Target, Sparkles, AlertCircle, RefreshCw, MousePointerClick
} from 'lucide-react';

// --- PROPOSAL DIAGRAMS ---

// 1. INDUSTRY STATS
export const IndustryStatsDiagram: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center gap-12 w-full">
      {/* Chart 1 */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center group"
      >
        <div className="relative w-44 h-44 transition-transform group-hover:scale-110 duration-500">
           <svg className="w-full h-full transform -rotate-90">
             <circle cx="50%" cy="50%" r="75" fill="transparent" stroke="#F1F5F9" strokeWidth="10" />
             <motion.circle 
                cx="50%" cy="50%" r="75" fill="transparent" stroke="#3B82F6" strokeWidth="10" 
                strokeDasharray="471" 
                initial={{ strokeDashoffset: 471 }}
                whileInView={{ strokeDashoffset: 471 - (471 * 0.66) }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "circOut", delay: 0.2 }}
                strokeLinecap="round"
             />
           </svg>
           <div className="absolute inset-0 flex items-center justify-center flex-col">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-5xl font-black text-slate-900"
              >
                66%
              </motion.span>
           </div>
        </div>
        <p className="text-center mt-6 font-bold text-slate-800 leading-tight">
          Willing to pay more<br/>
          <span className="text-slate-500 font-medium text-sm">for localized experience</span>
        </p>
      </motion.div>

      {/* Chart 2 */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col items-center group"
      >
        <div className="relative w-44 h-44 transition-transform group-hover:scale-110 duration-500">
           <svg className="w-full h-full transform -rotate-90">
             <circle cx="50%" cy="50%" r="75" fill="transparent" stroke="#F1F5F9" strokeWidth="10" />
             <motion.circle 
                cx="50%" cy="50%" r="75" fill="transparent" stroke="#EF4444" strokeWidth="10" 
                strokeDasharray="471" 
                initial={{ strokeDashoffset: 471 }}
                whileInView={{ strokeDashoffset: 471 - (471 * 0.40) }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "circOut", delay: 0.4 }}
                strokeLinecap="round"
             />
           </svg>
           <div className="absolute inset-0 flex items-center justify-center flex-col">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-5xl font-black text-slate-900"
              >
                40%
              </motion.span>
           </div>
        </div>
        <p className="text-center mt-6 font-bold text-slate-800 leading-tight">
          Avoid English-only<br/>
          <span className="text-slate-500 font-medium text-sm">platforms entirely</span>
        </p>
      </motion.div>
    </div>
  );
};

// 2. REMOVES PSYCHOLOGICAL BARRIERS
export const RiskMitigationDiagram: React.FC = () => {
    const risks = [
        { icon: <ShieldAlert size={24}/>, title: "Support Uncertainty", desc: "Fear of lacking help" },
        { icon: <CreditCard size={24}/>, title: "Operational Friction", desc: "Complex transaction fear" },
        { icon: <Ban size={24}/>, title: "Market Alienation", desc: "'Not built for us'" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {risks.map((r, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ 
                        duration: 0.5, 
                        delay: i * 0.2,
                        type: "spring",
                        stiffness: 100
                    }}
                    className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                    <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                        className="text-amber-500 mb-4 bg-amber-50 p-4 rounded-full shadow-inner"
                    >
                        {r.icon}
                    </motion.div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-base">{r.title}</h4>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">{r.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

// 3. ADVERTISER SPLIT - Enhanced Visual
export const AdvertiserSplitDiagram: React.FC = () => {
    return (
        <div className="relative p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-white/10 shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h4 className="text-white/60 font-bold mb-10 text-center uppercase tracking-widest text-xs relative z-10">Revenue Origin</h4>
            
            <div className="flex items-center justify-center gap-1 mb-8 relative z-10">
                {/* Non-English Bar */}
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-32 bg-brand-accent rounded-l-xl relative flex items-center justify-center overflow-hidden"
                >
                     <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                     <div className="flex flex-col items-center">
                        <span className="text-5xl md:text-6xl font-black text-white drop-shadow-md">80%</span>
                        <span className="text-xs md:text-sm font-bold text-blue-100 uppercase tracking-wider mt-1">Non-English Markets</span>
                     </div>
                </motion.div>
                
                {/* English Bar */}
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "20%" }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                    className="h-32 bg-slate-700 rounded-r-xl relative flex items-center justify-center overflow-hidden"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-3xl md:text-4xl font-bold text-slate-400">20%</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">English</span>
                    </div>
                </motion.div>
            </div>
            
            <div className="text-center relative z-10">
                 <span className="inline-block px-4 py-2 bg-white/5 rounded-full text-sm text-blue-200 border border-white/10 backdrop-blur-md">
                    Underserved by English-centric UX
                 </span>
            </div>
        </div>
    )
}

// 4. CASE STUDY LIFT (Retained for legacy, but we use Detailed now)
export const CaseStudyLiftDiagram: React.FC = () => {
    // This can be deprecated or kept as a smaller widget if needed.
    // For now we will use CaseStudyDetailed in the new section.
    return null;
};

// --- NEW COMPONENT: CASE STUDY DETAILED ---
export const CaseStudyDetailed: React.FC = () => {
    const [view, setView] = useState<'before' | 'after'>('before');
    const [isPaused, setIsPaused] = useState(false);

    // Auto-cycle effect to create an "Animated Picture" feel
    React.useEffect(() => {
        if (isPaused) return;
        
        // Before state stays for 5 seconds, after state for 4 seconds
        const duration = view === 'before' ? 5000 : 4000;
        
        const timer = setTimeout(() => {
            setView(prev => prev === 'before' ? 'after' : 'before');
        }, duration); 
        
        return () => clearTimeout(timer);
    }, [isPaused, view]);

    return (
        <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col">
            
            {/* 1. Header Text - Explaining the Case */}
            <div className="p-10 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                    <Activity size={14} /> Optimization Results
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                   Fixing "Language Friction"
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                   We compared two 30-day windows (Dec 28 - Jan 27 vs Jan 28 - Feb 26). Despite a general traffic downtrend, fixing localized error messages and SDK language detection created a massive lift in yield. 
                </p>
            </div>

            {/* 2. Front & Center Visual - Animated Browser */}
            <div 
                className="w-full bg-slate-100 py-12 px-4 flex flex-col items-center justify-center relative border-y border-slate-200"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                 {/* Decorative Background Pattern */}
                 <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                 
                 {/* Browser Mockup */}
                 <div className="relative w-full max-w-2xl perspective-1000">
                      <AnimatePresence mode="wait">
                          <motion.div
                              key={view}
                              initial={{ rotateX: 10, opacity: 0, y: 30 }}
                              animate={{ rotateX: 0, opacity: 1, y: 0 }}
                              exit={{ rotateX: -10, opacity: 0, y: -30 }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                              className="w-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
                          >
                               {/* Browser Toolbar */}
                               <div className="bg-slate-50 border-b border-slate-200 p-3 flex items-center gap-4">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                    </div>
                                    <div className="flex-1 bg-white border border-slate-200 h-8 rounded px-3 flex items-center text-xs text-slate-400 font-mono justify-between shadow-inner">
                                        <span>ads.tiktok.com/signup</span>
                                        <RefreshCw size={12} className="opacity-50" />
                                    </div>
                               </div>

                               {/* Page Content */}
                               <div className="p-8 md:p-10 relative">
                                    {/* Badge Overlay */}
                                    <div className={`absolute top-0 right-0 m-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm ${view === 'before' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'}`}>
                                        {view === 'before' ? <XCircle size={14}/> : <CheckCircle2 size={14}/>}
                                        {view === 'before' ? 'Before Update' : 'After Update'}
                                    </div>

                                    <div className="flex items-center gap-2 mb-8">
                                         <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white font-bold text-xs">TT</div>
                                         <div className="font-bold text-xl text-slate-900">TikTok for Business</div>
                                    </div>
                                    
                                    <div className="space-y-6 max-w-sm mx-auto">
                                        <div>
                                            <div className="flex justify-between items-baseline mb-1">
                                                <label className="block text-xs font-bold text-slate-500">
                                                    メールアドレス
                                                </label>
                                                {view === 'after' && <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1 rounded">Language Detected</span>}
                                            </div>
                                            <div className={`w-full p-3 border rounded-md text-sm flex justify-between items-center ${view === 'before' ? 'border-red-300 bg-red-50 text-red-900' : 'border-red-300 bg-red-50 text-red-900'}`}>
                                                <span>invalid-email@</span>
                                                <AlertCircle size={16} className="text-red-500" />
                                            </div>
                                            {/* Error Message Animation */}
                                            <motion.div 
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="mt-2 flex items-start gap-2 text-xs text-red-600 font-medium bg-red-50 p-2 rounded border border-red-100"
                                            >
                                                <div className="mt-0.5"><AlertCircle size={12} /></div>
                                                {view === 'before' ? (
                                                    <div>
                                                        <span className="block font-bold">Error: Invalid email format</span>
                                                        <span className="block text-[10px] opacity-75 mt-0.5">Critical friction: English error on Japanese page.</span>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <span className="block font-bold">エラー: メールアドレスの形式が無効です</span>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 mb-1">
                                                パスワード
                                            </label>
                                            <div className={`w-full p-3 border rounded-md text-sm flex justify-between items-center ${view === 'before' ? 'border-red-300 bg-red-50 text-red-900' : 'border-red-300 bg-red-50 text-red-900'}`}>
                                                <span>******</span>
                                                <AlertCircle size={16} className="text-red-500" />
                                            </div>
                                             {/* Error Message Animation */}
                                            <motion.div 
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="mt-2 flex items-start gap-2 text-xs text-red-600 font-medium bg-red-50 p-2 rounded border border-red-100"
                                            >
                                                <div className="mt-0.5"><AlertCircle size={12} /></div>
                                                {view === 'before' ? (
                                                    <div>
                                                        <span className="block font-bold leading-tight">Error: Password must be 6-20 characters and contains at least one number, letter and special character</span>
                                                        <span className="block text-[10px] opacity-75 mt-1">Critical friction: English error on Japanese page.</span>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <span className="block font-bold leading-tight">エラー: パスワードは6〜20文字で、数字、英字、特殊文字を少なくとも1つずつ含めてください</span>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </div>

                                        <div className="w-full bg-slate-900 text-white rounded-md py-3 text-center text-sm font-bold opacity-50 cursor-not-allowed shadow-sm">
                                             登録する
                                        </div>
                                    </div>
                               </div>
                          </motion.div>
                      </AnimatePresence>
                 </div>
                 
                 {/* Playback Controls / Indicator */}
                 <div className="mt-8 flex items-center gap-6 z-10 bg-white px-6 py-2 rounded-full shadow-sm border border-slate-200">
                     <button 
                        onClick={() => setView('before')} 
                        className={`text-xs font-bold transition-all flex items-center gap-2 ${view === 'before' ? 'text-red-600' : 'text-slate-400 hover:text-slate-600'}`}
                     >
                        Legacy Experience
                     </button>

                     <div className="flex gap-1.5">
                        <motion.div 
                            animate={{ scale: view === 'before' ? 1.2 : 1, opacity: view === 'before' ? 1 : 0.3 }}
                            className="w-2 h-2 rounded-full bg-slate-900" 
                        />
                        <motion.div 
                            animate={{ scale: view === 'after' ? 1.2 : 1, opacity: view === 'after' ? 1 : 0.3 }}
                            className="w-2 h-2 rounded-full bg-slate-900" 
                        />
                     </div>

                     <button 
                        onClick={() => setView('after')} 
                        className={`text-xs font-bold transition-all flex items-center gap-2 ${view === 'after' ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'}`}
                     >
                        Localized Experience
                     </button>
                 </div>
                 
                 {!isPaused && (
                     <div className="absolute bottom-6 right-6 flex items-center gap-2 text-[10px] text-slate-400 font-medium uppercase tracking-widest animate-pulse bg-white/50 px-2 py-1 rounded-md backdrop-blur-sm">
                         <MousePointerClick size={12} /> Hover to pause
                     </div>
                 )}
            </div>

            {/* 3. Stats Grid - Below the Visual */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white">
                <div className="p-8 text-center group hover:bg-slate-50 transition-colors">
                    <div className="mb-4 flex justify-center">
                        <div className="p-3 rounded-full bg-emerald-50 text-emerald-500 group-hover:scale-110 transition-transform">
                            <TrendingUp size={32} />
                        </div>
                    </div>
                    <div className="text-4xl font-black text-slate-900 mb-1">+142.33%</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Registration Rate</div>
                    <p className="text-xs text-slate-400 mt-2">In non-native English markets</p>
                </div>

                <div className="p-8 text-center group hover:bg-slate-50 transition-colors">
                    <div className="mb-4 flex justify-center">
                         <div className="p-3 rounded-full bg-blue-50 text-blue-500 group-hover:scale-110 transition-transform">
                            <Users size={32} />
                        </div>
                    </div>
                    <div className="text-4xl font-black text-slate-900 mb-1">+139,845</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Additional Signups</div>
                    <p className="text-xs text-slate-400 mt-2">Contributed +15% total lift</p>
                </div>

                <div className="p-8 flex flex-col justify-center bg-slate-900 text-white">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">Yield Uplift by Market</h4>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                            <div className="flex items-center gap-2"><span className="text-amber-400 font-bold">BR</span> Brazil</div>
                            <span className="text-xl font-bold text-emerald-400">+261.34%</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                            <div className="flex items-center gap-2"><span className="text-blue-400 font-bold">ID</span> Indonesia</div>
                            <span className="text-xl font-bold text-emerald-400">+99.52%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2"><span className="text-red-400 font-bold">DE</span> Germany</div>
                            <span className="text-xl font-bold text-emerald-400">+99.07%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 5. TASK FORCE STRUCTURE - SIMPLIFIED VISUAL
export const TaskForceStructureDiagram: React.FC = () => {
    // Replaced with a more abstract visual in the Resolution diagram
    return null; 
}

// --- NEW DIAGRAM: BUSINESS ARCHITECTURE ---
export const BusinessArchitectureDiagram: React.FC = () => {
  const pillars = [
    {
      title: "Product Market Fit",
      action: "Cultural Adaptation",
      explanation: "Localization adapts the core product value proposition to local contexts, ensuring the platform feels native, relevant, and trustworthy—essential for achieving true product-market fit outside the US.",
      icon: <Puzzle size={20} />,
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700"
    },
    {
      title: "Pipeline Scale",
      action: "Market Unlock",
      explanation: "With 80% of advertisers in non-English markets, localization is the primary lever for scaling user acquisition and revenue. It transforms dormant traffic into active, revenue-generating pipelines.",
      icon: <TrendingUp size={20} />,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      title: "Customer Experience",
      action: "Friction Reduction",
      explanation: "Language barriers create high-friction user journeys. Localized interfaces reduce cognitive load, minimize support tickets, and drastically improve satisfaction and retention rates.",
      icon: <Heart size={20} />,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700"
    }
  ];

  return (
    <div className="w-full mt-16">
      <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Localization aligns with SMB Business Architecture</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
           <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${p.color}`}></div>
           <div className="p-8 flex flex-col h-full">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                 {p.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{p.title}</h3>
              
              <div className="mb-6 flex-grow">
                 <p className="text-slate-600 text-sm leading-relaxed">
                   {p.explanation}
                 </p>
              </div>

              <div className={`flex items-center justify-center font-bold text-lg p-3 rounded-lg mt-auto ${p.bgColor} ${p.textColor}`}>
                  {p.action}
              </div>
           </div>
        </div>
      ))}
      </div>
    </div>
  )
}

// --- NEW DIAGRAM: GROWTH IMPERATIVE (Updated based on "Winning the Torso and Tail" slide) ---
export const GrowthImperativeDiagram: React.FC = () => {
  return (
    <div className="mt-4 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden relative">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-40 pointer-events-none"></div>
       
       <div className="p-8 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-3xl font-bold text-slate-900 text-center">Winning the 'Torso and Tail' Requires Localization</h3>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* LEFT: THE GOAL */}
          <div className="p-10 border-r border-slate-100 relative z-10">
              <div className="flex items-center gap-2 mb-8">
                  <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                  <h4 className="text-xl font-bold text-slate-800">The Goal: <span className="text-slate-500 font-normal">Company Objective 50/50</span></h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* SMB Revenue */}
                  <div className="flex flex-col items-center">
                      <div className="relative w-40 h-40 mb-4">
                          {/* Background Ring */}
                          <svg className="w-full h-full transform -rotate-90">
                              <circle cx="50%" cy="50%" r="70" fill="transparent" stroke="#E2E8F0" strokeWidth="12" />
                              {/* Current ~29% */}
                              <circle cx="50%" cy="50%" r="70" fill="transparent" stroke="#94A3B8" strokeWidth="12" strokeDasharray="440" strokeDashoffset={440 - (440 * 0.29)} strokeLinecap="round" className="opacity-30"/>
                              {/* Target ~50% */}
                              <motion.circle 
                                  cx="50%" cy="50%" r="70" fill="transparent" stroke="#10B981" strokeWidth="12" strokeDasharray="440" 
                                  initial={{ strokeDashoffset: 440 }}
                                  whileInView={{ strokeDashoffset: 440 - (440 * 0.50) }}
                                  transition={{ duration: 1.5, ease: "easeOut" }}
                                  strokeLinecap="round"
                              />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center flex-col">
                              <Target size={32} className="text-emerald-500 mb-1" />
                              <span className="text-2xl font-bold text-slate-900">~50%</span>
                          </div>
                      </div>
                      <h5 className="font-bold text-slate-900 text-lg mb-1">SMB Revenue</h5>
                      <p className="text-xs text-slate-500 text-center px-4">Target: ~50% of Total Revenue</p>
                  </div>

                  {/* Active Advertisers */}
                  <div className="flex flex-col items-center">
                      <div className="relative w-40 h-40 mb-4">
                           <svg className="w-full h-full transform -rotate-90">
                              <circle cx="50%" cy="50%" r="70" fill="transparent" stroke="#E2E8F0" strokeWidth="12" />
                              <motion.circle 
                                  cx="50%" cy="50%" r="70" fill="transparent" stroke="#3B82F6" strokeWidth="12" strokeDasharray="440" 
                                  initial={{ strokeDashoffset: 440 }}
                                  whileInView={{ strokeDashoffset: 440 - (440 * 0.50) }}
                                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                  strokeLinecap="round"
                              />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center flex-col">
                              <Users size={32} className="text-blue-500 mb-1" />
                              <span className="text-2xl font-bold text-slate-900">~50%</span>
                          </div>
                      </div>
                      <h5 className="font-bold text-slate-900 text-lg mb-1">Active Advertisers</h5>
                      <p className="text-xs text-slate-500 text-center px-4">Target: ~50% Share against Meta</p>
                  </div>
              </div>
          </div>

          {/* RIGHT: THE REALITY */}
          <div className="p-10 bg-slate-900 text-white relative z-10 overflow-hidden">
               {/* Decorative glow */}
               <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
               
               <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-1 h-6 bg-cyan-400 rounded-full"></div>
                        <h4 className="text-xl font-bold text-white">The Reality: <span className="text-slate-400 font-normal">Addressable Market</span></h4>
                    </div>

                    <div className="flex flex-col gap-8">
                        {/* Non-English Stat */}
                        <div className="flex items-center justify-center gap-6">
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="50%" cy="50%" r="58" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                                    <motion.circle 
                                        cx="50%" cy="50%" r="58" fill="transparent" stroke="#22d3ee" strokeWidth="8" strokeDasharray="365" 
                                        initial={{ strokeDashoffset: 365 }}
                                        whileInView={{ strokeDashoffset: 365 - (365 * 0.8385) }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xl font-bold text-cyan-400">83.85%</span>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-2xl font-bold text-white mb-1">Non-English Speaking</h5>
                                <p className="text-cyan-200/80 text-sm">(46M Accounts)</p>
                            </div>
                        </div>

                        {/* Bar Chart Comparison */}
                        <div className="mt-4 bg-white/5 rounded-xl p-6 border border-white/10">
                            <h5 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-6 text-center">Top 20 Countries Ads Revenue Shift</h5>
                            <div className="flex justify-center items-end gap-12 h-40">
                                {/* 2024 Column */}
                                <div className="flex flex-col items-center gap-2 w-20">
                                    <div className="w-full h-32 flex flex-col rounded-md overflow-hidden text-[10px] font-bold text-center">
                                        <div className="bg-slate-300 h-[55.6%] flex items-center justify-center text-slate-600">55.6%<br/>Eng</div>
                                        <div className="bg-cyan-600 h-[44.4%] flex items-center justify-center text-white">44.4%<br/>Non-Eng</div>
                                    </div>
                                    <span className="text-sm font-bold text-slate-400">2024</span>
                                </div>

                                {/* Arrow */}
                                <div className="mb-10 text-cyan-400 flex flex-col items-center">
                                    <TrendingUp size={24} className="mb-1" />
                                    <span className="text-xs font-bold">+7.95% Shift</span>
                                </div>

                                {/* 2025 Column */}
                                <div className="flex flex-col items-center gap-2 w-20">
                                    <div className="w-full h-32 flex flex-col rounded-md overflow-hidden text-[10px] font-bold text-center">
                                        <div className="bg-slate-300 h-[47.7%] flex items-center justify-center text-slate-600">47.7%<br/>Eng</div>
                                        <motion.div 
                                            initial={{ height: "44.4%" }}
                                            whileInView={{ height: "52.3%" }}
                                            transition={{ duration: 1 }}
                                            className="bg-cyan-400 h-[52.3%] flex items-center justify-center text-slate-900"
                                        >
                                            52.3%<br/>Non-Eng
                                        </motion.div>
                                    </div>
                                    <span className="text-sm font-bold text-slate-400">2025</span>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
          </div>
       </div>
    </div>
  );
};

// --- NEW DIAGRAM: INSIGHT GAP FLOW ---
export const BottleneckDiagram: React.FC = () => {
    return (
        <div className="w-full mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Desired State</h3>
            {/* Acceleration Flow */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                
                <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                            <TrendingUp size={16} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 leading-tight mt-1">Revenue Acceleration</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        Directly converting friction into global growth by systematically tracking and resolving language-specific issues.
                    </p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0 mt-4 md:mt-0">
                    {[1, 2, 3, 4].map(i => (
                        <motion.div 
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3], x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                            className="w-8 h-1 bg-emerald-400 rounded-full"
                        />
                    ))}
                    <Sparkles className="text-emerald-500 ml-2" size={20} />
                </div>
            </motion.div>
        </div>
    );
};

// --- NEW DIAGRAM: RESOLUTION WORKFLOW ---
export const ResolutionWorkflowDiagram: React.FC = () => {
    const steps = [
        { 
            id: 1, 
            title: "Data Instrumentation", 
            icon: <Database size={24} />, 
            desc: "Track language properties to move from 'Country' to 'Linguistic' data.",
            color: "bg-blue-500",
            light: "bg-blue-50 text-blue-600 border-blue-100"
        },
        { 
            id: 2, 
            title: "Root-Cause & Impact", 
            icon: <Layers size={24} />, 
            desc: "Group issues and calculate Revenue-at-Risk for an ROI-based 'Hit List'.",
            color: "bg-indigo-500",
            light: "bg-indigo-50 text-indigo-600 border-indigo-100"
        },
        { 
            id: 3, 
            title: "Dedicated Remediation", 
            icon: <Users size={24} />, 
            desc: "PMs pull the 'Hit List' into the roadmap; R&D uses 10% bandwidth for fixes.",
            color: "bg-purple-500",
            light: "bg-purple-50 text-purple-600 border-purple-100"
        },
        { 
            id: 4, 
            title: "Quality Monitoring", 
            icon: <RefreshCw size={24} />, 
            desc: "Automated dashboards monitor 'Conversion Lift' to justify ongoing resources.",
            color: "bg-emerald-500",
            light: "bg-emerald-50 text-emerald-600 border-emerald-100"
        }
    ];

    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {steps.map((step, i) => (
                <div key={i} className="relative flex flex-row md:flex-col items-start md:items-center gap-4 flex-1">
                    {/* Connecting Line - Mobile (Vertical) */}
                    {i !== steps.length - 1 && (
                        <div className="md:hidden absolute left-[30px] top-16 bottom-[-16px] w-[2px] bg-slate-100"></div>
                    )}
                    
                    {/* Connecting Line - Desktop (Horizontal) */}
                    {i !== steps.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-[50%] right-[-50%] w-full h-[2px] bg-slate-100 z-0"></div>
                    )}
                    
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 z-10 shadow-sm border-4 border-white ${step.color} text-white`}>
                        {step.icon}
                    </div>
                    
                    <div className={`w-full flex-1 p-5 rounded-xl border ${step.light} shadow-sm hover:shadow-md transition-all cursor-default flex flex-col`}>
                        <div className="flex justify-between items-start md:items-center mb-3 flex-col lg:flex-row gap-2">
                            <h4 className="font-bold text-base md:text-lg">{step.title}</h4>
                            <span className="text-xs font-bold uppercase opacity-60">Step 0{step.id}</span>
                        </div>
                        <p className="text-sm md:text-base opacity-80 leading-relaxed">{step.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};


// 6. CORE FOCUS GRID (Team Functions)
export const CoreFocusGrid: React.FC = () => {
  const areas = [
    { 
      title: "Team Lead", 
      lead: "Zhao Long", 
      icon: <Target size={24} />,
      color: "text-brand-accent bg-brand-accent/10 border-brand-accent/20"
    },
    { 
      title: "Vendor Mgmt", 
      lead: "Emily Wang", 
      icon: <Users size={24} />,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    { 
      title: "Quality Mgmt", 
      lead: "Huiting Chuang", 
      icon: <ShieldCheck size={24} />,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    { 
      title: "i18n Tech", 
      lead: "Jen Li", 
      icon: <Globe size={24} />,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    },
    { 
      title: "Automation", 
      lead: "HOSS", 
      icon: <Zap size={24} />,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    { 
      title: "Evangelization", 
      lead: "Siyuan Tao", 
      icon: <MessageSquare size={24} />,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {areas.map((area, i) => (
        <motion.div 
          key={i}
          className={`h-32 p-4 rounded-xl border ${area.color} backdrop-blur-sm flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all hover:-translate-y-1 cursor-default`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          <div className="mb-2">{area.icon}</div>
          <h3 className="font-bold text-white text-sm leading-tight mb-1">{area.title}</h3>
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">{area.lead}</div>
        </motion.div>
      ))}
    </div>
  );
};

// 7. SCOPE DIAGRAM (Platforms & Languages)
export const ScopeDiagram: React.FC = () => {
  const languages = [
    { product: "TikTok", count: 56 },
    { product: "TTAM", count: 19 },
    { product: "TikTok One", count: 19 },
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: Platforms Summary */}
        <div className="flex-1 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
              <Layers size={24} />
            </div>
            <h4 className="text-3xl font-bold text-white">16+ Platforms</h4>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            We provide end-to-end localization for the entire GMPT ecosystem, including:
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {["Ads Manager", "Business Center", "Creative Center", "Symphony", "Seller Center"].map((p, i) => (
              <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-300 font-medium">
                {p}
              </span>
            ))}
            <span className="px-3 py-1 text-[10px] text-slate-500 font-medium italic">& more</span>
          </div>
        </div>

        {/* Right: Languages Stats */}
        <div className="flex gap-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12 w-full lg:w-auto justify-center">
          {languages.map((l, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl font-black text-white">{l.count}</span>
              <span className="text-[10px] text-brand-accent font-bold uppercase tracking-widest">{l.product}</span>
              <span className="text-[9px] text-slate-500 uppercase mt-1">Languages</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 9. ORG CHART DIAGRAM
export const OrgChartDiagram: React.FC = () => {
  return (
    <div className="w-full py-8">
      <div className="flex flex-col items-center gap-6">
        {/* Top Level */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-slate-800 border border-white/10 rounded-xl p-4 text-center shadow-lg backdrop-blur-sm"
        >
          <h4 className="text-white font-bold text-lg uppercase tracking-widest">GMPT DESIGN TEAM</h4>
        </motion.div>

        {/* Connector Line */}
        <div className="w-px h-8 bg-white/20"></div>

        {/* Vertical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden md:block absolute -top-4 left-1/6 right-1/6 h-px bg-white/20"></div>
          
          {[
            { title: "Ads Platform + Tooling", color: "bg-purple-500/10 border-purple-500/20 text-purple-200" },
            { title: "Creative Experiences", color: "bg-purple-500/10 border-purple-500/20 text-purple-200" },
            { title: "Efficiency Tools", color: "bg-purple-500/10 border-purple-500/20 text-purple-200" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`p-4 rounded-xl border ${item.color} text-center font-bold text-sm shadow-md flex items-center justify-center h-20 backdrop-blur-sm`}
            >
              {item.title}
            </motion.div>
          ))}
        </div>

        {/* Connector Line */}
        <div className="w-px h-8 bg-white/20"></div>

        {/* Horizontal Support Layers - Parallel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* Content Design */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-teal-600/20 border border-teal-500/30 rounded-xl p-6 text-center shadow-md backdrop-blur-sm flex flex-col items-center justify-center"
          >
            <h4 className="text-teal-400 font-bold text-xl">Content Design</h4>
            <span className="text-[10px] text-teal-500/60 uppercase tracking-widest mt-1">Horizontal Support</span>
          </motion.div>

          {/* Localization Team - STANDS OUT */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-brand-accent border-2 border-white/30 rounded-xl p-6 text-center shadow-2xl relative overflow-hidden group flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <h4 className="text-white font-black text-2xl tracking-tight flex items-center justify-center gap-3">
              <Globe size={24} className="animate-pulse" />
              Localization Team
            </h4>
            <span className="text-[10px] text-white/70 uppercase tracking-widest mt-1 font-bold">Horizontal Support</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
