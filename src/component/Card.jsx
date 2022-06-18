import React, {useState} from "react";
import "./Card.css"
import Puntos from "./Puntos/Puntos";
import star from "../assets/images/icon-star.svg";
import hero from "../assets/images/illustration-thank-you.svg"


export default function Card() {

  const [submit, setSubmit] = useState(false)
  const [rating, setRating] = useState()
  
  function handleSubmit(e) {
    e.preventDefault()
    setSubmit(true)
  }

  function handleRating(num) {
    setRating(num)
    console.log(rating)
  }


  function Send() {
    return (
      <div className="send">
        <div className="div_hero">
          <img src={hero} alt="hero" />
        </div>
        <div className="total">
          <span className="starts">You selected {rating} out of 5</span>
        </div>
        <h2>Thank you!</h2>
        <p className="para_thanks">We appreciate you taking the time to give a ratng. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    )
  }

  function Component() {
    return (
      <>
        <div className="div_star">
          <img src={star} alt="star" />
        </div>
        <section>
          <h2>How did we do?</h2>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offeing!</p>
        </section>
        <Puntos onRating={handleRating} />
        <button 
          className="submit" 
          type="submit"
          onClick={handleSubmit}
        >SUBMIT</button>
      </>
    )
  }


  return (
    <div className="card">
      {submit ? <Send /> : <Component />}
    </div>
  )
}