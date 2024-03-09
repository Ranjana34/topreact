// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import { userReducer } from './user';
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, userReducer });

export default reducers;
