import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const CreateVote = (id, body) => {
    axios.post(`${BASE_URL}/posts/${id}/votes`, body,  {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {alert(res.request.response)
    })
    .catch((err) => console.log(err))

}


export const ChangeVotePost = (id, body) => {
    axios.post(`${BASE_URL}/posts/${id}/votes`, body,  {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {alert(res.request.response)
    })
    .catch((err) => console.log(err))

}