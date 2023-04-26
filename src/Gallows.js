import React from "react";
import state1 from "./images/state1.GIF";
import state2 from "./images/state2.GIF";
import state3 from "./images/state3.GIF";
import state4 from "./images/state4.GIF";
import state5 from "./images/state5.GIF";
import state6 from "./images/state6.GIF";
import state7 from "./images/state7.GIF";
import state8 from "./images/state8.GIF";
import state9 from "./images/state9.GIF";
import state10 from "./images/state10.GIF";
import state11 from "./images/state11.GIF";

const Gallows = ({ nWrong, maxWrong }) => {
  const images = [
    state1,
    state2,
    state3,
    state4,
    state5,
    state6,
    state7,
    state8,
    state9,
    state10,
    state11,
  ];
  const imgSrc = images[nWrong];
  const imgAlt = `${nWrong} wrong guesses out of ${maxWrong}`;

  return <img src={imgSrc} alt={imgAlt} />;
};

export default Gallows;
