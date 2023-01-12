import "./header.css";
import HeaderDropdown from "./HeaderDropdown";
import { MdArrowForwardIos } from "react-icons/md";
import { useContext, useState } from "react";
import { productContext } from "../../ProductContextProvider";

const Header = () => {

  // const {number} = useContext(productContext)

  return (
    <div className="header" id="header">
      <div className="header__title section__padding">
        <h1>Die besten Vorsätze fahren elektrisch</h1>
        <button type="button">Mehr erfahren</button>
      </div>
      <div className="header__filter">
        <div className="header__filter_comment">
          <p>
            Bei dem gezeigten Fahrzeug handelt es sich um ein
            Konzeptfahrzeug, das nicht als Serienfahrzeug verfügbar
            ist.
          </p>
        </div>
        <div className="header__filter_dropdown">
          <div className="header__filter_dropdown-title">
            <h2>Direkt verfügbare</h2>
          </div>
          <HeaderDropdown />
          <div className="header__filter_dropdown-options">
            <p>
              <span>12</span>neue <MdArrowForwardIos />
            </p>
            <p>
              <span>65</span>gebrauchte <MdArrowForwardIos />
            </p>
          </div>
        </div>
        <div className="header__filter_features">
          <p>
            Kraftstoffverbrauch kombiniert1: 6,8-3,9 l/100 km
            CO2-Emissionen kombiniert1: 155-99 g/km
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
