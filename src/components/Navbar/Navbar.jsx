import React, { useContext, useState } from "react";
import style from "./styles.module.css";
import logo from "../assets/logo2.png";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HomeContext } from "../../context/HomeContext";

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(HomeContext)

  return (
    <div className={style.navbar}>
      <div className={style.nav_logo}>
        <img src={logo} />
        <p>Store</p>
      </div>
      <ul className={style.nav_menu}>
        <li onClick={() => {setMenu("home")}}><Link style={{textDecoration: 'none',  color: 'aliceblue'}} to="/">Home</Link> {menu==="home"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("futebol")}}><Link style={{textDecoration: 'none',  color: 'aliceblue'}} to="/futebol">Futebol</Link> {menu==="futebol"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("nba")}}><Link style={{textDecoration: 'none', color: 'aliceblue'}} to="/nba">NBA</Link> {menu==="nba"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("retro")}}><Link style={{textDecoration: 'none', color: 'aliceblue'}} to="/retro">Retrô</Link> {menu==="retro"?<hr/>:<></>}</li>
      </ul>
      <div className={style.nav_login_cart}>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><FaCartShopping size={30} color="aliceblue"/></Link>
        <div className={style.nav_cart_count}>{getTotalCartItems}</div>
      </div>
    </div>
  );
};

export default Navbar;
