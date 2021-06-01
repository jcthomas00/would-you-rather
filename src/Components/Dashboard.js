import { Component } from 'react';
import { connect } from 'react-redux';
import Question from '../Components/Question';

class Dashboard extends Component {
    render = () => {
        const { authedUser, questions } = this.props;

        return(
            <div>
                <ul className="nav nav-tabs nav-justified nav-pills" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="unanswered-polls-link" data-bs-toggle="tab" data-bs-target="#unanswered-polls" type="button" role="tab" aria-controls="home" aria-selected="true">
                            Unanswered Polls
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="answered-polls-link" data-bs-toggle="tab" data-bs-target="#answered-polls" type="button" role="tab" aria-controls="profile" aria-selected="false">
                            Answered Polls
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="unanswered-polls" role="tabpanel">
                        <div className="card">
                            <div className="card-header">
                                <h3>Unanswered Polls</h3>
                            </div>
                            <div className="card-body row">
                                {questions.filter((q) => !Object.keys(authedUser.answers).includes(q)).map((question) => 
                                    <Question key={question} id={question} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="answered-polls" role="tabpanel">
                        <div className="card">
                            <div className="card-header">
                                <h3>Answered Polls</h3>
                            </div>
                            <div className="card-body row">
                                {questions.filter((q) => Object.keys(authedUser.answers).includes(q)).map((question) => 
                                    <Question key={question} id={question} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser, users }){
    return {
        questions: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        authedUser: users[authedUser]
    }
}

export default connect (mapStateToProps) (Dashboard);