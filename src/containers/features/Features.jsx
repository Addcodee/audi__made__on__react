import React from "react";
import "./features.css";
import demand from "../../assets/audi-on-demand.jpg";

const Features = () => {
  return (
    <div className="features">
      <div className="features__info">
        <h2>Audi on demand</h2>
        <p>
          Buchen Sie sich für jeden Anlass den passenden Audi. Ob Mal
          kurz mit dem gemieteten Auto in die Berge fahren,
          Elektromobilität unverbindlich und kurzfristig verfügbar
          erleben oder eine flexiblere Alternative zum Leasing finden.
          Unsere Audi on demand Angebote rent und subscribe
          unterstützen Sie bei Ihrem Wunsch nach Flexibilität.
        </p>
        <button>Mehr erfahren</button>
      </div>
      <div className="features__img">
        <img src={demand} alt="" />
      </div>
    </div>
  );
};

export default Features;
