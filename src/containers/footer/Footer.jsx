import React, { useContext } from "react";
import { footerContext } from "../../contexts/FooterContextProvider";
import "./footer.css";
import { BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { SlArrowUp } from "react-icons/sl";

const Footer = () => {
  const {
    modelle,
    beratung,
    service,
    audiWelt,
    support,
    rights,
    Info,
    Info2
  } = useContext(footerContext);
  return (
    <div className="footer">
      <div className="footer__back-to-begin">
        <span>
          <a href="header">Zurück nach oben</a> <SlArrowUp style={{width: '0.8rem', height: '0.8rem'}}/>
        </span>
      </div>
      <div className="footer__details">
        <div className="footer__details_list">
          <h4>Modelle</h4>
          <ul>
            {modelle.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>
        </div>
        <div className="footer__details_list">
          <h4>Beratung & Kauf</h4>
          <ul>
            {beratung.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>
        </div>
        <div className="footer__details_list">
          <h4>Service & Zubehör</h4>
          <ul>
            {service.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>
        </div>
        <div className="footer__details_list">
          <h4>Audi Welt</h4>
          <ul>
            {audiWelt.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>
        </div>
        <div className="footer__details_list">
          <h4>Support</h4>
          <ul>
            {support.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>{" "}
        </div>
      </div>
      <div className="footer__social-nets">
        <div>
          <FaFacebookF
            style={{ width: "1.3rem", height: "1.3rem" }}
          />
          <BsInstagram
            style={{ width: "1.3rem", height: "1.3rem" }}
          />
          <BsYoutube style={{ width: "1.3rem", height: "1.3rem" }} />
          <BsTwitter style={{ width: "1.3rem", height: "1.3rem" }} />
          <FaPinterestP
            style={{ width: "1.3rem", height: "1.3rem" }}
          />
        </div>
      </div>
      <hr />
      <div className="footer__rights">
        <div className="footer__rights-links">
          <h5>© 2023 AUDI AG. Alle Rechte vorbehalten</h5>
          <ul>
            {rights.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>
        </div>
          <div className="footer__rights-info">
            <div>1</div>
            <div>
            {Info}
            {Info2}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
