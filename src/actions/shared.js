import { hideLoading, showLoading } from "react-redux-loading"
import { _getQuestions, _getUsers } from "../utls/_DATA"

export const RECEIVE_DATA = 'RECEIVE_DATA'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

function receiveData (questions, users) {
    return {
        type: RECEIVE_DATA,
        questions,
        users,
    }
}

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([
            _getQuestions(),
            _getUsers()
        ]).then(([ questions, users]) => {
            dispatch(receiveData(questions, users))
            dispatch(hideLoading())
        })
    }
}