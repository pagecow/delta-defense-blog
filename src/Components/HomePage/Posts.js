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
            .catch(err => console.log(err))

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    photos: data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { data, photos } = this.state;

        return(
            <div id="post-section">
                {data.map(e => {
                    console.log(e)
                    if(e && photos[e.id - 1]){
                        return(
                            <Link color="primary" underline="none" onClick={() => this.props.handleChosenIds(e.userId, e.id)} href="/#/detail-page">
                                <div className="post-container" key={e.id}>
                                    <img className="post-image" src={photos[e.id - 1].url} />
                                    <div className="post-description" >
                                        <Typography variant="h5">{e.title}</Typography>
                                        <Typography variant="subtitle2">{e.body}</Typography>
                                        <Link color="primary" underline="always">READ MORE</Link>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    }
}

export default Posts;