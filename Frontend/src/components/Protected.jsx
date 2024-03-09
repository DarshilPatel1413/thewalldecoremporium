import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


export const selectLoggedInUser = (state)=>state.auth.loggedInUser;

export const Protected = ({children}) => {
    const user = useSelector(selectLoggedInUser)
    if(!user) {
        return <Navigate to='/login' replace={true}></Navigate>
    }     
    
return children

}