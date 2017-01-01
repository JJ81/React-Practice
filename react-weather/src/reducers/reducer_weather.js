import { FETCH_WEATHER } from '../actions/index';

// weather data is array returned
export default function(state = [], action){
  console.log('Action received', action);
  console.log('State' , state);

  switch (action.type) {
    case FETCH_WEATHER:
      //return state.push(action.payload.data);
      // return state.concat([action.payload.data]); // add data with concat method
      return [ action.payload.data, ...state ]; // [city, city, city]
      break;
    default:
      break;
  }
  return state;
}
