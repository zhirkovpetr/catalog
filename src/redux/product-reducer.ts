import {ProductDataType, productListAPI} from "../api/api";
import {AppStateType, AppThunkType} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";

//Const
const GET_PRODUCT = 'GET_PRODUCT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

//State
const initialState = {
  productData: {
    products: [],
    creators: [],
    sortedProducts: [],
  } as ProductDataType,
  isFetching: false,
}

//Reducer
export const productReducer = (state: InitialStateType = initialState, action: ProductActionsTypes): InitialStateType => {
  switch (action.type) {
    case GET_PRODUCT: {
      return {
        ...state,
        productData: action.data
      }
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state, isFetching: action.isFetching
      }
    }
    default:
      return state;
  }
}

//Action type
type getProductAT = ReturnType<typeof getProductAC>
type toggleIsFetchingAT = ReturnType<typeof toggleIsFetchingAC>

export type ProductActionsTypes = getProductAT | toggleIsFetchingAT;

//Action creator
export const getProductAC = (data: ProductDataType) => {
  return {
    type: GET_PRODUCT, data
  } as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
  return {
    type: TOGGLE_IS_FETCHING, isFetching
  } as const
}

//Thunk creator
export const getProductTC = (): AppThunkType => {
  return async (dispatch: ThunkDispatch<AppStateType, unknown, ProductActionsTypes>) => {
    dispatch(toggleIsFetchingAC(true));
    const response= await productListAPI.getProductList()
    dispatch(toggleIsFetchingAC(false));
    dispatch(getProductAC(response.data.data))
  }
}

//Type
export type InitialStateType = typeof initialState;
