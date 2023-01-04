import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { VscSearch, VscMenu } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import {MdArrowForwardIos} from 'react-icons/md'

const Menü = () => (
  <>
    <p>Alle Modelle</p>
    <p>Elektromobilität</p>
    <p>Beratung & Kauf</p>
    <p>Service & Zubehör</p>
    <p>Audi Welt</p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__menu">
        {toggleMenu ? null : (
          <VscMenu
            color="#000000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar__menu-container">
            <div className="navbar__menu_header">
              <div className="navbar__menu_header-close">
                <TfiClose
                  color="#000000"
                  size={27}
                  onClick={() => setToggleMenu(false)}
                />
              </div>
              <div className="navbar__menu_header-search">
                <VscSearch />
              </div>
            </div>
            <hr />
            <div className="navbar__menu-links">
              <div className="navbar__menu-link">
                <p>Alle Modelle</p>
              </div>
              <div className="navbar__menu-link">
                <p>Elektromobilität</p>
                <MdArrowForwardIos/>
              </div>
              <div className="navbar__menu-link">
                <p>Beratung & Kauf</p>
                <MdArrowForwardIos/>
              </div>
              <div className="navbar__menu-link">
                <p>Service & Zubehör</p>
                <MdArrowForwardIos/>
              </div>
              <div className="navbar__menu-link">
                <p>Audi Welt</p>
                <MdArrowForwardIos/>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="navbar__links">
        <img src={logo} alt="" />
        <div className="navbar__links_container">
          <Menü />
        </div>
      </div>
      <div className="navbar__sign">
        <div className="navbar__sign_search-icon">
          <VscSearch />
        </div>
        <div className="navbar__sign_user-icon">
          <CiUser />
        </div>
        <div className="navbar__sign_btn">
          <button type="button"> myAudi Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
