import { _saveQuestionAnswer, _saveQuestion } from '../utls/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

function saveAnswer ({id, authedUser, answer}) {
    return {
        type: SAVE_ANSWER,
        id,
        authedUser,
        answer,
    }
}

export function handleSaveQuestion (question) {
    return (dispatch, getState) =>{
        const { authedUser } = getState();
        question.author = authedUser

        dispatch(showLoading())

        return _saveQuestion(question)
            .then((question) => dispatch(addQuestion(question)))
                .then(() => dispatch(hideLoading()))
    }
}

export function handleSaveAnswer ({qid, answer})  {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading())

        return _saveQuestionAnswer({authedUser, qid, answer})
            .then((question) => dispatch(saveAnswer({authedUser, qid, answer})))
                .then(() => dispatch(hideLoading()))
    }
}