import axios from "axios"
import { useEffect, useState } from "react"

const useCreatePost = (initialCreate, url) => {
    const [create, setCreate] = useState(initialCreate)
    
    useEffect(() => {
        axios.post(url, {
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setCreate(res.data)
        })
        .catch((err) => {
            // ir para a pagina de erro
            console.log(err)
        })
    }, [url])
    return (create)
}

export default useCreatePost