import React from 'react';

import Header from '../Header/Header';
import Posts from './Posts';
import Footer from '../Footer/Footer';

import { Button, Container, Typography, makeStyles } from '@material-ui/core';

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userId: 0,
            postId: 0,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        return(
            <div id="home-page">
                <Header />
                <body>

                </body>
                <Footer />
            </div>
        )
    }
}

export default HomePage;