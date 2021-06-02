import { useHistory } from 'react-router-dom';
import { ADD_QUESTION } from '../Actions/questions'

const redirect = (store) => (next) => (action) => {
    const returnVal = next(action);
    if (action.type === ADD_QUESTION){
         console.log("Redirect: ", action);
        // const history = useHistory();
        // history.push(`/`);
    }
    return returnVal;
}

export default redirect;