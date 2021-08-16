import { _saveQuestionAnswer, _saveQuestion } from '../utls/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
import { ADD_QUESTION, SAVE_ANSWER } from './shared'

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

function saveAnswer ({qid, answer, authedUser}) {
    return {
        type: SAVE_ANSWER,
        qid,
        authedUser,
        answer,
    }
}

export function handleSaveQuestion (question) {
    return (dispatch, getState) =>{
        const { authedUser } = getState()
        question.author = authedUser

        dispatch(showLoading())

        return _saveQuestion(question)
            .then((question) => dispatch(addQuestion(question)))
                .then(() => dispatch(hideLoading()))
    }
}

export function handleSaveAnswer (qid, answer)  {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const info = {
            authedUser, 
            qid, 
            answer,
        }
        dispatch(showLoading())

        return _saveQuestionAnswer(info)
            .then(() => dispatch(saveAnswer({qid, answer, authedUser})))
                .then(() => dispatch(hideLoading()))
    }
}