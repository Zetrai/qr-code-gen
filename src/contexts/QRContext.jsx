import { createContext, useState } from 'react';

// Create the context
export const QRContext = createContext();

// Create a provider component
export const QRProvider = ({ children }) => {
  const [content, setContent] = useState([]); // Shared state for movie list

  return (
    <QRContext.Provider value={{ content, setContent }}>
      {children}
    </QRContext.Provider>
  );
};
