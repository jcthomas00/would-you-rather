export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const VOTE_USER = 'VOTE_USER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const updateUser = (user) => ({
    type: UPDATE_USER,
    user
})

export const voteUser = ({ qid, answer, authedUser }) => {
    return {
        type: VOTE_USER,
        qid,
        answer,
        authedUser,
    };
}

export const addUserQuestion = ({ authedUser, qid }) => {
    return {
        type: ADD_USER_QUESTION,
        authedUser,
        qid
    }
}