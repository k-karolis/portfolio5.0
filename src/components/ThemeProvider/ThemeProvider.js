import React, { useState } from 'react';

export const ThemeMode = React.createContext();
ThemeMode.displayName = 'My Theme Context Mode';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(theme === false ? true : false);
  };

  return (
    <ThemeMode.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeMode.Provider>
  );
};

export default ThemeProvider;
