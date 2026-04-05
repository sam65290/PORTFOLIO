"use client";

import React, { useState } from 'react';
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
  { name: " Pokémon GO", image: "/Pgo.jpeg" },
  { name: "GTA 5 Enhanced", image: "/GTA5.png" },
  { name: "Red Dead Redemption", image: "/RedDeadRedemption.png" },
  { name: "Farming Simulator", image: "/FarmingSimulatorVR.png" },
  { name: "Squid Game", image: "/SquidGameUnleashed.png" },
  { name: "FIFA RIVALS", image: "/FifaRivalsIcon.png" }
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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

        {/* Mobile Menu */}
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
            {/* UPDATED DOWNLOAD BUTTON */}
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

        {/* --- PROJECTS MARQUEE --- */}
        <section className="py-24 border-t border-white/5 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">
              Played for hours
            </p>
          </div>
          
          <div className="relative flex overflow-hidden py-4">
            <div className="flex animate-infinite-scroll whitespace-nowrap gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
              {[...projects, ...projects].map((project, index) => (
                <div key={index} className="flex flex-col items-center gap-4 group shrink-0">
                  <div className="rounded-xl overflow-hidden transition-colors">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="max-h-36 md:max-h-48 w-auto h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <span className="text-xl md:text-2xl font-black uppercase tracking-tighter italic text-white opacity-70 group-hover:opacity-100 transition-all duration-300">
                    {project.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#0a0a0a] to-transparent z-10" />
          </div>
        </section>

        {/* --- ABOUT --- */}
        <section id="about" className="py-32 grid md:grid-cols-12 gap-8 border-t border-white/5 scroll-mt-24">
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">Something About Me</p>
          </div>
          <div className="md:col-span-9 space-y-8 text-gray-400 text-lg leading-relaxed">
            <p>I am a <span className="text-white">Quality Verification professional</span> who bridges the gap between complex development builds and seamless player experiences. With a deep focus on the technical lifecycle of game production, I specialize in identifying critical blockers and performing <span className="text-white">root cause analysis</span>.</p>
            <p>Throughout my career, I have worked across the full STLC—translating intricate requirements into rigorous test plans and collaborating closely with engineers. I bring a strong focus on <span className="text-white">performance-driven testing</span> and hardware-software synergy.</p>
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
            <div><h3 className="text-2xl md:text-3xl font-bold">200+</h3><p className="text-[10px] text-gray-500 uppercase mt-2 font-bold tracking-widest">Tests Executed</p></div>
            <div><h3 className="text-2xl md:text-3xl font-bold">2+ Yrs</h3><p className="text-[10px] text-gray-500 uppercase mt-2 font-bold tracking-widest">Experience</p></div>
          </div>
        </section>

        {/* --- EXPERTISE --- */}
        <section className="py-24 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-12">Things i know</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-gray-500 text-sm font-medium">
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Platforms</h3>
              <div className="grid grid-cols-1 gap-y-4">
                <span>PC (Steam/Epic) / Nintendo Switch</span>
                <span>iOS / Android / VR (Quest/PSVR)</span>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Tools</h3>
              <div className="grid grid-cols-2 gap-y-4">
                <span>JIRA / TestRail</span>
                <span>Confluence / Mantis</span>
                <span>ADB / DevTools</span>
                <span>Charles Proxy</span>
                <span>Game Bench / Aptum</span>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Expertise</h3>
              <div className="grid grid-cols-1 gap-y-4">
                <span>Black & White Box Testing</span>
                <span>Smoke, Sanity & Regression</span>
                <span>Functional & Performance</span>
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
                <li>Managed end-to-end QA for 6+ major projects across Mobile, PC, and XR to ensure 100% stability.</li>
                <li>Reduced post-release hotfixes by 20% through rigorous functional and regression testing.</li>
                <li>Led QA-Dev meetings to prioritize bugs, accelerating resolution by 15%.</li>
                <li>Verified PC performance across diverse Intel/AMD and NVIDIA configurations.</li>
                <li>Mentored junior testers on JIRA workflows and game testing methodologies.</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                {['JIRA', 'TestRail', 'ADB', 'Game bench', 'Aptum'].map((tag) => (
                  <span key={tag} className="text-[10px] bg-white/5 px-3 py-1 rounded-full uppercase font-bold tracking-widest text-gray-400">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        To move your contact section to the left, we need to change the alignment of the flex container and the origin of the hover effect.

In your current code, the footer uses justify-between items-end, which is pushing the content apart and anchoring it to the bottom-right. We will change this to items-start and ensure the text is left-aligned.

The Fix
Replace your Footer section with this updated code:

TypeScript
        {/* --- FOOTER / CONTACT --- */}
        <footer id="contact" className="py-32 border-t border-white/5 scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-start items-start md:items-end gap-12">
            <div className="max-w-lg w-full text-left"> {/* Added text-left and w-full */}
              <p className="text-m text-gray-500 font-medium mb-8">Wanna know what i can do, get in touch-</p>
              
              <div className="flex flex-col gap-6 items-start"> {/* Added items-start */}
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sam65290@gmail.com" 
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-4xl md:text-6xl font-bold text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 origin-left w-fit"
                >
                  <span className="group-hover:underline decoration-2 underline-offset-8">Gmail</span>
                  <ArrowUpIcon className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 rotate-45" size={40} />
                </a>

                <a 
                  href="https://www.linkedin.com/in/sameer-dudekula/" 
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-4xl md:text-6xl font-bold text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 origin-left w-fit"
                >
                  <span className="group-hover:underline decoration-2 underline-offset-8">LinkedIn</span>
                  <ArrowUpIcon className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 rotate-45" size={40} />
                </a>
              </div>
            </div>

            {/* Scroll to Top Button - Moved to the right via margin-left auto */}
            <button
              onClick={scrollToTop}
              className="md:ml-auto w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group shrink-0">
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