import "./Login.scss";
import { Link } from "react-router-dom";
const login = ()=>{
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam hic blanditiis provident cum, deserunt officia magnam voluptatibus eaque culpa voluptas dolores alias! Incidunt magni explicabo temporibus ex repellendus corrupti cumque?</p>
                    <span>Don't have account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder = "Password" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default login