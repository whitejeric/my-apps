import { combineReducers } from 'redux';
import CounterReducer from './reducer-counter';


const rootReducer = combineReducers({
  count: CounterReducer
});

export default rootReducer;
