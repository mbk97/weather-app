import {weatherDispatchTypes, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './actionTypes';
import axios from 'axios';
import { API_KEY } from '../../apiKey';
import { Dispatch } from 'react';
  


export const fetchWeatherAction = (defaultCity:any) => {
  return async (dispatch:Dispatch<weatherDispatchTypes>) => {

    dispatch({
      type:FETCH_WEATHER_REQUEST
    })

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=metric&appid=${API_KEY}`)

      const data = response.data

      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload:data
      })


    } catch (error:any) {

      const errorMsg = error.message

      dispatch({
        type: FETCH_WEATHER_FAILURE,
        payload:errorMsg
      })
    }



  }
}