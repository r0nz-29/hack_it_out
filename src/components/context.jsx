import React from "react";

export const Context = React.createContext();

export const Provider = ({ children }) => {
  const [hospitals, setHospitals] = React.useState(
    JSON.parse(localStorage.getItem("results"))
  );
  function createHospitalsList(hospitals) {
    hospitals.sort((a, b) =>
      a.location.formattedAddress.length >= b.location.formattedAddress.length
        ? -1
        : 1
    );
    localStorage.setItem("results", JSON.stringify([...hospitals]));
    setHospitals(JSON.parse(localStorage.getItem("results")));
    // console.log(JSON.parse(localStorage.getItem("results")));
  }
  return (
    <Context.Provider value={{ hospitals, createHospitalsList }}>
      {children}
    </Context.Provider>
  );
};

export const Consumer = Context.Consumer;
