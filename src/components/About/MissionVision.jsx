import React from 'react';
import { Target, Compass, HeartHandshake, Sparkles, ArrowUpRight } from 'lucide-react';

const MissionVision = () => {
  const cards = [
    {
      id: 'mission',
      badge: 'Our Mission',
      title: 'Our Mission',
      description:
        'To accelerate the world transition to sustainable energy through high-performance, engineering-led rooftop solar solutions.',
      icon: Target,
      accentColor: 'ecoGreen',
      badgeBg: 'bg-ecoGreen/10',
      badgeText: 'text-ecoGreenDark',
      iconBg: 'bg-ecoGreen/10 text-ecoGreen group-hover:bg-ecoGreen group-hover:text-white',
      borderHover: 'hover:border-ecoGreen/40 hover:shadow-ecoGreen/10',
    },
    {
      id: 'vision',
      badge: 'Our Vision',
      title: 'Our Vision',
      description:
        'To become India’s most trusted, tech-driven rooftop solar company, setting benchmark engineering standards for the energy sector.',
      icon: Compass,
      accentColor: 'sky-500',
      badgeBg: 'bg-sky-50',
      badgeText: 'text-sky-600',
      iconBg: 'bg-sky-50 text-sky-500 group-hover:bg-sky-500 group-hover:text-white',
      borderHover: 'hover:border-sky-400/40 hover:shadow-sky-500/10',
    },
    {
      id: 'values',
      badge: 'Our Values',
      title: 'Our Values',
      description:
        'Integrity, technical perfection, customer transparency, and an unwavering commitment to green innovation in every project.',
      icon: HeartHandshake,
      accentColor: 'ecoGold',
      badgeBg: 'bg-ecoGold/10',
      badgeText: 'text-amber-700',
      iconBg: 'bg-ecoGold/10 text-ecoGold group-hover:bg-ecoGold group-hover:text-white',
      borderHover: 'hover:border-ecoGold/40 hover:shadow-ecoGold/10',
    },
  ];

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-ecoGreen/5 via-sky-500/5 to-ecoGold/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ecoGrayBg border border-gray-200 text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-600 shadow-sm">
            <Sparkles className="w-4 h-4 text-ecoGold" />
            <span>WHO WE ARE</span>
          </div>

          <h2 className="animate-fade-in-up [animation-delay:150ms] text-3xl sm:text-5xl font-extrabold text-ecoDark tracking-tight">
            Pioneering Solar{' '}
            <span className="text-ecoGreen underline decoration-ecoGold/40 decoration-wavy decoration-2">
              Excellence
            </span>
          </h2>

          <p className="animate-fade-in-up [animation-delay:300ms] text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            Driven by engineering precision and an ambitious vision to empower every roof with clean, reliable solar energy.
          </p>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-2xl ${card.borderHover} transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Background Top Glow on Hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gray-100 group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none opacity-40" />

                <div>
                  {/* Top Row: Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`p-4 rounded-2xl ${card.iconBg} transition-all duration-300 shadow-sm`}>
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${card.badgeBg} ${card.badgeText}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-ecoDark mb-4 group-hover:text-ecoGreen transition-colors duration-300 flex items-center justify-between">
                    <span>{card.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-ecoGreen group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-medium leading-relaxed text-sm sm:text-base">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Highlight Border Line */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-semibold">
                  <span>ZX SOLAR CORE</span>
                  <span className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-ecoGreen transition-colors duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MissionVision;