import { SAVE_ANSWER, ADD_QUESTION } from '../actions/questions'
import { RECEIVE_DATA } from '../actions/shared'

export default function questions (state = {}, action) {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        
        case SAVE_ANSWER:
            const { authedUser, qid, answer } = action

            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...[qid][answer],
                        votes: [
                            ...state[qid][answer].votes,
                            authedUser
                        ]
                    }
                }
            }
        
        case RECEIVE_DATA:
            return action.questions
    
        default:
            return state
    }
}