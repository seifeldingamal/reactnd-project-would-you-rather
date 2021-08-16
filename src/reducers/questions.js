import { RECEIVE_DATA, ADD_QUESTION, SAVE_ANSWER } from '../actions/shared'

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
                      ...state[qid][answer],
                      votes: state[qid][answer].votes.concat([authedUser])
                    }
                  }
            }
        
        case RECEIVE_DATA:
            return action.questions
    
        default:
            return state
    }
}