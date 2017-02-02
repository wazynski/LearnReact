import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    // Don't maniuplate state always return a new version
    return [ action.payload.data, ...state];
  }
  return state;
}
