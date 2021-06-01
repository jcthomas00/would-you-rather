import { receiveQuestions, voteQuestion, addQuestion } from './questions';
import { receiveUsers, voteUser, addUserQuestion } from './users';
import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../_Data';
import { showLoading, hideLoading } from 'react-redux-loading';

export const initializeData = () => {
    return (dispatch) => {
        dispatch(showLoading());
        _getUsers().then((users) => {
            dispatch(receiveUsers(users));
        })
        _getQuestions().then((questions)=>{
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        })
    }
}

export const vote = (info) => {
    return (dispatch) => {
        dispatch(voteQuestion(info));
        dispatch(voteUser(info));
        _saveQuestionAnswer(info)
        .catch((e) => {
            console.warn("Error: ", e);
            dispatch(voteQuestion(info));
            dispatch(voteUser(info));
        })
    }
}

export const newQuestion = ({ optionOneText, optionTwoText, authedUser }) => {
    const question = {optionOneText, optionTwoText, author: authedUser};
    return (dispatch) => {
        _saveQuestion(question)
        .then((formattedQuestion) => {
            dispatch(addQuestion(formattedQuestion));
            dispatch(addUserQuestion({qid:formattedQuestion.id, authedUser}));
        })
        .catch((e) => {
            console.log("Error: ", e);
        })
    }
}