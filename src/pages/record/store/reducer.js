import * as constants from './constants';
import { fromJS } from 'immutable';


const defaultState = fromJS({
    form:[],
});


export default (state = defaultState,action) =>{
    switch (action.type) {
        case constants.GET_DATA:
            return state.set('form',action.form)
            default:return state;
    }
}
