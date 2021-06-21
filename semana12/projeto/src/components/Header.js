 import React from "react";
import { useHistory } from "react-router";
 import { goToLogin, goToFeed } from "../routes/cordinator";

 const Header = () => {
     const history = useHistory()
    return(
        <div>
            <button onClick={() =>  goToFeed(history)}>LabEddit</button>
            <button onClick={() =>  goToLogin(history)}>LogIn</button>
        </div>
    )
}
export default Header;