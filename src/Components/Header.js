import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../Actions/loginUser'

class Header extends Component{
    render = () => {
        const { dispatch, user } = this.props;
        return (
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span className="fs-4">{"{ WYR }"}</span>
                    </span>
                    {user ? 
                        (<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to="/" className="nav-link px-2 link-dark">Polls</Link></li>
                            <li><Link to="/add" className="nav-link px-2 link-dark">Create Poll</Link></li>
                            <li><Link to="/leaderboard" className="nav-link px-2 link-dark">Leaderboard</Link></li>

                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user.name}
                                    <img src={process.env.PUBLIC_URL + user.avatarURL} alt={user.name + "'s avatar"}className="thumbnail" />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><button className="dropdown-item" onClick={(e)=>{dispatch(logoutUser())}}>Logout</button></li>
                                </ul>
                            </li>
                        </ul>) : ''
                    }
                </header>
            </div>
        )
    }
}
const mapStateToProps = ({ authedUser, users }) => {
    return {
        user: users[authedUser]
    }
}
export default connect(mapStateToProps)(Header);