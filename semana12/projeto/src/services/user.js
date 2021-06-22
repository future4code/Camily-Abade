import {BASE_URL} from '../constants/urls'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { goToFeed } from '../routes/cordinator';
import { goToError } from '../routes/cordinator';


export const login = (form, Clear, history) => {
    axios.post(`${BASE_URL}/users/login`, form)
    .then((res) =>{ 
        localStorage.setItem("token", res.data.token)
        Clear()
        goToFeed(history)
    })
    .catch((err) => alert(err.response.data.message)
    )
}

export const signUp = (form, Clear, history) => {
    axios.post(`${BASE_URL}/users/signup`, form)
    .then((res) =>{ 
        localStorage.setItem("token", res.data.token)
        Clear()
        goToFeed(history)
    })
    .catch((err) => alert('deu erro')
    )
}