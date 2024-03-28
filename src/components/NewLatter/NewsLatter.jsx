import React from 'react'
import style from "./styles.module.css";
import { IoIosSend } from "react-icons/io";

function NewsLatter() {
  return (
    <div className={style.newslatter}>
        <h1>Ofertas Exclusivas no seu E-mail</h1>
        <p>Assine nossa página e fique atualizado</p>
        <div>
            <input type='email' placeholder='Seu E-mail'/>
            <button><IoIosSend size={35}/></button>
        </div>
    </div>
  )
}

export default NewsLatter