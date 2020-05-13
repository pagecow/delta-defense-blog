import React from 'react';

import { Link, Typography } from '@material-ui/core';


class Posts extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            photos: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    data
                })
            })

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    photos: data
                })
            })
    }

    handleGetImage = () => {
        return "https://picsum.photos/400/300"
    }

    render() {
        const { data, photos } = this.state;

        return(
            <div id="post-section">
                {data.map(e => {
                    console.log(e)
                    if(e && photos[e.id - 1]){
                        return(
                            <div className="post-container" onClick={() => this.props.handleRedirect(e.userId, e.id)} >
                                <img className="post-image" src={photos[e.id - 1].url} />
                                <div className="post-description" >
                                    <Typography variant="h5">{e.title}</Typography>
                                    <Typography variant="subtitle2">{e.body}</Typography>
                                    <Link color="primary" underline="always">READ MORE</Link>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default Posts;