import React from "react";
import style from "./styles.module.css";
import footer_logo from "../assets/logo1.png";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_logo}>
        <img src={footer_logo} />
        {/* <p></p> */}
      </div>
      <ul className={style.footer_links}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={style.footer_social_icon}>
        <div className={style.footer_icons_container}>
          <FaInstagram size={35} />
        </div>
        <div className={style.footer_icons_container}>
          <FaPinterest size={35} />
        </div>
        <div className={style.footer_icons_container}>
          <FaWhatsapp size={35} />
        </div>
      </div>
      <div className={style.footer_copyright}>
        <hr />
        <p>Copyright @ 2023 - All right Reserve</p>
      </div>
    </div>
  );
}

export default Footer;
