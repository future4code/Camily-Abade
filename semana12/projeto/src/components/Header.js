 import React, { useState } from "react";
import { useHistory } from "react-router";
 import { goToLogin, goToFeed } from "../routes/cordinator";

 const Header = () => {
     const history = useHistory()
     const token = localStorage.getItem('token')
     const [buttonLoginLogOut, setButtonLoginLogOut] = useState(token ? 'LogOut' : 'LogIn'  ) 
    return(
        <div>
            <button onClick={() =>  goToFeed(history)}>LabEddit</button>
            <button onClick={() =>  goToLogin(history)}>{buttonLoginLogOut}</button>
        </div>
    )
}
export default Header;