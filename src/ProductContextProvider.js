import React, { children, createContext, useState } from "react";

export const productContext = createContext();
const ProductContextProvider = ({ children }) => {

  const [value, setValue] = useState("");
  

  const modell = [
    "Audi e-tron",
    ["e-tron", "e-tron S", "e-tron Sportback", "e-tron S Sportback"],
    "Audi e-tron GT",
    ["e-tron GT", "RS e-tron GT"],
    "Audi Q8e-tron",
    ["Q8 e-tron", "Q8 Sportback e-tron"],
    "Audi A1",
    ["A1 Sportback", "A1 allstreet/citycarver"],
    "Audi A3",
    [
      "A3 Sportback",
      "A3 Sportback TFSI e",
      "A3 Sportback g-tron",
      "A3 Limousine",
      "A3 Cabriolet",
      "S3 Sportback TFSI",
      "S3 Limousine TFSI",
      "S3 Cabriolet",
      "RS 3 Limousine",
      "RS 3 Sportback",
    ],
  ];



  const values = { modell, value, setValue };
  return (
    <productContext.Provider value={values}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
