import React from "react";

export const Context = React.createContext();

export const Provider = ({ children }) => {
  const [hospitals, setHospitals] = React.useState([]);
  return (
    <Context.Provider value={{ hospitals, setHospitals }}>
      {children}
    </Context.Provider>
  );
};

export const Consumer = Context.Consumer;
