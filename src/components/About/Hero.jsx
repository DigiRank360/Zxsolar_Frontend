import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sun, 
  Zap, 
  Award, 
  Users, 
  Atom, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';
import teamImage from '../../assets/team/team.png';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-ecoGrayBg py-16 md:py-20 lg:py-24">
      {/* Background Soft Glow & Blur Ambient Circles */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-ecoGreen/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-ecoGold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Left-Aligned Content with Staggered Entrance Animations */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Pill Badge with React Icon & Spin Animation */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-ecoGreen/30 shadow-sm text-ecoGreenDark text-xs sm:text-sm font-semibold tracking-wide uppercase group hover:border-ecoGreen hover:shadow-md transition-all duration-300">
              <Sun className="w-4 h-4 text-ecoGreen group-hover:rotate-180 transition-transform duration-700" />
              <span>About ZX Solar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-ecoGreen animate-ping ml-1" />
            </div>

            {/* Main Heading */}
            <h1 className="animate-fade-in-up [animation-delay:150ms] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ecoDark leading-[1.15] tracking-tight">
              We make{' '}
              <span className="relative inline-block text-ecoGreen">
                rooftop solar
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-ecoGold/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>{' '}
              with integrity
            </h1>

            {/* Description Subtitle */}
            <p className="animate-fade-in-up [animation-delay:300ms] text-base sm:text-lg text-gray-600 leading-relaxed font-medium max-w-2xl">
              Solar Energy is the story of Sound engineers, MBA, and Tech Mindset. We are building a tech-enabled, engineering-first rooftop solar EPC company.
            </p>

            {/* Action Buttons */}
            <div className="animate-fade-in-up [animation-delay:450ms] flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#quote"
                className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-ecoGreen text-white font-semibold text-base shadow-lg shadow-ecoGreen/25 hover:bg-ecoGreenDark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-ecoGreen/30 active:translate-y-0"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              
              <a
                href="#milestones"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white border border-gray-200 text-ecoDark font-semibold text-base shadow-sm hover:bg-gray-50 hover:border-ecoGreen/40 hover:text-ecoGreen transition-all duration-300 transform hover:-translate-y-1"
              >
                Our Journey
              </a>
            </div>

            {/* Interactive Feature Cards */}
            <div className="animate-fade-in-up [animation-delay:600ms] grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-gray-200/80">
              <div className="p-3 rounded-xl bg-white/60 border border-gray-100 hover:bg-white hover:shadow-md hover:border-ecoGreen/30 transition-all duration-300 group">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-ecoGreen/10 text-ecoGreen group-hover:bg-ecoGreen group-hover:text-white transition-colors duration-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-ecoDark group-hover:text-ecoGreen duration-200">100% Quality Assured</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/60 border border-gray-100 hover:bg-white hover:shadow-md hover:border-ecoGold/40 transition-all duration-300 group">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-ecoGold/10 text-ecoGold group-hover:bg-ecoGold group-hover:text-white transition-colors duration-300">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-ecoDark group-hover:text-ecoGold duration-200">Tech-Driven EPC</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/60 border border-gray-100 hover:bg-white hover:shadow-md hover:border-ecoGreen/30 transition-all duration-300 group">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-ecoGreen/10 text-ecoGreen group-hover:bg-ecoGreen group-hover:text-white transition-colors duration-300">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-ecoDark group-hover:text-ecoGreen duration-200">Certified Engineers</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Visual Showcase with React Icon & Animations */}
          <div className="lg:col-span-5 relative animate-fade-in-up [animation-delay:300ms]">
            
            {/* Outer Interactive Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* React Tech Stack Floating Badge - Top Right */}
              <div className="absolute -top-5 -right-3 z-30 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-gray-100 shadow-xl flex items-center gap-2.5 transform hover:scale-105 hover:rotate-2 transition-all duration-300 group cursor-pointer">
                <div className="p-2 bg-sky-500/10 rounded-xl text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                  <Atom className="w-5 h-5 animate-[spin_10s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Powered By</span>
                    <Sparkles className="w-3 h-3 text-ecoGold" />
                  </div>
                  <p className="text-xs font-black text-ecoDark">React Tech Stack</p>
                </div>
              </div>

              {/* Main Image Wrapper with Existing CSS Glow/Drift Animations */}
              <div className="hero-image-wrap relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-ecoDark group">
                
                {/* Glow Overlay from index.css */}
                <div className="hero-image-glow absolute inset-0 pointer-events-none z-10" />

                {/* Team Image */}
                <img
                  src={teamImage}
                  alt="ZX Solar Energies Team"
                  className="hero-image w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Dark-to-Transparent Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ecoDark/80 via-transparent to-transparent z-10 pointer-events-none" />

                {/* Glassmorphic Floating Card - Bottom Left */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto z-20 bg-white/85 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/60 shadow-xl flex items-center gap-3.5 transform hover:scale-102 transition-transform duration-300">
                  <div className="p-3 bg-ecoGreen text-white rounded-xl shadow-md shadow-ecoGreen/30">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-ecoGreen" />
                      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Expert Leadership</p>
                    </div>
                    <p className="text-sm font-extrabold text-ecoDark">Engineers & Solar Technicians</p>
                  </div>
                </div>

                {/* Floating Micro Tag - Top Left */}
                <div className="absolute top-4 left-4 z-20 bg-ecoDark/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white text-xs font-semibold flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-ecoGreen animate-pulse" />
                  <span>Clean Energy</span>
                </div>

              </div>

              {/* Stat Accent Pill Floating Bottom Right */}
              <div className="absolute -bottom-4 -right-2 z-30 bg-ecoDark text-white px-4 py-2.5 rounded-2xl border border-white/20 shadow-xl flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
                <TrendingUp className="w-4 h-4 text-ecoGold" />
                <span className="text-xs font-bold">10MW+ Installed</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;