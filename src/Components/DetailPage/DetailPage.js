import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Link, Typography } from '@material-ui/core';


class DetailPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            postTitle: "",
            postDescription: "",
            name: "",
            email: "",
            comments: [],
        }
    }

    componentDidMount() {
        if(this.props.userId !== 0 && this.props.postId !== 0){
            fetch(`http://jsonplaceholder.typicode.com/posts/${this.props.postId}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        postTitle: data.title,
                        postDescription: data.body,
                    })
                })
                .catch(err => console.log(err))

            fetch(`http://jsonplaceholder.typicode.com/users/${this.props.userId}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        name: data.name,
                        email: data.email,
                    })
                })
                .catch(err => console.log(err))

            fetch(`http://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        comments: data,
                    })
                })
                .catch(err => console.log(err))
        }
    }

    render() {
        const { postTitle, postDescription, name, email} = this.state;

        let comments;
        if(!this.state.comments){
            comments = null;
        } else {
            comments = this.state.comments
        }
        console.log(comments);

        return(
            <div id="post-page">
                <Header />
                <body>
                    <div className="post-detail-container">
                        <Typography variant="h3">{postTitle}</Typography>
                        <Typography>{postDescription}</Typography>
                        <div className="author-container">
                           <Link underline="always" href="/#/author-page"> 
                                <Typography><strong>Post Author:</strong> {name}</Typography>
                            </Link>
                            <Typography><strong>Post Email:</strong> {email}</Typography>
                        </div>
                    </div>

                    <Typography variant="h5">Comments:</Typography>
                    {comments.map(e => {
                        return(
                            <div className="comments-container">
                                <Typography>{e.body}</Typography>
                                <Typography variant="subtitle1"><strong>Name:</strong> {e.name}</Typography>
                                <Typography variant="subtitle1"><strong>Email:</strong> {e.email}</Typography>
                            </div>  
                        )
                    })}
                </body>
                <Footer />
            </div>
        )
    }
}

export default DetailPage;