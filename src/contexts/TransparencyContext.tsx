// src/contexts/TransparencyContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface TransparencyContextProps {
  transparent: boolean;
  toggleTransparency: () => void;
}

export const TransparencyContext = createContext<TransparencyContextProps>({
  transparent: true,
  toggleTransparency: () => {},
});

interface TransparencyProviderProps {
  children: ReactNode;
}

export const TransparencyProvider: React.FC<TransparencyProviderProps> = ({ children }) => {
  const [transparent, setTransparent] = useState<boolean>(true);

  const toggleTransparency = () => {
    setTransparent((prev) => !prev);
  };

  return (
    <TransparencyContext.Provider value={{ transparent, toggleTransparency }}>
      {children}
    </TransparencyContext.Provider>
  );
};
