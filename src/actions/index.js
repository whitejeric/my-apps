export const ADD_COUNT = 'ADD_COUNT';

export const SUB_COUNT = 'SUB_COUNT';

export const CHANGE_COUNT = 'CHANGE_COUNT';

export function addCount(){
  return {
    type: ADD_COUNT
  };
}

export function subCount(){
  return {
    type: SUB_COUNT
  };
}

export function changeCount(number){
  return {
    type: CHANGE_COUNT,
    number
  };
}
