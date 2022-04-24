import React from "react";
import S from "./styles.module.css"
import star from "../assets/images/icon-star.svg"


export default function Card(props) {
  return (
    <section clasName="card">
      <img className={S.image} src={star} alt="" />
    </section>
  )
}