import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSeason } from '@/contexts/SeasonContext';
import heroSpring from '@/assets/hero-spring.jpg';
import heroSummer from '@/assets/hero-summer.jpg';
import heroFall from '@/assets/hero-fall.jpg';
import heroWinter from '@/assets/hero-winter.jpg';
import avatar from '@/assets/avatar.jpg';

const images = {
  spring: heroSpring,
  summer: heroSummer,
  fall: heroFall,
  winter: heroWinter,
};

const HeroSlider = () => {
  const { season } = useSeason();
  const seasons = ['spring', 'summer', 'fall', 'winter'];
  const [currentIndex, setCurrentIndex] = useState(seasons.indexOf(season));

  useEffect(() => {
    setCurrentIndex(seasons.indexOf(season));
  }, [season]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % seasons.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + seasons.length) % seasons.length);
  };

  const currentSeason = seasons[currentIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={images[currentSeason as keyof typeof images]}
          alt={`${currentSeason} hero`}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        
        <div className="text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div>
              <img className="shadow-none hover:shadow-2xl transition  hover:border-white-600" style={{borderRadius:'50%', cursor:'pointer', border:'10px double', borderColorP:'pink'}} width={300} height={300} src={avatar} alt="" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            IVANNA HAVRYLIUK
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
            Shopify | Full-Stack Developer
          </p>
          <TypewriterEffect />
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {seasons.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const TypewriterEffect = () => {
  const technologies = [
    'Shopify',
    'Shopify Apps',
    'Theme Customzation',
    'Figma to Code',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'PHP',
    'Laravel',
  ];
  const [text, setText] = useState('');
  const [techIndex, setTechIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTech = technologies[techIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentTech.substring(0, text.length + 1));
          if (text === currentTech) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(currentTech.substring(0, text.length - 1));
          if (text === '') {
            setIsDeleting(false);
            setTechIndex((prev) => (prev + 1) % technologies.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, techIndex]);

  return (
    <div className="text-lg md:text-xl text-white/80 h-8">
      Building with <span className="text-accent font-semibold">{text}</span>
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default HeroSlider;
