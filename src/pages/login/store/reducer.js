import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    isLogin: false,
    isPassWordHide:true,
});




export default (state = defaultState,action) =>{
    switch (action.type) {
        case constants.TEXT_LOGIN:
            return state.set('isLogin',false)

        case constants.USER_LOGIN:
            return state.set('isLogin',true)

        case constants.SHOW_PASS_WORD:
            return state.set('isPassWordHide',false)

        case constants.HIDE_PASS_WORD:
            return state.set('isPassWordHide',true)

            default:return state;
    }
}