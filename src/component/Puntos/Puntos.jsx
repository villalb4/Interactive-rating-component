import React from "react";
import data from "./puntosData";
import "./Puntos.css";

function Puntos() {
  function handleSubmit(e) {
    e.preventDefault()
  }
  return(     
      <div className="puntos">
        {data.map((e, i) => {
          return (
            <button className="button" onClick={handleSubmit}>
              <div className="div_num">
                <span className="num" key={e.id}>{e.num}</span>
              </div>
            </button>
          )
        })}
      </div>
  )
}

export default Puntos;