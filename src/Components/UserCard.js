import { Component } from 'react';
import { connect } from 'react-redux';

class UserCard extends Component{

    render = () =>{
        const { user, questions, answers } = this.props;

        return (  
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={process.env.PUBLIC_URL + user.avatarURL} alt={user.name + "'s avatar"} />
                        <span className="circle">{this.props.rank}</span>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">
                                {user.name}
                            </h4>
                            <h5>Total Polls Answered: {answers}</h5>
                            <h5>Total Polls Created: {questions}</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users },{id}){
    return {
        user: users[id],
        answers: Object.keys(users[id].answers).length,
        questions: Object.keys(users[id].questions).length,
    }
}

export default connect (mapStateToProps) (UserCard);