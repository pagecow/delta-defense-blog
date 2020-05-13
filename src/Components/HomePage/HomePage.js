import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Link, Container, Typography } from '@material-ui/core';

const Posts = React.lazy(() => import('./Posts'));

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            topUserId: 0,
            topPostId: 0,
            topTitle: "",
            topDescription: "",
            chosenUserId: 0,
            chosenPostId: 0,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    topUserId: data.userId,
                    topPostId: data.id,
                    topTitle: data.title,
                    topDescription: data.body,
                })
            })
    }

    render() {
        const { topUserId, topPostId, topTitle, topDescription } = this.state;

        return(
            <div id="home-page">
                <Header />
                <body>
                    <section id="top-post">
                        <div className="top-post-left" maxWidth="sm">
                            <Typography variant="h3">{topTitle}</Typography>
                            <Typography variant="h5">{topDescription}...</Typography>
                            <Link color="primary" underline="always" href="/#/detail-page">READ MORE</Link>
                        </div>
                        <img src="https://picsum.photos/500" />
                    </section>
                </body>
                <Footer />
            </div>
        )
    }
}

export default HomePage;