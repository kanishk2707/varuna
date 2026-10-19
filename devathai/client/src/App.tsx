import { useRef } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Opening from './pages/Opening';
import Gallery from './pages/Gallery';
import Poem from './pages/Poem';
import Birthday from './pages/Birthday';

function App() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const poemRef = useRef<HTMLDivElement>(null);
  const birthdayRef = useRef<HTMLDivElement>(null);

  const handleOpeningEnter = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGalleryNext = () => {
    poemRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePoemNext = () => {
    birthdayRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="w-full min-h-[100dvh]">
            {/* Opening Section */}
            <div className="w-full h-[100dvh]">
              <Opening onEnter={handleOpeningEnter} />
            </div>
            
            {/* Gallery Section */}
            <div ref={galleryRef} className="w-full h-[100dvh]">
              <Gallery onNext={handleGalleryNext} />
            </div>
            
            {/* Poem Section */}
            <div ref={poemRef} className="w-full h-[100dvh]">
              <Poem onNext={handlePoemNext} />
            </div>
            
            {/* Birthday Section */}
            <div ref={birthdayRef} className="w-full h-[100dvh]">
              <Birthday />
            </div>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
