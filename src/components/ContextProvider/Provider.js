import React, { useContext, useState } from 'react';

const Context = React.createContext();

export const useContextProvider = () => {
  return useContext(Context);
};

export const Provider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const value = { isDarkTheme, setIsDarkTheme };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
