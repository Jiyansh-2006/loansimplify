import  GoogleImg from "../assets/Google.webp"
import { Link } from "react-router-dom"
import './login.css'
const Login = () =>{
    return(
        <div className="login-container">
            <div className="form-title">Log in with</div>
            <button className="social-login">
                <img src={GoogleImg} alt="Google" className="social-icon" />
                Google
            </button>
            <p className="seperator"><span>or</span></p>
            <form action="#" className="login-form">
                 <div className="input-wrappup">
                    <input type="email" placeholder="Email Address" className="input-field" required/>
                    <i className="material-symbols-rounded">mail</i>
                 </div>
                 <div className="input-wrappup">
                    <input type="password" placeholder="Password" className="input-field" required/>
                    <i className="material-symbols-rounded">lock</i>
                 </div>
                 <Link to = '/forgotpassword' className="forgot-pass-link">Forgot Password</Link>
                 <Link to = '/dashboard' className="login-button">Login</Link>
            </form>
            <p className="signup-text">Don't Have Any Account?<Link to="/signup">Signup Now</Link></p>
        </div>
    )
}

export default Login