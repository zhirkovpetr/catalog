import React from "react";
import {ProductsType} from "../../api/api";
import productImage from "../../assets/images/png/image.png"
import style from "./Product.module.scss";

type ProductPropsType = {
  item: ProductsType;
}

const Product = React.memo(function Product(props: ProductPropsType) {
    const {item} = props;
    return (
      <div className={style.itemBlock}>
        <div className={style.itemBlock__cover}>
          <div className={style.text}>created by</div>
          <div className={style.textAuthor}>{item.created_by.display_name}</div>
        </div>
        <div className={style.itemBlock__itemName}>
          <div>Digital Addiction</div>
          <div className={style.itemName__text}>Number Seven</div>
        </div>
        <img className={style.card__img} src={productImage} alt="product"/>
        <div className={style.itemBlock__information}>
          <div className={style.itemBlock__available}>
            <div className={`${style.available} ${style.text}`}>available</div>
            <div className={style.quantity}>{item.quantity_available} of {item.quantity}</div>
          </div>
          <div className={style.itemBlock__price}>
            <div className={`${style.price} ${style.text}`}>price</div>
            <div className={style.priceETH}>{item.initial_price} ETH</div>
          </div>
        </div>
      </div>
    );
  }
)

export default Product;
