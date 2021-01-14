import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink,Switch } from 'react-router-dom';

import asynccomponent from '../../hoc/asynccomponent'
import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost'

const AsyncNewPost = asynccomponent(() => {
    return import('./NewPost/NewPost');
});


class Blog extends Component {
    state = {
        auth: true
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact activeStyle={{
                                color: '#fa923f',
                                textDecoration:'underline'
                            }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} activeStyle={{
                                color: '#fa923f',
                                textDecoration:'underline'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/" component={Posts} />
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not found</h1>}/>
             
                    {/*  */}
                </Switch>

            </div>
        );
    }
}

export default Blog;