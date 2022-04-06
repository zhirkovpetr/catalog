import {AppStateType} from "../../redux/redux-store";
import {useSelector} from "react-redux";
import {ProductDataType} from "../../api/api";

interface AppSelectorType {
  products: ProductDataType;
  isFetching: boolean;
}

const appSelector = (state: AppStateType) => {
  return {
    products: state.productPage.productData,
    isFetching: state.productPage.isFetching,
  };
};

const useAppSelector = (): AppSelectorType => {
  return useSelector<AppStateType, AppSelectorType>(appSelector);
};

export default useAppSelector;
