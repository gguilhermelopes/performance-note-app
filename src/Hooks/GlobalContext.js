import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [ex, setEx] = React.useState([[], [], [], [], [], [], []]);

  return (
    <GlobalContext.Provider
      value={{
        ex,
        setEx,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
