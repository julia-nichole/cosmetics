  
import React, { useState, createContext } from "react";

export const MainContext = createContext();

export const MainProvider = props => {
  const [mains, setMains] = useState([
    {
      name: "Highlighter",
      price: "$14",
      description: "gold shimmer",
      id: 1
    },
    {
      name: "lipstick",
      price: "$17",
      description: "red",
      id: 2
    },
    {
      name: "blush",
      price: "$9",
      description: "pink",
      id: 3
    }
  ]);
  return (
    <MainContext.Provider value={[mains, setMains]}>
      {props.children}
    </MainContext.Provider>
  );
};