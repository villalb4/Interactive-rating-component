import React from "react";
import data from "./puntosData";
import "./Puntos.css";

function Puntos({onRating}) {

  function handleClick(e) {
    onRating(e.target.value)
    
  }

  return(     
      <div className="puntos">
        {data.map((e, i) => {
          return (
            <button key={e.id} className="button" onClick={handleClick} value={e.id}>
              {/* <div className="div_num">
                <span className="num">{e.num}</span>
              </div> */}
              {e.num}
            </button>
          )
        })}
      </div>
  )
}

export default Puntos;