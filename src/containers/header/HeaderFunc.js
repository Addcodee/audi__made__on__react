import React, { useContext, useState } from "react";
import { productContext } from "../../ProductContextProvider";

const HeaderFunc = () => {
  const [active, setActive] = useState(false);

  const { modell, value, setValue } = useContext(productContext);

  return (
    <>
      {modell.map((item, id) =>
        typeof item === typeof [] ? (
          item.map((elem, index) => (
            <li
              className={elem === value ? "active" : "disabled"}
              onClick={() => {
                setValue(elem);
                setActive(!active);
              }}
              key={index}
            >
              {elem}
            </li>
          ))
        ) : (
          <div key={id} className="car__class">
            <span>{item}</span>
          </div>
        )
      )}
    </>
  );
};

export default HeaderFunc;
