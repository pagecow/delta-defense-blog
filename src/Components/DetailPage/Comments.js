import React from 'react';

class Comments extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userId: 0,
            postId: 0,
        }
    }

    render() {
        return(
            <div id="comment-section">

            </div>
        )
    }
}

export default Comments;