import { createStore } from 'redux';
import rootReducer from '../Reducers/index';

const Store=createStore(rootReducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());

export default Store;