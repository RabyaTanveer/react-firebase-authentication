
import { auth } from "./firebase";
import { Navigate } from "react-router-dom";
function PrivateRoute ({children}){
   if(auth.currentUser)
   {return children}
   else{
   return <Navigate to="/"/>
   }
   
}
export default PrivateRoute