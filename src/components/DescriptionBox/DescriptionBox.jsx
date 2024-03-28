import React from 'react'
import style from "./styles.module.css";

const DescriptionBox = () => {
  return (
    <div className={style.descriptionbox}>
        <div className={style.descriptionbox_navigator}>
            <div className={style.descriptionbox_nav_box}>Description</div>
            <div className={style.descriptionbox_nav_box_fade}>Reviews (122)</div>
        </div>
        <div className={style.descriptionbox_description}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus illo consequuntur maxime placeat quos, adipisci temporibus delectus molestias atque, explicabo aliquam molestiae eveniet magnam natus totam cum rem aliquid sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, asperiores totam! Fugiat, fuga! Quae ab voluptas labore accusamus fugit, delectus nemo aliquid iure facilis fugiat, ipsa recusandae possimus sequi cum!</p>
        </div>
    </div>
  )
}

export default DescriptionBox