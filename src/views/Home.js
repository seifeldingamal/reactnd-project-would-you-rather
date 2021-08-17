import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import HomeQuestion from '../components/HomeQuestion'

class Home extends Component {
    
    state = {
        active: true,
    }

    handleActive = () => {
        const current = this.state.active
        this.setState({
            active: !current
        })
    }
    
    render() {

        if (this.props.authedUser === null) {
            return <Redirect to='/'/>
        }
        
        const { active } = this.state 
        const { answered, unanswered } = this.props
        
        return (
            <div>
                <div className='top'>
                    <ul>
                        <li onClick={this.handleActive} className={active ? 'home-active' : ''}>Answered Questions</li>
                        <li onClick={this.handleActive} className={!active ? 'home-active' : ''}>unanswered Questions</li>
                    </ul>
                </div>
                <div  className='component'>
                    {
                        active 
                        ? 
                        answered.map((id) => (
                            <HomeQuestion key={id} id={id}/>
                        ))
                        :
                        unanswered.map((id) => (
                            <HomeQuestion key={id} id={id}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users, questions }) {
    
    if (authedUser !== null) {
        const unanswered = Object.keys(questions).filter((id) => !users[authedUser].answers.hasOwnProperty(id)).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        const answered = Object.keys(questions).filter((id) => users[authedUser].answers.hasOwnProperty(id)).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    
        return {
            authedUser,
            unanswered,
            answered,
        }
    } else {
        return {
            authedUser
        }
    }
}

export default connect(mapStateToProps)(Home)
