import { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import { goToLogin } from "../routes/cordinator";

const useProtectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
     const token = localStorage.getItem('token')
     if(!token){
        goToLogin(history)
        alert('Faça seu login ou crie uma conta')
     }   
    }, [history])
}

export default useProtectedPage 