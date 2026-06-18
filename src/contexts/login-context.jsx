import {createContext,useContext,useReducer} from 'react';
import LoginReducer from '../reducers/LoginReducer.js'
const Logincontext=createContext();
export const LoginProvider=({children})=>{
    const initialState={
       email :'',
       password: '',
       token:''
    }
    const [{email,password,token},LoginDispatch]=useReducer(LoginReducer,initialState);
    return(
        <Logincontext.Provider value={{email,password,token,LoginDispatch}}>
            {children}
        </Logincontext.Provider>
        )
}
export const useLogin=()=> useContext(Logincontext);
export const userLogin=()=> useContext(Logincontext);
export default Logincontext;