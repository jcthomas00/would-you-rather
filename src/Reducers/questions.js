import { RECEIVE_QUESTIONS, ADD_QUESTION, VOTE_QUESTION } from '../Actions/questions';

export default function questions(state={}, action){
    switch (action.type){
        case RECEIVE_QUESTIONS:
            return {...state, ...action.questions};
        case ADD_QUESTION:
            console.log("ADD: ",action.question)
            return {...state, [action.question.id]:action.question};
        case VOTE_QUESTION:
            
            return {
                ...state, 
                [action.qid]:{
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer]["votes"].includes(action.authedUser) ? 
                                state[action.qid][action.answer].votes.filter((voter) => voter !== action.authedUser) : 
                                state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
                      
            }
        default:
            return state;
    }
}