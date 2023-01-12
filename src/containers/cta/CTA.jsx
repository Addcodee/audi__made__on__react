import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="cta">
      <div className="cta__container">
        <h1>Sofort verfügbar</h1>
        <h2>Fahrzeug online kaufen</h2>
        <div className="cta__container_radio">
          <div>
            <label className="cta__container_radio-custom">
              <input type="radio" name="choose" />
              <span></span>
            </label>
            <span>Neuwagen</span>
          </div>
          <div>
            <label className="cta__container_radio-custom">
              <input type="radio" name="choose" />
              <span></span>
            </label>
            <span>Gebrauchtwagen</span>
          </div>
        </div>
        <button>Jetzt suchen</button>
      </div>
    </div>
  );
};

export default CTA;
