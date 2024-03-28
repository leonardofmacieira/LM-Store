import React from 'react'
import style from "./styles.module.css";
import exclusive_image from "../assets/exclusive_image.png"

function Offers() {
  return (
    <div className={style.offers}>
        <div className={style.offers_left}>
            <h1>Exclusivo</h1>
            <h1>Ofertas Para Você</h1>
            <p>SOMENTE NOS PRODUTOS MAIS VENDIDOS!!</p>
            <button>Verifique Agora</button>
        </div>
        <div className={style.offers_right}>
            <img src={exclusive_image}/>
        </div>
    </div>
  )
}

export default Offers