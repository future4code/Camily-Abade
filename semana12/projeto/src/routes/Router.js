import React from 'react';
import FeedPage from '../pages/FeedPage/FeedPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import PostPage from '../pages/PostPage/PostPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import Error from '../pages/Error/Error';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Router = ({setButtonLoginLogOut}) => {
    return(
        <Switch>
            <Route exact path='/login' >
                <LoginPage setButtonLoginLogOut={setButtonLoginLogOut}/>
            </Route>

            <Route exact path='/cadastro'>
                <SignUpPage setButtonLoginLogOut={setButtonLoginLogOut}/>
            </Route>
            
            <Route exact path='/'>
                <FeedPage/>
            </Route>

            <Route exact path='/adicionar-post'>
                <PostPage/>
            </Route>

            <Route>
                <Error/>
            </Route>

        </Switch>
    )
}

export default Router;