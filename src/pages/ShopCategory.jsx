import React, { useContext } from "react";
// import "./CSS/ShopCategory.css";
import { HomeContext } from "../context/HomeContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/Item/Item";
import ShopCategorys from "./CSS/ShopCategory.module.css"


function ShopCategory(props) {
  const { all_product } = useContext(HomeContext);
  return (
    <div className={ShopCategorys.shop_category}>
      <img className={ShopCategorys.shopcategory_banner} src={props.banner} />
      <div className={ShopCategorys.shopcategory_indexSort}>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className={ShopCategorys.shopcategory_sort}>
          Sort by <img src={dropdown_icon} />
        </div>
      </div>
      <div className={ShopCategorys.shopcategory_products}>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          else {
            return null;
          }
        })}
      </div>
      <div className={ShopCategorys.shopcategory_loadmore}>
        Explore Mais
      </div>
    </div>
  );
}

export default ShopCategory;
