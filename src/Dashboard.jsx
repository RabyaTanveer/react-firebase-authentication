 import { auth } from "./firebase"
 import { signOut } from "firebase/auth"
 import { Navigate, useNavigate } from "react-router-dom"
 function Dashboard(){
    const navigate= useNavigate();
    const user= auth.currentUser
    const longoutHandler= async ()=>{
        try{
           await signOut(auth)
          navigate("/")
        }catch (error){
            console.log(error)
        }
    }
    return(
        <div className="Dash">

        <h1>My Dashboard</h1>
        <div className="profile-circle">
  {user?.email?.charAt(0).toUpperCase()}
</div>
       <h2>Welcome 👋</h2>
<p>{user?.email}</p>
        <button >Edit Profile</button>
        <button  onClick={logoutHandler}>log out</button>

</div>
    )
}
export default Dashboard