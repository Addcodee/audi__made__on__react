import React from "react";
import ReactDOM from "react-dom/client";
import ProductContextProvider from "./ProductContextProvider";
import App from "./App";
import OfferContextProvider from "./contexts/OfferContextProvider";
import FooterContextProvider from "./contexts/FooterContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FooterContextProvider>
    <OfferContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </OfferContextProvider>
  </FooterContextProvider>
);
