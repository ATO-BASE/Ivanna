import React, { createContext, useContext, useEffect, useState } from 'react';

export type Season = 'spring' | 'summer' | 'fall' | 'winter';

interface SeasonContextType {
  season: Season;
  setSeason: (season: Season) => void;
}

const SeasonContext = createContext<SeasonContextType | undefined>(undefined);

export const SeasonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [season, setSeason] = useState<Season>(() => {
    const saved = localStorage.getItem('season');
    return (saved as Season) || 'spring';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-season', season);
    localStorage.setItem('season', season);
  }, [season]);

  return (
    <SeasonContext.Provider value={{ season, setSeason }}>
      {children}
    </SeasonContext.Provider>
  );
};

export const useSeason = () => {
  const context = useContext(SeasonContext);
  if (!context) {
    throw new Error('useSeason must be used within SeasonProvider');
  }
  return context;
};
