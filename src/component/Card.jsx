import React from "react";
import "./Card.css"
import Puntos from "./Puntos/Puntos";
import star from "../assets/images/icon-star.svg";


export default function Card() {
  return (
    <div className="card">
      <div className="div_star">
        <img src={star} alt="star" />
      </div>
      <section>
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offeing!</p>
      </section>
      <Puntos />
      <button className="submit">SUBMIT</button>
    </div>
  )
}