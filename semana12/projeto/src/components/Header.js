import React, { useState } from "react";
import { useHistory } from "react-router";
import { goToLogin, goToFeed } from "../routes/cordinator";

 const Header = ({buttonLoginLogOut, setButtonLoginLogOut}) => {
    const token = localStorage.getItem('token')
    const history = useHistory()

   
    const logOut = () => {
        localStorage.removeItem("token")
    }

     const buttonAction = () => {
        if(token){
            logOut()
            setButtonLoginLogOut('LogIn')
            goToLogin(history)
        }else{
            goToLogin(history)
        }
    }

    return(
        <div>
            <button onClick={() => goToLogin (history)}>LabEddit</button>
            <button onClick={buttonAction}>{buttonLoginLogOut}</button>
        </div>
    )
}
export default Header;