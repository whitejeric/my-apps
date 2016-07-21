import {ADD_COUNT, SUB_COUNT, CHANGE_COUNT} from '../actions/index'; //just grabbing the name, not the function

export default function(state = {value: 0}, action){
  switch (action.type){
    case ADD_COUNT:
      return {value: state.value + 1};
    case SUB_COUNT:
      return {value: state.value - 1};
    case CHANGE_COUNT:
      return {value: state.value + parseInt(action.number)};
  }
  return state;
}
