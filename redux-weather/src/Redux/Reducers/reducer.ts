import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from '../Actions/actionTypes';

interface initialStateI {
  loading: boolean;
  error: string;
  weatherResult: {};
  statusText:''
}


const initialState: initialStateI = {
  loading: true,
  error: '',
  weatherResult: {},
  statusText:''

  
}


export const fetchWeatherReducer = (state = initialState, action: any): initialStateI => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weatherResult: action.payload,
        statusText:action.payload
        
      }
    
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error:action.payload
      }
    default:
      return state
  
  }

}