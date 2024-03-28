import React from "react";
import style from "./styles.module.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_img from "../assets/hero_image.png"
import camisas from "../assets/camisas.png"

function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.hero_left}>
        <h2>Vista seu Manto !!</h2>
        <div>
          <div className={style.hero_hand_icon}>
            <p>Novas</p>
            <img src={hand_icon} />
          </div>
          <p>Camisas</p>
          <p>Em estoque</p>
        </div>
        <div className={style.hero_latest_btn}>
          <div>Última Coleção</div>
          <img src={arrow_icon} />
        </div>
      </div>
      <div className={style.hero_right}>
        <img src={camisas}/>
      </div>
    </div>
  );
}

export default Hero;
