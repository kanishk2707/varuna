import DomeGallery from '@/components/DomeGallery';

interface GalleryProps {
  onNext?: () => void;
}

export default function Gallery({ onNext }: GalleryProps) {
  return (
    <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-warm-cream to-soft-ivory">
      {/* Section title */}
      <div className="absolute top-8 sm:top-12 left-0 right-0 z-30 text-center">
        <h2
          className="text-4xl md:text-5xl font-light"
          style={{
            fontFamily: 'Playfair Display, serif',
            color: '#2a1e19',
            letterSpacing: '0.05em',
          }}
        >
          My devathai
        </h2>
      </div>

      {/* Dome Gallery */}
      <div className="w-full h-full">
        <DomeGallery
          grayscale={false}
          overlayBlurColor="rgba(250, 245, 240, 0.8)"
        />
      </div>

      {/* Scroll to Letter Button for Mobile & Desktop */}
      {onNext && (
        <div className="absolute bottom-5 sm:bottom-7 left-0 right-0 z-30 flex justify-center pointer-events-auto">
          <button
            onClick={onNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              color: '#3a2a22',
              border: '1px solid rgba(212, 175, 55, 0.5)',
              fontFamily: 'Playfair Display, serif',
              letterSpacing: '0.03em'
            }}
          >
            <span>A Letter for You</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </button>
        </div>
      )}
    </section>
  );
}
