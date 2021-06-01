export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const VOTE_QUESTION = 'VOTE_QUESTION';

export const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions
})

export const addQuestion = (question) => ({
    type: ADD_QUESTION,
    question,
})

export const voteQuestion = ({ qid, answer, authedUser }) => {
    return {
        type: VOTE_QUESTION,
        qid,
        answer,
        authedUser,
    };
}
