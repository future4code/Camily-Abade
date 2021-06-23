import React from 'react'
import useProtectedPage from '../../hooks/useProtectPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'


const FeedPage = () => {
    useProtectedPage()
    const feed = useRequestData([], `${BASE_URL}/posts`)
    console.log(feed)
    const feedCard = feed.map((card) => {
        return(
            <p>{card.body}</p>
        )
    })
    return(
        <div>
            <h3>FeedPage</h3>
            {feedCard}
        </div>
    )
}

export default FeedPage;