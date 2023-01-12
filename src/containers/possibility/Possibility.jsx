import React from "react";
import "./possibility.css";
import audi from '../../assets/audi_poss1.jpg'

const Possibility = () => {
  return (
    <div className="possibility">
      <div className="possibility__info">
        <h1>Eröffnet bis zu 600 km neue Momente</h1>
        <p>
          Entdecken Sie die neuen, rein elektrischen Audi Q8 e-tron
          Modelle* mit einer Reichweite von bis zu 600 km**
        </p>
        <p>
          *Stromverbrauch (kombiniert) in kWh/100 km: 24,4-19,5;
          CO2-Emissionen (kombiniert) in g/km: 0. Angaben zu den
          Kraftstoff-/Stromverbräuchen und CO2-Emissionen bei
          Spannbreiten in Abhängigkeit von der gewählten Ausstattung
          des Fahrzeugs. Für das Fahrzeug liegen nur Verbrauchs- und
          Emissionswerte nach WLTP und nicht nach NEFZ vor. ** Je nach
          Derivat haben die Audi Q8 e-tron Modelle eine Reichweite
          zwischen ca. 410 und 600 km (WLTP). www.audi.de/DAT-Hinweis
        </p>
        <button>Mehr erfahren</button>
      </div>
      <div className="possibility__img">
        <img src={audi} alt="" />
      </div>
    </div>
  );
};

export default Possibility;
