import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Nav from './components/Nav'
import Home from './views/Home';
import Login from './views/Login';
import NewQuestion from './views/NewQuestion';
import QuestionPage from './views/QuestionPage';
import LeaderBoard from './views/LeaderBoard';
import LoadingBar from 'react-redux-loading';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
        <LoadingBar />
        <div className="container">
          <Nav/>
          <Route path='/home' component={Home}/>
          <Route path='/new' component={NewQuestion}/>
          <Route path='/leader' component={LeaderBoard}/>
          <Route path='/questions/:id' component={QuestionPage}/>
          <Route path='/' exact component={Login}/>
        </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default connect()(App)
