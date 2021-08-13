import React, { Component } from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import NewQuestion from './views/NewQuestion';
import QuestionPage from './views/QuestionPage';
import LeaderBoard from './views/LeaderBoard';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <div>
            <Route path='/' exact component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/new' component={NewQuestion}/>
            <Route path='/leader' component={LeaderBoard}/>
            <Route path='/question/:id' component={QuestionPage}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
