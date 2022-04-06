import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import {getProductTC, sortProductAC} from "../../redux/product-reducer";
import {Product} from "../product";
import {Preloader} from "../preloader";
import useAppSelector from "./useAppSelector";
import {ProductsType} from "../../api/api";
import style from "./app.module.scss";

function App() {
  const [filter, setFilter] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {products, isFetching} = useAppSelector();
const itemProduct = (item: ProductsType) => <Product key={item.product_id} item={item}/>

  useEffect(() => {
    dispatch(getProductTC())
  }, [dispatch])

  const onChangeFilter = () => {
    setFilter(!filter);
    dispatch(sortProductAC());
  }

  return (
    <div className={style.mainBlock}>
      {
        isFetching ? <Preloader/> :
          <div className={style.productsBlock}>
            <div className={style.headerBlock}>
              <h1 className={style.headerBlock__name}>Explore</h1>
              <p className={style.headerBlock__possibility}>Buy and sell digital fashion NFT art</p>
              <p className={style.headerBlock__checkbox}><input
                type="checkbox" checked={filter} onChange={onChangeFilter}/> in stock</p>
            </div>
            <div className={style.productBlock}>
              {filter ? products.sortedProducts.map(itemProduct) : products.products.map(itemProduct)}
            </div>
          </div>
      }
    </div>
  );
}

export default App;
