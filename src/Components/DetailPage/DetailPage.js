import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Link, Typography } from '@material-ui/core';


class DetailPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            postTitle: "loading...",
            postDescription: "loading...",
            name: "loading...",
            email: "loading...",
            comments: [{body: "loading...", name: "loading...", email: "loading..."}],
        }
    }

    async componentDidMount() {
        if(this.props.userId !== 0 && this.props.postId !== 0){
        try {
            const response1 = await fetch(`http://jsonplaceholder.typicode.com/posts/${this.props.postId}`);
            const json1 = await response1.json();
            this.setState({postTitle: json1.title, postDescription: json1.body});

            const response2 = await fetch(`http://jsonplaceholder.typicode.com/users/${this.props.userId}`);
            const json2 = await response2.json();
            this.setState({name: json2.name, email: json2.email});

            const response3 = await fetch(`http://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`);
            const json3 = await response3.json();
            this.setState({comments: json3});
        } catch (error)  {
            console.log(error);
        }  
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