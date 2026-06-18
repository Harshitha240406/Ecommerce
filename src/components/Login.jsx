import {useLogin} from '../contexts/login-context';
import userLogin from '../api/auth'
import {useNavigate} from 'react-router-dom';
const Login=()=>{
    const {LoginDispatch,email,password,token}=useLogin();
    const navigate=useNavigate();
    const onFormSubmit=async (e)=>{
        e.preventDefault();
        const data = await userLogin(email, password);
        if (data && data.access_token) {
            LoginDispatch({
                type: "TOKEN",
                payload: {
                    token: data.access_token
                }
            });
            navigate('/')
        } else {
            console.error('Login failed:', data);
        }
    }
    const onEmailChange=(e)=>{
       LoginDispatch(
        {
            type:"EMAIL",
            payload:{
                value:e.target.value
            }
        }
       )
    }
    const onPasswordChange=(e)=>{
       LoginDispatch(
        {
            type:"PASSWORD",
            payload:{
                value:e.target.value
            }
        }
       )
    }
    return(
        <form onSubmit={onFormSubmit} className="login-form">
            <h2>Login</h2>
           <div className="form-group">
            <label>Email</label>
            <input onChange={onEmailChange} type="email" required placeholder="Enter email"/>
           </div>
            <div className="form-group">
            <label>Password</label>
            <input onChange={onPasswordChange} type="password" required placeholder="Enter password"/>
           </div>
           <button type="submit" className="submit-btn bg-color-800">
            Login
           </button>
        </form>
    )
}
export default Login;