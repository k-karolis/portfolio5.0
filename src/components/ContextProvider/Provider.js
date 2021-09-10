import React, { useContext, useState } from 'react';

const Context = React.createContext();

export const useContextProvider = () => {
  return useContext(Context);
};

export const Provider = ({ children }) => {
  const themeMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkTheme, setIsDarkTheme] = useState(themeMode);

  const value = { isDarkTheme, setIsDarkTheme };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
