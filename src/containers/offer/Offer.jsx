import React, { useContext, useState } from "react";
import "./offer.css";
import offer1 from "../../assets/offer1.jpg";
import offer2 from "../../assets/offer2.jpg";
import offer3 from "../../assets/offer3.jpg";
import { MdArrowForwardIos } from "react-icons/md";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { offerContext } from "../../contexts/OfferContextProvider";

const Offer = () => {
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);

  const {steps} = useContext(offerContext)

  return (
    <div className="offer">
      <div className="offer__title">
        <h1>In drei Schritten zu Ihrem Wunschfahrzeug</h1>
        <p>
          Ganz bequem ein Fahrzeug von zu Hause aus online bestellen –
          diesen Service bieten wir Ihnen mit unserem Audi Online
          Fahrzeugkauf. Nachfolgend zeigen wir Ihnen in drei
          Schritten, wie einfach der Bestellprozess ist.
        </p>
        <div className="offer__title-click">
          <span>Zum Audi Online Fahrzeugkauf</span>
          <MdArrowForwardIos className="arrow-right" />
        </div>
      </div>

      <div className="offer__slider">
        <div className="offer__slider-info">
          <div className="offer__slider-info_btns">
            <button
              onClick={() => {
                if (img1) {
                  setImg1(false);
                  setImg2(false);
                  setImg3(true);
                } else if (img2) {
                  setImg1(true);
                  setImg2(false);
                  setImg3(false);
                } else if (img3) {
                  setImg1(false);
                  setImg2(true);
                  setImg3(false);
                }
              }}
            >
              <SlArrowLeft className="arrows" />
            </button>
            <button
              className={img1 ? "offer__slider-info_active" : null}
              onClick={() => {
                setImg1(true);
                setImg2(false);
                setImg3(false);
              }}
            >
              1
            </button>
            <button
              className={img2 ? "offer__slider-info_active" : null}
              onClick={() => {
                setImg1(false);
                setImg2(true);
                setImg3(false);
              }}
            >
              2
            </button>
            <button
              className={img3 ? "offer__slider-info_active" : null}
              onClick={() => {
                setImg1(false);
                setImg2(false);
                setImg3(true);
              }}
            >
              3
            </button>
            <button
              onClick={() => {
                if (img1) {
                  setImg1(false);
                  setImg2(true);
                  setImg3(false);
                } else if (img2) {
                  setImg1(false);
                  setImg2(false);
                  setImg3(true);
                } else if (img3) {
                  setImg1(true);
                  setImg2(false);
                  setImg3(false);
                }
              }}
            >
              <SlArrowRight className="arrows" />
            </button>
          </div>

          <div className="offer__slider-info_text slide-in-right">
            <h2>
              {img1
                ? steps.offerTitle1
                : img2
                ? steps.offerTitle2
                : img3
                ? steps.offerTitle3
                : steps.offerTitle1}
            </h2>
            <p>
              {img1
                ? steps.offerText1
                : img2
                ? steps.offerText2
                : img3
                ? steps.offerText3
                : steps.offerText1}
            </p>
          </div>
        </div>
        <div className="offer__slider-img slide-in-right">
          <img
            src={
              img1 ? offer1 : img2 ? offer2 : img3 ? offer3 : offer1
            }
            alt="error"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;