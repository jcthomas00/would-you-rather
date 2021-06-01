import { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import CreatePoll from './Components/CreatePoll'
import Leaderboard from './Components/Leaderboard'
import LoginForm from './Components/LoginForm';
import { initializeData } from './Actions/shared';
import QuestionDetail from './Components/QuestionDetail';

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(initializeData());
  }
  render = () => {
    if (!this.props.authedUser){
      return (
        <div className="App">
            <Header />
            <div className="container">
              <LoginForm />
            </div>
        </div>
      )
    }
    return (
      <div className="App">
          <Header />
          <div className="container">
            <LoadingBar />
            <Route exact path="/add">
              <CreatePoll />
            </Route>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route exact path="/question/:id"
                render = {props => <QuestionDetail {...props} /> } />
            
          </div>
        </div>
    );
  }
}
const mapStateToProps = ({ authedUser }) => ({authedUser});

export default connect(mapStateToProps)(App);
