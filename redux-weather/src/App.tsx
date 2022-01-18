import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import { AppWrapper, Container } from './appStyle';
import Header from './Components/Header/Header';
import Weather from './Components/Weather/Weather';
import { fetchWeatherAction } from './Redux/Actions/action';
import { RootWeatherState } from './Redux/Store/store';


const App = ({ fetchWeatherAction, weatherData }: any) => {

   const defaultCity = 'ibadan'

  useEffect(() => {
    fetchWeatherAction(defaultCity)
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])


  const { loading, error, weatherResult} = weatherData
  const { name, main, weather, wind } = weatherResult;
  
  return (
    <AppWrapper>

      {loading && <h2 className='loading-text'>Please Wait...</h2>}
      {error && !loading && <h2 className='error-text'>{error.message}</h2>}
       {!error && !loading &&     
        <Container>
           <Header />
           <Weather
            name={name}
            main={main}
            weather={weather}
            wind={wind}
          />
        </Container>
      }  
      
    </AppWrapper>
  )
}

const mapStateToProps = (state:RootWeatherState) => {
  return {
    weatherData: state.weather
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchWeatherAction:(defaultCity:any) => dispatch(fetchWeatherAction(defaultCity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) ( App)
