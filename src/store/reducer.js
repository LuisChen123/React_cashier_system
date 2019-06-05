import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer} from '../pages/login/store';
import {reducer as recordReducer} from '../pages/record/store';

const reducer = combineReducers({
    login:loginReducer,
    record:recordReducer
})

export default reducer