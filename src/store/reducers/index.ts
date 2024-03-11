// third-party
import { combineReducers } from 'redux';

// project import
import { bannerReducer } from './menu';
import { userReducer } from './user';
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ bannerReducer, userReducer });

export default reducers;
