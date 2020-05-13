import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './Components/HomePage/HomePage';
import DetailPage from './Components/DetailPage/DetailPage';
import AuthorPage from './Components/AuthorPage/AuthorPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenUserId: 0,
      chosenPostId: 0,
    }
  }

  handleChosenIds = (userId, postId) => {
    console.log("handleChosenIds triggered", userId, postId)
    this.setState({
      chosenUserId: userId,
      chosenPostId: postId,
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <HomePage handleChosenIds={this.handleChosenIds} />
          </Route>
          <Route path='/detail-page'>
            <DetailPage userId={this.state.chosenUserId} postId={this.state.chosenPostId} />
          </Route>
          <Route path='/author-page'>
            <AuthorPage userId={this.state.chosenUserId} postId={this.state.chosenPostId} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
