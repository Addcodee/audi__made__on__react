// import React, { createContext, useState } from "react";
// import offer1 from "../assets/offer1.jpg";
// import offer2 from "../assets/offer2.jpg";
// import offer3 from "../assets/offer3.jpg";

// export const offerContext = createContext();
// const OfferContextProvider = ({ children }) => {
//   const steps = {
//     offerTitle1: "Wunschfahrzeug finden",
//     offerText1:
//       "Wählen Sie über unsere Fahrzeugsuche unter allen aktuell verfügbaren Neu- und Gebrauchtwagen Ihr Wunschfahrzeug aus.",
//     offerPic1: offer1,

//     offerTitle2: "Vertragsart wählen",
//     offerText2:
//       "Entscheiden Sie sich während des Bestellprozesses, ob Sie Ihr Wunschfahrzeug kaufen, leasen oder finanzieren möchten.",
//     offerPic2: offer2,

//     offerTitle3: "Bestellung abschließen",
//     offerText3:
//       "Schließen Sie den Prozess mit nur wenigen Klicks ab. Viel Spaß mit Ihrem neuen Wunschfahrzeug.",
//     offerPic3: offer3,
//   };
//   const [img1, setImg1] = useState(false);
//   const [img2, setImg2] = useState(false);
//   const [img3, setImg3] = useState(false);

//   function previous() {
//     if (img1) {
//       setImg1(false);
//       setImg2(false);
//       setImg3(true);
//     } else if (img2) {
//       setImg1(true);
//       setImg2(false);
//       setImg3(false);
//     } else if (img3) {
//       setImg1(false);
//       setImg2(true);
//       setImg3(false);
//     }
//   }

//   function next() {
//     if (img1) {
//       setImg1(false);
//       setImg2(true);
//       setImg3(false);
//     } else if (img2) {
//       setImg1(false);
//       setImg2(false);
//       setImg3(true);
//     } else if (img3) {
//       setImg1(true);
//       setImg2(false);
//       setImg3(false);
//     }
//   }

//   function checkImg1() {
//     setImg1(true);
//     setImg2(false);
//     setImg3(false);
//   }

//   function checkImg2() {
//     setImg1(false);
//     setImg2(true);
//     setImg3(false);
//   }

//   function checkImg3() {
//     setImg1(false);
//     setImg2(false);
//     setImg3(true);
//   }



//   const Title = (
//     <>
//       <h2>
//         img1 ? steps.offerTitle1 : img2 ? steps.offerTitle2 : img3 ?
//         steps.offerTitle3 : steps.offerTitle1
//       </h2>
//     </>
//   );

//   const Text = (
//     <p>
//       img1 ? steps.offerText1 : img2 ? steps.offerText2 : img3 ?
//       steps.offerText3 : steps.offerText1
//     </p>
//   );

//   const Img = (
//     <img
//       src={
//         img1
//           ? steps.offerPic1
//           : img2
//           ? steps.offerPic2
//           : img3
//           ? steps.offerPic3
//           : steps.offerPic1
//       }
//       alt="error"
//     />
//   );

//   const values = {
//     previous,
//     next,
//     checkImg1,
//     checkImg2,
//     checkImg3,
//     Title,
//     Text,
//     Img,
//   };
//   return (
//     <offerContext.Provider value={values}>
//       {children}
//     </offerContext.Provider>
//   );
// };

// export default OfferContextProvider;







import React, { createContext } from "react";

export const offerContext = createContext();

const OfferContextProvider = ({ children }) => {
  const steps = {
    offerTitle1: "Wunschfahrzeug finden",
    offerText1:
      "Wählen Sie über unsere Fahrzeugsuche unter allen aktuell verfügbaren Neu- und Gebrauchtwagen Ihr Wunschfahrzeug aus.",

    offerTitle2: "Vertragsart wählen",
    offerText2:
      "Entscheiden Sie sich während des Bestellprozesses, ob Sie Ihr Wunschfahrzeug kaufen, leasen oder finanzieren möchten.",

    offerTitle3: "Bestellung abschließen",
    offerText3:
      "Schließen Sie den Prozess mit nur wenigen Klicks ab. Viel Spaß mit Ihrem neuen Wunschfahrzeug.",
  };

  const values = { steps };
  return (
    <offerContext.Provider value={values}>
      {children}
    </offerContext.Provider>
  );
};

export default OfferContextProvider;
