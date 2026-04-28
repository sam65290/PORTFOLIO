"use client";

import React, { useState, useEffect } from 'react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  ArrowUpIcon, 
  MenuIcon, 
  XIcon 
} from '../components/Icons';

const projects = [
  { name: "PERIDOT", image: "/Peridoticon.png" },
  { name: "HELLO DOT", image: "/HelloDot.png" },
  { name: "GTA 5 Enhanced", image: "/GTA5.png" },
  { name: "Red Dead Redemption", image: "/RedDeadRedemption.png" },
  { name: "Farming Simulator", image: "/FarmingSimulatorVR.png" },
  { name: "Squid Game", image: "/SquidGameUnleashed.png" },
  { name: "FIFA RIVALS", image: "/FifaRivalsIcon.png" }
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // QA Fix: Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isModalOpen]);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-white selection:text-black">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div onClick={scrollToTop} className="text-xl font-serif italic tracking-tighter cursor-pointer">SD</div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>

          <ul className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
            <li><a href="#experience" className="hover:text-white cursor-pointer transition-colors">Work</a></li>
            <li><a href="#about" className="hover:text-white cursor-pointer transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-white cursor-pointer transition-colors">Contact</a></li>
          </ul>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-b border-white/5 px-6 py-8 flex flex-col gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>Work</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-32">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Open to work</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-medium leading-[1.1] tracking-tight mb-8">
            Hello, I'm <span className="inline-flex items-center mx-2 italic">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl overflow-hidden relative">
                <img
                  src="/SD.png"
                  alt="Sameer Dudekula"
                  className="w-full h-full object-cover"
                  style={{ imageRendering: 'smooth' }}
                />
              </div>
            </span>
            Sameer Dudekula <br />
            <span className="text-gray-500 italic">Quality Test Engineer</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Breaking code to build better games. I bridge the gap between complex dev builds and seamless player experiences on 
            <span className="text-white"> Mobile, PC, and XR.</span>
          </p>
          <div className="flex gap-4">
            <a 
              href="/Sameer_Dudekula_QA_Tester.pdf" 
              download="Sameer_Dudekula_QA_Tester.pdf"
              className="bg-white text-black px-8 py-4 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all active:scale-95 inline-block text-center"
            >
              Download Resume
            </a>
            <a href="#contact" className="border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/5 transition-all text-center flex items-center">
              Contact Me
            </a>
          </div>
        </section>

        

        {/* --- ABOUT --- */}
        <section id="about" className="py-32 grid md:grid-cols-12 gap-8 border-t border-white/5 scroll-mt-24">
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">Something About Me</p>
          </div>
          <div className="md:col-span-9 space-y-8 text-gray-400 text-lg leading-relaxed">
            <p>
              I am a <span className="text-white">Quality Test Engineer</span> who bridges the gap between complex development builds and seamless user experiences. With a strong understanding of the <span className="text-white">Software Testing Life Cycle (STLC)</span>, I specialize in identifying critical defects, analyzing <span className="text-white">root causes</span>, and ensuring overall product quality.
            </p>
            <p>
              Throughout my career, I have translated intricate requirements into well-structured <span className="text-white">test plans and test cases</span>, while collaborating closely with developers to resolve issues efficiently. I bring a detail-oriented and <span className="text-white">performance-focused approach</span> to testing, with an emphasis on delivering stable, reliable, and high-performing applications.
            </p>
            <p>
              I am passionate about continuous improvement, enhancing testing processes, and ensuring a smooth <span className="text-white">end-user experience</span> through thorough and effective quality assurance practices.
            </p>
          </div>
        </section>

        {/* --- ACHIEVEMENTS --- */}
        <section className="py-20 grid md:grid-cols-12 gap-8 border-t border-white/5">
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">Things i did</p>
          </div>
          <div className="md:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div><h3 className="text-2xl md:text-3xl font-bold">6+</h3><p className="text-[10px] text-gray-500 uppercase mt-2 font-bold tracking-widest">Major Projects</p></div>
            <div><h3 className="text-2xl md:text-3xl font-bold">600+</h3><p className="text-[10px] text-gray-500 uppercase mt-2 font-bold tracking-widest">Bugs Reported</p></div>
            <div><h3 className="text-2xl md:text-3xl font-bold">400+</h3><p className="text-[10px] text-gray-500 uppercase mt-2 font-bold tracking-widest">Tests Executed</p></div>
            <div><h3 className="text-2xl md:text-3xl font-bold">2+ Yrs</h3><p className="text-[10px] text-gray-500 uppercase mt-2 font-bold tracking-widest">Experience</p></div>
          </div>
        </section>

        {/* --- SKILLS & EXPERTISE --- */}
        <section className="py-20 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-12">Things i know</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-[0.15em]">Platforms</h3>
              </div>
              <div className="grid grid-cols-1 gap-y-3 text-sm font-medium text-gray-500">
                <span>PC</span>
                <span>Meta Quest (VR / MR)</span>
                <span>Android / iOS</span>
                <span>Nintendo Switch</span>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-[0.15em]">Tools & Software</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-3 text-sm font-medium text-gray-500">
                <span>JIRA / Confluence</span>
                <span>TestRail / Mantis</span>
                <span>ADB / Charles Proxy</span>
                <span>Gamebench / Apptim</span>
                <span>CapFrameX / HWinfo</span>
                <span>Beamable</span>
                <span>Meta Quest Developer Hub</span>
                <span>Postman</span>  
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-[0.15em]">Testing Expertise</h3>
              </div>
              <div className="grid grid-cols-1 gap-y-3 text-sm font-medium text-gray-500">
                <span>Functional / Regression Testing</span>
                <span>Smoke / Sanity Testing</span>
                <span>Black & White Box Testing</span>
                <span>Network testing / Performance Profiling</span>
                <span>A/B Testing</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section id="experience" className="py-32 border-t border-white/5 scroll-mt-24">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-20">What i did till now</p>
          <div className="space-y-24 border-l border-white/10 ml-4 pl-8 relative">
            <div className="relative">
              <div className="absolute -left-10.25 top-0 w-4.25 h-4.25 bg-white rounded-full border-4 border-[#0a0a0a]" />
              <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Oct 2023 - Present</span>
              <h3 className="text-2xl font-bold mt-4 mb-4">QA Test Engineer at <span className="bg-white/5 px-3 py-1 rounded text-lg text-white">Side – Hyderabad</span></h3>
              <ul className="text-gray-400 space-y-3 list-disc list-inside mb-6">
                <li>Managed end-to-end QA for 6+ major projects across Mobile, PC, and XR.</li>
                <li>Reduced post-release hotfixes by 20% through rigorous testing.</li>
                <li>Led QA-Dev meetings to prioritize bugs, accelerating resolution by 15%.</li>
                <li>Verified PC performance across diverse Intel/AMD and NVIDIA configurations.</li>
                <li>Mentored junior testers on JIRA workflows and game testing methodologies.</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                {['JIRA', 'TestRail', 'Charles Proxy', 'Game bench','CapFrameX','Beamable','MQDH'].map((tag) => (
                  <span key={tag} className="text-[10px] bg-white/5 px-3 py-1 rounded-full uppercase font-bold tracking-widest text-gray-400">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer id="contact" className="py-32 border-t border-white/5 scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-start items-start md:items-end gap-12">
            <div className="max-w-lg w-full text-left">
              <p className="text-xl text-gray-500 font-medium mb-8">Wanna to know what I can do more? Get in touch.</p>
              <div className="flex flex-col gap-6 items-start">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sam65290@gmail.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-4xl md:text-6xl font-bold text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 origin-left w-fit">
                  <span className="group-hover:underline decoration-2 underline-offset-8">Gmail</span>
                  <ArrowUpIcon className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 rotate-45" size={40} />
                </a>
                <a href="https://www.linkedin.com/in/sameer-dudekula/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-4xl md:text-6xl font-bold text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 origin-left w-fit">
                  <span className="group-hover:underline decoration-2 underline-offset-8">LinkedIn</span>
                  <ArrowUpIcon className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 rotate-45" size={40} />
                </a>
              </div>
            </div>
            <button onClick={scrollToTop} className="md:ml-auto w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group shrink-0">
              <ArrowUpIcon className="group-hover:-translate-y-1 transition-transform" size={24} />
            </button>
          </div>
          <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-600">
             <p>Sameer Dudekula</p>
             <p>Hyderabad, India</p>
          </div>
        </footer>
      </main>
    </div>
  );
}