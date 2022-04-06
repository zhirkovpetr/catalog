import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {ProductDataType} from "./api/api";
import {getProductTC} from "./redux/product-reducer";
import Product from "./component/product/product";

function App() {
  const dispatch = useDispatch();
  const products = useSelector<AppStateType, ProductDataType>((state) => state.productPage.productData);

  useEffect(() => {
    dispatch(getProductTC())
  }, [])

  return (
  <div>
    <div>
      <h1>Explore</h1>
      <p>Buy and sell digital fashion NFT art</p>
    </div>
    <div>
      {products.products.map(item => <Product key={item.product_id} item={item} />)}
    </div>
  </div>
  );
}

export default App;
