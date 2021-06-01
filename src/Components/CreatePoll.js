import { Component } from 'react';
import { newQuestion } from '../Actions/shared';
import { connect } from 'react-redux';

class CreatePoll extends Component{
    state = {
        optionOneText: '',
        optionTwoText: '',
        authedUser: this.props.authedUser
    }
    handleChange = (e) => {
       const option =  {[e.target.id]:e.target.value}
       this.setState(()=>option)
    }
    handleNewQuestion = (e) => {
        e.preventDefault();
        this.props.dispatch(newQuestion(this.state));
        this.setState(()=>({
            optionOneText: '',
            optionTwoText: ''
        }))
    }
    render = () => {
        const { optionOneText, optionTwoText } = this.state;
        return (
            <div className="card">
                <div className="card-header">
                    Create a new 'Would you rather' poll
                </div>
                <form className="card-body needs-validation" noValidate onSubmit={this.handleNewQuestion}>
                    <div className="mb-3">
                        <label htmlFor="optionOneText" className="form-label">Option One</label>
                        <input type="text" className="form-control" id="optionOneText" value={optionOneText} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="optionTwoText" className="form-label">Option Two</label>
                        <input type="text" className="form-control" id="optionTwoText" value={optionTwoText} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" 
                        disabled={optionOneText === '' || optionTwoText === ''}>
                            Submit
                    </button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = ({ authedUser }) => { 
    return { 
        authedUser
    }
}
export default connect(mapStateToProps)(CreatePoll);