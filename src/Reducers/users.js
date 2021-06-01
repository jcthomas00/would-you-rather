import { RECEIVE_USERS, VOTE_USER, ADD_USER_QUESTION } from '../Actions/users';

const users = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_USERS:
            return {...state, ...action.users}
        case VOTE_USER:
            return {...state, 
                [action.authedUser]:{...state[action.authedUser], 
                    answers: {...state[action.authedUser].answers, 
                        [action.qid]:action.answer 
                }}}
        case ADD_USER_QUESTION:
            return {...state, 
                [action.authedUser]:{...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat(action.qid)
                }}
        default:
            return {...state}
    }
}

export default users;