import { LOGIN_USER, LOGOUT_USER } from '../Actions/loginUser';

const authedUser = (state = null, action) => {
    switch(action.type){
        case LOGIN_USER:
            return action.userId
        case LOGOUT_USER:
            return null
        default:
            return state
    }
}

export default authedUser;