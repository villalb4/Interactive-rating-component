import React from "react";
import "./Puntos.css";

function Puntos(props) {
  return(
    <div className="puntos">
      <button className="button">
        <div className="div_num">
          <span className="num" key={props.id}>{props.num}</span>
        </div>
      </button>
    </div>
  )
}

export default Puntos;