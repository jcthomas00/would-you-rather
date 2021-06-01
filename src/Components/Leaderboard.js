import { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';

class Leaderboard extends Component{
    render = () => {
        return (
            <div className="card">
                <div className="card-header">
                    Leaderboard
                </div>
                <div className="card-body">
                    {this.props.users.map((id,index)=>
                        <UserCard key={id} id={id} rank={index+1} />)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        users: Object.keys(users).sort((a,b) => 
            (Object.keys(users[b].answers).length + Object.keys(users[b].questions).length) -
            (Object.keys(users[a].answers).length + Object.keys(users[a].questions).length))
    }
}

export default connect(mapStateToProps)(Leaderboard);