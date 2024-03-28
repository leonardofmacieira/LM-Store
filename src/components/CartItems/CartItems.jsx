import React, { useContext } from "react";
import style from "./styles.module.css";
import { HomeContext } from "../../context/HomeContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const {getTotalCartAmount ,all_product, cartItems, removeFromCart } = useContext(HomeContext);
  return (
    <div className={style.cartitems}>
      <div className={style.cartitems_format_main}>
        <p>Produtos</p>
        <p>Título</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
        <p>Remover</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return    <div>
                        <div className={style.cartitems_format}>
                        <img src={e.image} className={style.carticon_product_icon} />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className={style.cartitems_quantity}>{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img
                        className={style.cartitems_remove_icon}
                        src={remove_icon}
                        onClick={() => {
                            removeFromCart(e.id)}}
                        />
                        </div>
                        <hr />
                    </div>
          
        }
        return null
      })}
        <div className={style.caritems_down}>
            <div className={style.cartitems_total}>
                <h1>Total da Carteira:</h1>
                <div>
                    <div className={style.cartitems_total_items}>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className={style.cartitems_total_items}>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className={style.cartitems_total_items}>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>COMPRAR</button>
            </div>
            <div className={style.cartitems_promocode}>
                <p>Se tiver um cupom promocional, digite aqui:</p>
                <div className={style.cartitems_promobox}>
                    <input type="text" placeholder="Código do Cupom"/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CartItems;
