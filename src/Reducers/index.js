import changeTheNumber from './IncDec';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeTheNumber:changeTheNumber // changeTheNumber only
})

export default rootReducer;