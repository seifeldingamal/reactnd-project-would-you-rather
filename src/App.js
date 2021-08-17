import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Login from './views/Login';
import LoadingBar from 'react-redux-loading';
import ProtectedRoute from './protected.route';
import Layout from './App.layout';

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
          <Switch>
            <Route 
              exact 
              path='/login'
              name='Login'
              render={(props) => <Login {...props} />}
            />
            <ProtectedRoute 
              path='/'
              name='App'
              component={Layout}  
            />
          </Switch>
        </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App)
