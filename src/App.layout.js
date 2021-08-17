import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home'
import LeaderBoard from './views/LeaderBoard'
import NewQuestion from './views/NewQuestion'
import NotFound from './views/NotFound'
import QuestionPage from './views/QuestionPage'

const Layout = () => {
    return (
        <div>
            <Nav/>
            <Switch>
                <Route path='/' exact name='Home' component={Home}/>
                <Route path='/add' name='New Question' component={NewQuestion}/>
                <Route path='/leaderboard' component={LeaderBoard}/>
                <Route path='/questions/:id' component={QuestionPage}/>
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </div>
    )
}

export default Layout
