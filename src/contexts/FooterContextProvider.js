import React, { createContext } from "react";

export const footerContext = createContext();
const FooterContextProvider = ({ children }) => {
  const modelle = [
    "Alle Modelle",
    "Alle Elektromodelle",
    "Alle Plug-in-Hybride",
    "Probefahrt",
    "Erklärvideos",
  ];

  const beratung = [
    "Finanzierung, Leasing, Versicherung",
    "Aktionen & Angebote",
    "Konfigurator",
    "Sofort verfügbare Neuwagen",
    "Gebrauchtwagen",
    "Audi exclusive",
    "Händlersuche",
    "Alternative Antriebe",
    "Lieferanten & Partner",
    "Geschäftskunden",
    "Behörden, Diplomaten, Sonderfahrzeuge",
    "Audi Live Beratung",
  ];

  const service = [
    "Rückrufaktion Diesel Typ EA 189",
    "Reparatur & Wartung",
    "Audi Original Zubehör",
    "Audi connect",
    "Bordbuch & Bedienungsanleitungen",
    "Apps",
    "Garantieleistungen",
    "Häufige Fragen (FAQ)",
  ];

  const audiWelt = [
    "Audi driving experience",
    "Audi on demand",
    "Audi Shopping World",
    "Unternehmen",
    "Karriere bei Audi",
    "Karriere im Autohaus",
    "Investor Relations",
    "Audi Forum Neckarsulm",
    "Audi Forum Ingolstadt",
    "Audi Erlebnis Abholung",
    "Audi City Berlin",
  ];

  const support = [
    "Kontakt / Newsletter",
    "Händlersuche",
    "Audi Online Beratung",
    "Online-Terminvereinbarung",
    "Servicekontakt",
  ];

  const rights = [
    "Impressum",
    "Rechtliches",
    "Hinweisgebersystem",
    "Datenschutz",
    "Cookie-Einstellungen",
    "Cookie Richtlinie",
    "Presse",
    "Karriere",
  ];

  const Info = (
    <>
      <p>
        Die angegebenen Verbrauchs- und Emissionswerte wurden nach den
        gesetzlich vorgeschriebenen Messverfahren ermittelt. Am 1.
        Januar 2022 hat der WLTP-Prüfzyklus den NEFZ-Prüfzyklus
        vollständig ersetzt, sodass für nach diesem Datum neu
        typgenehmigte Fahrzeuge keine NEFZ-Werte vorliegen. Die
        Angaben beziehen sich nicht auf ein einzelnes Fahrzeug und
        sind nicht Bestandteil des Angebots, sondern dienen allein
        Vergleichszwecken zwischen den verschiedenen Fahrzeugtypen.
        Zusatzausstattungen und Zubehör (Anbauteile, Reifenformat
        usw.) können relevante Fahrzeugparameter, wie z. B. Gewicht,
        Rollwiderstand und Aerodynamik verändern und neben Witterungs-
        und Verkehrsbedingungen sowie dem individuellen Fahrverhalten
        den Kraftstoffverbrauch, den Stromverbrauch, die
        CO2-Emissionen und die Fahrleistungswerte eines Fahrzeugs
        beeinflussen. Wegen der realistischeren Prüfbedingungen sind
        die nach dem WLTP gemessenen Kraftstoffverbrauchs- und
        CO2-Emissionswerte in vielen Fällen höher als die nach dem
        NEFZ gemessenen. Dadurch können sich seit dem 1. September
        2018 bei der Fahrzeugbesteuerung entsprechende Änderungen
        ergeben. Weitere Informationen zu den Unterschieden zwischen
        WLTP und NEFZ finden Sie unter <span style={{ textDecoration: "underline" }}>
          www.audi.de/wltp
        </span>
        .
      </p>
    </>
  );

  const Info2 = (
    <>
      <p>
        Weitere Informationen zum offiziellen Kraftstoffverbrauch und
        den offiziellen spezifischen CO2-Emissionen neuer
        Personenkraftwagen können dem „Leitfaden über den
        Kraftstoffverbrauch, die CO2-Emissionen und den Stromverbrauch
        neuer Personenkraftwagen“ entnommen werden, der an allen
        Verkaufsstellen und bei der DAT Deutsche Automobil Treuhand
        GmbH, Hellmuth-Hirth-Str. 1, D-73760 Ostfildern oder unter{" "}
        <span style={{ textDecoration: "underline" }}>
          www.dat.de
        </span> unentgeltlich erhältlich ist.
      </p>
    </>
  );

  const values = {
    modelle,
    beratung,
    service,
    audiWelt,
    support,
    rights,
    Info,
    Info2,
  };
  return (
    <footerContext.Provider value={values}>
      {children}
    </footerContext.Provider>
  );
};

export default FooterContextProvider;
