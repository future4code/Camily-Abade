import React, { useEffect } from 'react'
import useProtectedPage from '../../hooks/useProtectPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { goToPost } from '../../routes/cordinator'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {CreateNewPost} from '../../services/post'
import { CreateVote, ChangeVotePost } from '../../services/voteSum'


const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [form, onChange, Clear] = useForm({title: "", body:""})
    const feed = useRequestData([], `${BASE_URL}/posts`)

    const clickCard = (id) => {
        goToPost(history, id.id)
    }


    const theVote = (valueVote, id) => {
        if (valueVote === null){
            CreateNewVote(id)
        }else{
            ChangeVote(id)
        }
    }

    const CreateNewVote = (id) => {
        const body = {"direction": 1}
        CreateVote(id, body)
    }

    const ChangeVote = (id) => {
        const body = {"direction": -1}
        ChangeVotePost(id, body)
    }

    const feedCard = feed.map((card) => {
            return(
            <div
                key={card.id}
                >
                    <p>{card.username}</p>
                    <p>{card.title}</p>
                    <p>{card.body}</p>
                    <p onClick={() => clickCard(card)}>Comentário {card.commentCount ? card.commentCount : 0}</p>
                    <p onClick={() => theVote(card.voteSum, card.id)}>Vote+</p>

                    <p>{card.voteSum}</p>
                    <p>Vote-</p>

                    <hr/>
                    <br/>
                </div>
            )   
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