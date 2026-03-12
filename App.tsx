
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  IndustryStatsDiagram, 
  RiskMitigationDiagram, 
  CaseStudyLiftDiagram,
  CaseStudyDetailed,
  CoreFocusGrid, 
  ScopeDiagram,
  BusinessArchitectureDiagram,
  BottleneckDiagram,
  ResolutionWorkflowDiagram,
  GrowthImperativeDiagram,
  OrgChartDiagram
} from './components/Diagrams';
import { MarketingFunnelScene } from './components/FunnelScene';
import { ArrowRight, Menu, X, Users, Globe2, AlertTriangle, Target, Briefcase, ChevronRight, Sparkles, BookOpen, Lock, Zap, TrendingUp, AlertCircle, ShieldCheck } from 'lucide-react';

const SectionHeader = ({ subtitle, title, dark = false }: { subtitle: string, title: string, dark?: boolean }) => (
  <div className="mb-12">
    <div className="flex items-center gap-2 mb-3">
      <div className={`w-8 h-[2px] ${dark ? 'bg-brand-accent' : 'bg-brand-accent'}`}></div>
      <span className={`text-sm font-bold tracking-widest uppercase ${dark ? 'text-slate-400' : 'text-brand-secondary'}`}>{subtitle}</span>
    </div>
    <h2 className={`text-3xl md:text-5xl font-bold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-light text-slate-800 font-sans selection:bg-brand-accent selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md border-slate-200 py-3' : 'bg-transparent border-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`w-8 h-8 rounded-md flex items-center justify-center font-bold text-lg transition-colors ${scrolled ? 'bg-brand-accent text-white' : 'bg-white text-brand-dark'}`}>G</div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              GMPT Localization
            </span>
          </div>
          
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}>
            <a href="#landscape" onClick={scrollToSection('landscape')} className="hover:text-brand-accent transition-colors">Landscape</a>
            <a href="#context" onClick={scrollToSection('context')} className="hover:text-brand-accent transition-colors">The Imperative</a>
            <a href="#alignment" onClick={scrollToSection('alignment')} className="hover:text-brand-accent transition-colors">Alignment</a>
            <a href="#proof" onClick={scrollToSection('proof')} className="hover:text-brand-accent transition-colors">Proof of Value</a>
            <a href="#bottleneck" onClick={scrollToSection('bottleneck')} className="hover:text-brand-accent transition-colors">Insight Gap</a>
            <a href="#solution" onClick={scrollToSection('solution')} className="hover:text-brand-accent transition-colors">Proposal</a>
          </div>

          <button className={`md:hidden p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-xl font-bold animate-fade-in text-slate-900">
            <a href="#landscape" onClick={scrollToSection('landscape')}>Landscape</a>
            <a href="#context" onClick={scrollToSection('context')}>The Imperative</a>
            <a href="#alignment" onClick={scrollToSection('alignment')}>Strategic Alignment</a>
            <a href="#proof" onClick={scrollToSection('proof')}>Proof of Value</a>
            <a href="#bottleneck" onClick={scrollToSection('bottleneck')}>Insight Gap</a>
            <a href="#solution" onClick={scrollToSection('solution')}>Proposal</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-brand-dark">
        {/* Dynamic 3D Background */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <MarketingFunnelScene />
        </div>
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-0"></div>

        <div className="relative z-10 container mx-auto px-6 pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-white/20 text-white/80 text-xs font-bold tracking-widest uppercase rounded-full backdrop-blur-md bg-white/5">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              Strategic Brief
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-white tracking-tight drop-shadow-lg">
              Optimizing Global <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">User Experience</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10 border-l-2 border-brand-accent pl-6">
              Capturing significant global opportunities by resolving the geographic insight gap.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
               <a href="#context" onClick={scrollToSection('context')} className="px-8 py-4 bg-brand-accent hover:bg-blue-600 text-white font-bold rounded-md transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2">
                  View Proposal <ArrowRight size={18} />
               </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Section 2: GMPT Landscape (Specific Situation) */}
        <section id="landscape" className="py-24 bg-brand-dark text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader subtitle="Situation" title="The GMPT Localization Landscape" dark={true} />
                
                {/* Org Chart Section */}
                <div className="mb-20">
                   <h4 className="text-white font-bold text-xl mb-8 flex items-center gap-2">
                      <Users size={24} className="text-brand-accent" /> How we support GMPT
                   </h4>
                   <OrgChartDiagram />
                </div>

                {/* Simplified Team Onepager Overview */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-10 mb-20">
                   
                   {/* The TEAM - Core Focus Area / LPM Functions */}
                   <div className="mb-12">
                      <h4 className="text-white font-bold text-2xl mb-8 flex items-center gap-2">
                         <Target size={28} className="text-brand-accent" /> The TEAM - Core Focus Area
                      </h4>
                      <CoreFocusGrid />
                   </div>

                    {/* Operational Scope */}
                    <div>
                       <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                          <Briefcase size={24} className="text-brand-accent" /> Operational Scope
                       </h4>
                       <div className="w-full">
                          <ScopeDiagram />
                       </div>
                    </div>
                </div>

                {/* Removed The Gap Section as requested */}
            </div>
        </section>

        {/* Section 1: The B2B Context (Why it matters) */}
        <section id="context" className="py-24 bg-white border-b border-slate-100">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="container mx-auto px-6"
          >
             <SectionHeader subtitle="Market Reality" title="Localization Drives Revenue" />
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="p-6 bg-slate-50 border-l-4 border-slate-900 rounded-r-lg mb-8 transition-shadow hover:shadow-md"
                    >
                       <p className="text-xl font-medium text-slate-800 italic">
                         "It's not just a feature. It's the primary driver of trust and willingness to pay."
                       </p>
                       <p className="text-sm text-slate-500 mt-2 font-bold uppercase tracking-wider">— CSA Research, B2B Buyer Behavior</p>
                    </motion.div>
                    
                    <div>
                       <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 tracking-widest">
                          Removes psychological barriers
                       </h3>
                       <RiskMitigationDiagram />
                    </div>
                 </div>
                 
                 <div className="bg-slate-50 rounded-2xl p-10 border border-slate-100 shadow-sm flex items-center justify-center">
                    <IndustryStatsDiagram />
                 </div>
             </div>
          </motion.div>
        </section>

        {/* Section 1.5: Strategic Alignment */}
        <section id="alignment" className="py-20 bg-slate-50 border-b border-slate-200">
            <div className="container mx-auto px-6">
                <SectionHeader subtitle="Strategic Alignment" title="GMPT Localization enables SMB Growth" />
                <div className="mb-16">
                   <GrowthImperativeDiagram />
                </div>
                <BusinessArchitectureDiagram />
                
                <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl flex-shrink-0">
                        <ShieldCheck size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Critical Role in Risk Mitigation</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            GMPT Localization team has helped SMB expand to 21 markets in 2025 without culturally-driven PR crises, which shows our team plays a critical role in risk mitigation.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 3.5: Proof of Value (Case Study) */}
        <section id="proof" className="py-24 bg-white border-y border-slate-200">
             <div className="container mx-auto px-6">
                 <SectionHeader subtitle="Proof of Value" title="Case Study: Reg Page Optimization" />
                 <CaseStudyDetailed />
             </div>
        </section>

        {/* Section 3: The Complication */}
        <section id="bottleneck" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <SectionHeader subtitle="Complication" title="The Insight Gap" />
                
                <div className="w-full">
                   <div className="mb-16">
                      <div className="flex flex-col gap-6 mb-12">
                         {/* Point 1 */}
                         <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">1</div>
                                <h3 className="text-lg font-bold text-slate-900 leading-tight">Lack of language specific data</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm">
                               Currently, our UX insights are limited by geographic silos. Because we use "Country" as a proxy for "Language," we are blind to the specific linguistic and cultural frictions that cause users to drop off. We need granular locale tracking to systematically optimize the user journey.
                            </p>
                         </div>

                         {/* Point 2 */}
                         <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">2</div>
                                <h3 className="text-lg font-bold text-slate-900 leading-tight">Limited access to proxy data</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm">
                               Even when relying on proxy metrics, data access remains restricted or fragmented across different systems, making it difficult to form a complete picture of the user experience and identify key areas for improvement.
                            </p>
                         </div>
                         
                         {/* Point 3 */}
                         <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">3</div>
                                <h3 className="text-lg font-bold text-slate-900 leading-tight">Viewed as a supporting team, lack of attribution model to secure RD resources after issues are found</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm">
                               Even when critical localization issues are identified, the lack of a clear attribution model makes it difficult to quantify the revenue impact. As a result, localization is often viewed as a supporting function rather than a growth driver, making it hard to secure the necessary R&D resources for timely fixes.
                            </p>
                         </div>
                      </div>
                      <BottleneckDiagram />
                   </div>
                </div>
            </div>
        </section>

        {/* Section 4: Resolution */}
        <section id="solution" className="py-24 bg-slate-50">
             <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                     <SectionHeader subtitle="Resolution" title="Proposal: Joint Task Force" />
                     <p className="text-xl text-slate-600">
                        Systematically closing the insight gap by establishing a dedicated, cross-functional collaboration workgroup.
                     </p>
                </div>

                <div className="max-w-7xl w-full mx-auto flex flex-col gap-8">
                    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm w-full">
                        <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">Operational Workflow</h3>
                        <ResolutionWorkflowDiagram />
                    </div>
                    
                    <div className="w-full">
                         <div className="bg-blue-50 border border-blue-100 rounded-xl p-8">
                             <h3 className="text-2xl font-bold text-slate-900 mb-4">The Proposal</h3>
                             <p className="text-slate-700 leading-relaxed text-lg">
                                 To eliminate the "Country" proxy blind spot, we propose a 90-day cross-functional Tiger Team to implement granular language telemetry and a dedicated remediation pipeline for identified linguistic barriers. By securing a 10% bandwidth allocation from R&D, Data Science, and Product Management, we will transform invisible friction into a "Global Health Dashboard" that quantifies revenue-at-risk. This pilot empowers Localization Project Managers to orchestrate the end-to-end cycle of detection and resolution, ensuring that technical fixes are prioritized by business impact and our product drives global conversion through true cultural relevance.
                             </p>
                         </div>
                    </div>
                </div>
             </div>
        </section>

      </main>

      <footer className="bg-brand-dark text-slate-400 py-16 border-t border-slate-800">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-white font-bold text-2xl mb-4 md:mb-0 flex items-center gap-2">
                    <span className="w-6 h-6 bg-brand-accent rounded-sm inline-block"></span> GMPT
                </div>
                <div className="text-sm">
                    Global Marketing Product Team Localization Strategy
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
