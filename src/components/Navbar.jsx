import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {userLogin} from '../contexts/login-context';
const Navbar=()=>{
    const navigate=useNavigate();
    const [isAccountDropDownOpen,setisAccountDropDownOpen]=useState();
    const {token,LoginDispatch}=userLogin();
    const onLoginClick=()=>{
        if(!token?.access_token){
            navigate('/auth/login');
        }else{
            LoginDispatch(
                {
                    type:"LOGOUT",
                }
            )
            navigate('/auth/login');
        }
        
    }
    return(
        <>
        <header className="flex items-center justify-between bg-green-800  py-2  text-slate-50">
            <div >
                <h1 onClick={()=>navigate("/")} className="text-5xl">Shop It</h1>
            </div>
            <nav className=" ml-auto flex items-center gap-6">
                <span class="material-symbols-outlined text-5xl hover:cursor-pointer">
                favorite
                </span>
                <span onClick={()=>navigate("/cart")} class="material-symbols-outlined text-5xl hover:cursor-pointer">
                shopping_cart
                </span>
                <div className="relative " >
                    <span onClick={()=>{setisAccountDropDownOpen(!isAccountDropDownOpen)}} class="material-symbols-outlined text-5xl hover:cursor-pointer">
                account_circle
                </span>
                {
                    isAccountDropDownOpen && <div className="absolute bg-green-400">
                    <button onClick={onLoginClick}>{
                        
                      token ?'Logout':"Login"
                    }
                    </button>
                </div>
                }
               
                </div>
                
            </nav>
        </header>
        </>
    )
}
export default Navbar;