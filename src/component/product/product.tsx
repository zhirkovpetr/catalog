import React from "react";
import {ProductsType} from "../../api/api";
import productImage from "../../assets/images/png/image.png"

type ProductPropsType = {
  item: ProductsType;
}

const Product = React.memo(function Product(props: ProductPropsType) {
  const { item } = props;
  return (
    <div>
      <div>
        <img src={productImage} alt="product image"/>
        <p>
          <span>created by</span>
          <span>{item.created_by.display_name}</span>
        </p>
        <p>
          <span>Digital addiction</span>
          <span>Number Seven</span>
        </p>
      </div>

      <div>
        <div>
          <span >available</span>
          <p>{item.quantity_available} of {item.quantity}</p>
        </div>
        <div>
          <span >price</span>
          <p>{item.initial_price} ETH</p>
        </div>
      </div>
    </div>
  );
}
)

export default Product;
