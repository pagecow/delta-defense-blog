import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Link, Typography } from '@material-ui/core';


class DetailPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            username: "",
            email: "",
            address: "",
            phone: "",
            website: "",
            companyName: "",
            companyCatchPhrase: "",
            companyBs: "",
        }
    }

    componentDidMount() {
        if(this.props.userId !== 0 && this.props.postId !== 0){
            fetch(`http://jsonplaceholder.typicode.com/users/${this.props.userId}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        address: `${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`,
                        phone: data.phone,
                        website: data.website,
                        companyName: data.company.name,
                        companyCatchPhrase: data.company.catchPhrase,
                        companyBs: data.company.bs,
                    })
                })
                .catch(err => console.log(err))
        }
    }

    render() {
        const { name, username, email, address, phone, website, companyName, companyCatchPhrase, companyBs } = this.state;

        return(
            <div id="post-page">
                <Header />
                <body>
                    <div className="post-detail-container">
                        <Typography variant="h3">{name}</Typography>
                        <Typography><strong>Username:</strong> {username}</Typography>
                        <Typography><strong>Email:</strong> {email}</Typography>
                        <Typography><strong>Address:</strong> {address}</Typography>
                        <Typography><strong>Phone Number:</strong> {phone}</Typography>
                        <Typography><strong>Website:</strong> {website}</Typography>
                        <Typography><strong>Company Name:</strong> {companyName}</Typography>
                        <Typography><strong>Company Catch Phrase:</strong> {companyCatchPhrase}</Typography>
                        <Typography><strong>Company BS:</strong> {companyBs}</Typography>
                    </div>
                </body>
                <Footer />
            </div>
        )
    }
}

export default DetailPage;