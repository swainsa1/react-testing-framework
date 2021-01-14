import React, { Component } from 'react';

import './NewPost.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'ssantosh',
        submitted: false
    }

    componentDidMount () {
        // If unauth => this.props.history.replace('/posts');
        console.log( this.props );
    }

    addNewPostHandler(){
        console.log("NewPost:: inside the handler");
        const data = {
            title: this.state.title,
            body: this.state.content,
            author:this.state.author
        };
        axios.post( '/posts', data )
        .then( response => {
            console.log( response );
            this.props.history.replace('/posts');
            // this.setState( { submitted: true } );
        } );

    }
    render () {
        let redirect = null;
        if(this.state.submitted){
            redirect = <Redirect to="/posts" />;
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="ssantosh">Santosh SWain</option>
                    <option value="ssamarth">Siyona Swain</option>
                    <option value="ssiyona">Siyona Swain</option>
                </select>
                <button onClick ={()=> this.addNewPostHandler()} >Add Post</button>
            </div>
        );
    }
}

export default NewPost;