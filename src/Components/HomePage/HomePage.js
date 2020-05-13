import React, { Suspense } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Link, Typography } from '@material-ui/core';

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
            redirect: false,
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

    handleRedirect = (userId, postId) => {
        this.setState({
            chosenUserId: userId,
            chosenPostId: postId,
        })

        if(this.state.chosenUserId !== 0 && this.state.chosenPostId !== 0){
            this.setState({
                redirect: true,
            })
        }
    }

    render() {
        const { topUserId, topPostId, topTitle, topDescription, redirect } = this.state;

        if(redirect === true){
            return <Redirect to="/#/detail-page" />
        }

        return(
            <div id="home-page">
                <Header />
                <body>
                    <>
                        <section id="top-post">
                            <div className="top-post-left">
                                <Typography variant="h3">{topTitle}</Typography>
                                <Typography variant="subtitle1">{topDescription}...</Typography>
                                <Link color="primary" underline="always" onClick={() => this.handleRedirect(topUserId, topPostId)} href="/#/detail-page">READ MORE</Link>
                            </div>
                            <img src="https://picsum.photos/500/500" />
                        </section>
                        <section id="top-post-2">
                            <img src="https://picsum.photos/1000/300" />
                            <div className="top-post-left">
                                <Typography variant="h5">{topTitle}</Typography>
                                <Typography variant="subtitle2">{topDescription}...</Typography>
                                <Link color="primary" underline="always" onClick={() => this.handleRedirect(topUserId, topPostId)} href="/#/detail-page">READ MORE</Link>
                            </div>
                        </section>
                    </>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Posts handleRedirect={this.handleRedirect}/>
                    </Suspense>
                </body>
                <Footer />
            </div>
        )
    }
}

export default HomePage;