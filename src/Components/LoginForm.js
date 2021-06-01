import { Component } from 'react';
import { loginUser } from '../Actions/loginUser'
import { connect } from 'react-redux';

class LoginForm extends Component{
    state = {
        user : ''
    }
    render = () => {
        const { users, dispatch } = this.props;
        return (
            <div className="card">
                <div className="card-header">
                    Login below to start playing 'Would You Rather'
                </div>
                <form className="card-body" onSubmit={() => dispatch(loginUser(this.state.user))}>
                    <fieldset className="fieldset">
                    <select className="form-select form-select-lg mb-3" 
                        value = {this.state.user}
                        onChange={(e) => this.setState({user:e.target.value})}>
                        <option>Select your username</option>
                        {Object.keys(users).map((user) => {
                            return <option key={user} value={user}>{users[user].name}</option>
                        })}
                    </select>
                    </fieldset>
                    <button type="submit" className="btn btn-primary" disabled={this.state.user === ''}>
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {users}
}
export default connect(mapStateToProps)(LoginForm);