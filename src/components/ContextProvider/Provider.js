import React, { useContext, useState } from 'react';

const Context = React.createContext();

export const useContextProvider = () => {
  return useContext(Context);
};

export const Provider = ({ children }) => {
  const themeMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkTheme, setIsDarkTheme] = useState(themeMode);
  const [modalIsOpen, setIsOpen] = useState(false);

  const value = { isDarkTheme, setIsDarkTheme, modalIsOpen, setIsOpen };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
