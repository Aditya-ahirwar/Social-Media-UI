import "./Register.scss";
import { Link } from "react-router-dom";
const login = ()=>{
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam hic blanditiis provident cum, deserunt officia magnam voluptatibus eaque culpa voluptas dolores alias! Incidunt magni explicabo temporibus ex repellendus corrupti cumque?</p>
                    <span>Already have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder = "Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default login