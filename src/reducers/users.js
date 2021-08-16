import { RECEIVE_DATA, SAVE_ANSWER, ADD_QUESTION } from "../actions/shared"

export default function users (state = {}, action) {
    switch (action.type) {

        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }

        case SAVE_ANSWER:
            const { authedUser, qid, answer } = action

            return {
                ...state,
                [authedUser]: {
                  ...state[authedUser],
                  answers: {
                    ...state[authedUser].answers,
                    [qid]: answer
                  }
                }
            }

        case RECEIVE_DATA:
            return action.users
    
        default:
            return state
    }
}