import React, { useContext } from 'react'
import style from "./styles.module.css";
import star_icon from '../assets/star_icon.png'
import star_dull_icon from "../assets/star_dull_icon.png"
import { HomeContext } from '../../context/HomeContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(HomeContext)

  return (
    <div className={style.productdisplay}>
        <div className={style.productdisplay_left}>
            <div className={style.productdisplay_img_list}>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
            </div>
            <div className={style.productdisplay_img}>
                <img className={style.productdisplay_main_img} src={product.image}/>
            </div>
        </div>
        <div className={style.productdisplay_right}>
            <h1>{product.name}</h1>
            <div className={style.productdisplay_right_star}>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_dull_icon}/>
                <p>(122)</p>
            </div>
            <div className={style.productdisplay_right_prices}>
                <div className={style.productdisplay_right_price_old}>
                    ${product.old_price}
                </div>
                <div className={style.productdisplay_right_price_new}>
                    ${product.new_price}
                </div>
            </div>
            <div className={style.productdisplay_right_description}>
                flamengoooooooooooooooooooooooooooooooooooooooooooooo
            </div>
            <div className={style.productdisplay_right_size}>
                <h1>Tamanho</h1>
                <div className={style.productdisplay_right_sizes}>
                    <div>PP</div>
                    <div>P</div>
                    <div>M</div>
                    <div>G</div>
                    <div>GG</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>ADICIONAR AO CARRINHO</button>
            <p className={style.productdisplay_right_category}><span>Category :</span>Women, T-Shirt, Crop Top</p>
            <p className={style.productdisplay_right_category}><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay