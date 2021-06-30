import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectPage';
import useRequestData from '../../hooks/useRequestData';
import styled from 'styled-components';
import useForm from '../../hooks/useForm'
import {CreateNewCommentary} from '../../services/post'



const Post = styled.div`
    color: red;
    background-color: black;
`

const DetailPostPage = () => {
    useProtectedPage()
    const params = useParams().id
    const postDetail = useRequestData({}, `${BASE_URL}/posts/${params}/comments`)

    const feed = useRequestData([], `${BASE_URL}/posts`)
    const [form, onChange, Clear] = useForm({body:""})

    const post = feed.length > 0 && feed.map((post) => {
        if(params === post.id){
            return(
                <Post>
                    <p>{post.username}</p>
                </Post>
            )
        }
    })



    const comentarios = postDetail.length > 0 && postDetail.map((post) => {
        return(
                <div>
                    <hr/>
                    <p>{post.username}</p>
                    <p>{post.body}</p>
                    
                </div>
            )
    })

    const onSubmitCommentary = (event) => {
        event.preventDefault()
        CreateNewCommentary(form, params, Clear)
    }
        


    return(
        <div>
            <h3>DetailPostPage</h3>
            {post}
            <form onSubmit={onSubmitCommentary}>
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
            {comentarios}
        </div>

    )
}

export default DetailPostPage;