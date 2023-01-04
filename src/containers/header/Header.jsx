import React, { useState } from "react";
import "./header.css";
import { SlArrowDown } from "react-icons/sl";

const Header = () => {
  const [selectClicked, setSelectClicked] = useState("");
  const [caretRotate, setCaretRotate] = useState("");
  const [menu, setMenu] = useState("");

  const [active, setActive] = useState("");

  const options = [
    "e-tron S",
    "e-tron Sportback",
    "e-tron S Sportback",
  ];

  return (
    <div className="header">
      <div className="header__title">
        <h1>Die besten Vorsätze fahren elektrisch</h1>
        <button type="button">Mehr erfahren</button>
      </div>
      <div className="header__black-line"></div>
      <div className="header__choose">
        <div className="dropdown">
          <div
            onClick={() => {
              setSelectClicked(!selectClicked);
              setCaretRotate(!caretRotate);
              setMenu(!menu);
            }}
            className={selectClicked ? "select-clicked" : "select"}
          >
            <div className="selected">
              <span>{active ? active.value : "choose your car"}</span>
            </div>
            <div className={caretRotate ? "caret-rotate" : "caret"}>
              <SlArrowDown />
            </div>
          </div>
          {menu && (
            <ul className={menu ? "menu-open" : "menu"}>
              {options.map((value, index) => (
                <li
                  onClick={() => {
                    setSelectClicked(!selectClicked);
                    setCaretRotate(!caretRotate);
                    setMenu(!menu);
                    setActive({ value });
                  }}
                  key={index}
                >
                  {value}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="header__choose-info">sdv</div>
    </div>
  );
};

export default Header;
