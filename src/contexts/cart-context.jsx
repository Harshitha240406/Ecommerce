import {createContext,useContext,useReducer} from 'react';
import CartReducer from '../reducers/CartReducer.js'
const Cartcontext=createContext();
export const CartProvider=({children})=>{
    const initialState={
        cart:[]
    }
    const [{cart},cartDispatch]=useReducer(CartReducer,initialState);
    return(
        <Cartcontext.Provider value={{cart,cartDispatch}}>
            {children}
        </Cartcontext.Provider>
        )
}
export const useCart=()=> useContext(Cartcontext);