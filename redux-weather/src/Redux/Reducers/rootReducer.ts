import { combineReducers } from "redux";
import { fetchWeatherReducer } from "./reducer";


export const rootReducer = combineReducers({
  weather:fetchWeatherReducer
})