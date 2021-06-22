import React from 'react'
import useProtectedPage from '../../hooks/useProtectPage'


const FeedPage = () => {
    useProtectedPage()
    return(
        <div>
            <h3>FeedPage</h3>
        </div>
    )
}

export default FeedPage;