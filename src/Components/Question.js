import { Component } from 'react';
import { connect } from 'react-redux';
import { vote } from '../Actions/shared';
import { Link } from 'react-router-dom';

class Question extends Component{

    handleVote = (e) => {
        const { question, authedUser, dispatch } = this.props;
        const answer = e.target.name;
        dispatch(vote({
            qid: question.id,
            answer,
            authedUser,
        }));
    }

    render = () =>{
        const { question, users, authedUser } = this.props;
        let ans = question.optionOne.votes.includes(authedUser) ? 1:
                    (question.optionTwo.votes.includes(authedUser) ? 2:0);
        const ansOneTotal = question.optionOne.votes.length;
        const ansTwoTotal = question.optionTwo.votes.length;
        const questionPercent = 100/(ansOneTotal + ansTwoTotal);

        return (  
            <div className="col-4"> 
                <div className="card mb-3">
                    <div className="card-header">
                        <Link to={`/question/${question.id}`} >Would You Rather >></Link>
                    </div>
                    <div className="card-body">
                        <p className="card-text d-flex">
                            {question.optionOne.text} 
                            {ans === 0 ? 
                                <button type="button" name="optionOne" className="btn btn-outline-secondary btn-sm ms-auto" 
                                    onClick={this.handleVote}>
                                    Vote
                                </button>
                                    : (ans === 1 ? <span className="ms-auto badge bg-info text-dark">Your Vote</span> : '')
                            }
                        </p>
                        <div className="progress">
                            <div className="text-dark progress-bar bg-warning" 
                                style={{width: questionPercent===Infinity ? 0:
                                    `${Math.trunc(ansOneTotal*questionPercent)}%`}} 
                                    role="progressbar" >
                                    {ansOneTotal} of {ansOneTotal+ansTwoTotal} picked this
                            </div>
                        </div>

                        <p className="card-text d-flex">
                            {question.optionTwo.text} 
                            {ans === 0 ? 
                                    <button type="button" name="optionTwo" className="btn btn-outline-secondary btn-sm ms-auto" 
                                        onClick={this.handleVote}>
                                        Vote
                                    </button>
                                    : (ans === 2 ? <span className="ms-auto badge bg-info text-dark">Your Vote</span> : '')
                            }
                        </p>
                        <div className="progress">
                            <div className="text-dark progress-bar bg-warning" 
                                style={{width: questionPercent===Infinity ? 0:
                                    `${Math.trunc(ansTwoTotal*questionPercent)}%`}} 
                                    role="progressbar" >
                                    {ansTwoTotal} of {ansOneTotal+ansTwoTotal} picked this
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{users[question.author].name}</small>
                        <img src={users[question.author].avatarURL} alt={users[question.author].name + "'s avatar"}className="thumbnail" />
                    </div>
                </div>
            </div> 
        )
    }
}

function mapStateToProps({ questions, authedUser, users }, { id }){
    const question = questions[id];
    return {
        question,
        authedUser,
        users
    }
}

export default connect (mapStateToProps) (Question);