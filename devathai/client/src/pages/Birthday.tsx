import { useEffect, useState } from 'react';
import { GardenBackground } from '@/components/GardenBackground';

export default function Birthday() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => setShowText(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      {/* Garden Background */}
      <GardenBackground />

      {/* Decorative light elements */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 opacity-20"
        style={{
          background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 opacity-15"
        style={{
          background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
        }}
      />

      {/* Main content - ONLY the closing text, nothing else */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6">
        <div
          className={`transition-all duration-1500 ease-out ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: showText ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light text-center px-4 max-w-4xl"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2a1e19',
              letterSpacing: '0.03em',
              lineHeight: '1.3',
            }}
          >
            Kalaila la paapa i guess so goodmorning thangame
          </h1>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => {
          const duration = Math.random() * 4 + 6;
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: `rgba(212, 175, 55, ${Math.random() * 0.3 + 0.1})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationName: 'float',
                animationDuration: `${duration}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: `${i * 0.5}s`,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
