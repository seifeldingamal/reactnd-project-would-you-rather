import { _saveQuestionAnswer, _saveQuestion } from '../utls/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

function saveAnswer (id, authedUser, answer) {
    return {
        type: SAVE_ANSWER,
        id,
        authedUser,
        answer,
    }
}