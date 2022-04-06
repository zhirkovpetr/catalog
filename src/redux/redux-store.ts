import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk'
import {ProductActionsTypes, productReducer} from "./product-reducer";



export type AppStateType = ReturnType<typeof rootReducer>
export type storeType= typeof store;

let rootReducer= combineReducers({
    productPage: productReducer,
});

type AppActionsType = ProductActionsTypes;

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    AppActionsType>


declare global {
    interface Window {
        REDUX_DEVTOOLS_EXTENSION_COMPOSE?: typeof compose
    }
}

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
