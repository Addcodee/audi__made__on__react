import React, { useContext, useState } from "react";
import { productContext } from "../../ProductContextProvider";
import { BsChevronDown } from "react-icons/bs";
import HeaderFunc from "./HeaderFunc";

const HeaderDropdown = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { modell, value } = useContext(productContext);

  return (
    <div
      onClick={() => setMenuOpen(!menuOpen)}
      className="header__filter_dropdown-body"
    >
      <div className="header__filter_dropdown-body_span">
        <span> Modell </span>
      </div>
      <div className="header__filter_dropdown-body_select">
        <span className="header__filter_dropdown-body_select-span">
          {value ? value : modell[(0, 1)][0]}
        </span>
        <div className="header__filter_dropdown-body_select-caret">
          <BsChevronDown />
        </div>
      </div>
      {menuOpen && (
        <div className="header__filter_dropdown-body_menu">
          <ul>
            <HeaderFunc />
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
