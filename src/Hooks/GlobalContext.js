import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [ex, setEx] = React.useState([[], [], [], [], [], [], []]);
  const [muscularGroup, setMuscularGroup] = React.useState("");

  return (
    <GlobalContext.Provider
      value={{
        ex,
        setEx,
        muscularGroup,
        setMuscularGroup,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
