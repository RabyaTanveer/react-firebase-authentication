import { auth } from "./firebase"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
function LoginPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const submitHandler = async (e) => {
        e.preventDefault();

        if (user.email && user.password) {
            try {
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    user.email,
                    user.password
                );

                console.log(userCredential);
                navigate("/dashboard");
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Please fill all fields");
        }
    };

    return (
        <div className="login">  {/*left-side*/}
            <div className="log-left" >
                <h1 style={{color:"brown"}}>Hello Friend!</h1>
                <p style={{color:"brown"}} > Sign up if new </p>
             <Link to="/signup">
                <button className="log-btn">Sign Up</button></Link>
            </div>
            <div className="log-right" >
                <form onSubmit={submitHandler}>
                 <h1>Login Here</h1>
                    <input type="email" placeholder="email" name="email" value={user.email} onChange={changeHandler} />
                    <input type="password" placeholder="password" name="password" value={user.password} onChange={changeHandler} />
                    <button type="submit"
                     className="log-btn2">Login</button>
                </form>
            </div>
        </div>


    )
}
export default LoginPage