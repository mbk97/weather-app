export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST"
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS"
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE"


// export const fetchWeatherRequest = () => ({
//   type:typeof FETCH_WEATHER_REQUEST
// })
// export const fetchWeatherSuccess = (data:any) => ({
  //   type: typeof FETCH_WEATHER_SUCCESS,
  //   payload:data
  // })
  
  
  // export const fetchWeatherFailure = (error:any) => ({
  //   type: typeof FETCH_WEATHER_SUCCESS,
  //   payload:error
  // })
  


export interface  fetchWeatherRequest{
  type:typeof FETCH_WEATHER_REQUEST
}
export interface  fetchWeatherSuccess{
  type: typeof FETCH_WEATHER_SUCCESS,
  payload:any
}
export interface  fetchWeatherFailure{
  type: typeof FETCH_WEATHER_FAILURE,
  payload:any
}




export type weatherDispatchTypes = fetchWeatherFailure | fetchWeatherRequest|fetchWeatherSuccess
