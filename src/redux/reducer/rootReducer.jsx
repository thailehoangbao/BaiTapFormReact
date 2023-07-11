import {combineReducers} from 'redux';
import { sinhVienReducer } from './sinhVienReducer';

const rootReducers = combineReducers({
    // Quản lý child reducer 
    sinhVienReducer: sinhVienReducer,
})

export default rootReducers;