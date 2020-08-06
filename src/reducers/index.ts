import { combineReducers } from 'redux';
import usersReducers, { State } from './usersReducers';


export interface STORE {
    users: State
}

export default combineReducers<STORE>({
    users: usersReducers
});