import React from 'react'
import useProtectedPage from '../../hooks/useProtectPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { goToPost } from '../../routes/cordinator'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {CreateNewPost} from '../../services/post'

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [form, onChange, Clear] = useForm({title: "", body:""})
    const feed = useRequestData([], `${BASE_URL}/posts`)
    

    const clickCard = (id) => {
        goToPost(history, id.id)
    }

    const feedCard = feed.map((card) => {
        if (card.commentCount === null) {
            return(
            <div
                key={card.id}
                onClick={() => clickCard(card)}
                >
                    <p>{card.username}</p>
                    <p>{card.title}</p>
                    <p>{card.body}</p>
                    <p>Comantário (0)</p>
                    <hr/>
                    <br/>
                </div>
            )   
        } else{
            return(
                <div
                key={card.id}
                onClick={() => clickCard(card)}
                >
                    <p>{card.username}</p>
                    <p>{card.title}</p>
                    <p>{card.body}</p>
                    <p>Comantarios ({card.commentCount})</p>
                    <hr/>
                    <br/>
                </div>
            )
        }
    })

    const onSubmitNewPost = (event) => {
        event.preventDefault()
        CreateNewPost(form, Clear)
    }
        


    return(
        <div>
            <h3>FeedPage</h3>
            <form onSubmit={onSubmitNewPost}>
                <input 
                placeholder='titulo'
                name={"title"}
                value={form.title}
                onChange={onChange}
                required
                />
                
                <input 
                placeholder='body'
                name={"body"}
                value={form.body}
                onChange={onChange}
                required
                />
                <button
                type={"submit"}
                >Postar</button>

            </form>
            {feedCard}
        </div>
    )
}

export default FeedPage;