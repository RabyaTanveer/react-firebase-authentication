import { useState } from "react"
import { auth } from "./firebase"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Navigate } from "react-router-dom"

function SignupPage() {
  const navigate= useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    })
    const changeHandler = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    const submitHandler= async (e)=>{
        e.preventDefault();
        if(user.username && user.email && user.password) 
         try {  const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
        );console.log(userCredential)
        navigate("/dashboard");
    }
        catch(error){console.log(error);}
     else {
        alert("please fill the required inputs")
    }
}
    return (

        <div className="signup">
            {/*left-side*/}
            <div className="sign-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
               
                 <Link to="/"><button className="btn2">Sign in</button></Link>
            </div>
            {/*right-side*/}
            <div className="sign-right" >
                <form onSubmit={submitHandler}>
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Username" name="username"  value={user.username}onChange={changeHandler}/>
                    <input type="email" placeholder="email"  name="email" value={user.email} onChange={changeHandler}/>
                    <input type="password" placeholder="password" name="password" value={user.password} onChange={changeHandler} />
                    <button className="btn">Sign up</button>
                </form>
            </div>
        </div>

    )
}
export default SignupPage;