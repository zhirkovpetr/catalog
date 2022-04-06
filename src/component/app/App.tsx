import React, {useEffect} from 'react';
import style from "./App.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getProductTC} from "../../redux/product-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ProductDataType} from "../../api/api";
import Product from "../product/product";

function App() {
  const dispatch = useDispatch();
  const products = useSelector<AppStateType, ProductDataType>((state) => state.productPage.productData);

  useEffect(() => {
    dispatch(getProductTC())
  }, [])

  return (
  <div className={style.mainBlock}>
    <div className={style.productsBlock}>
    <div className={style.headerBlock}>
      <h1 className={style.headerBlock__name}>Explore</h1>
      <p className={style.headerBlock__possibility}>Buy and sell digital fashion NFT art</p>
    </div>
    <div className={style.productBlock}>
      {products.products.map(item => <Product key={item.product_id} item={item} />)}
    </div>
    </div>
  </div>
  );
}

export default App;
