import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';


function FetchData() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [city, setcity] = useState("")
  const [main, setmain] = useState("")
  const [name, setname] = useState("")
  const [State, setState] = useState("")
  const [min_temp, setmin_temp] = useState("")
  const [max_temp, setmax_temp] = useState("")
  const [humidity, sethumidity] = useState("")
  const [temp, settemp] = useState("")
  const App_key = "e49ae27f89fd0730a88b78ce20e69820";
  const fetchSearchData = async() => {
    try{
      const w_data = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${App_key}`
    )
      sethumidity(w_data.data.main.humidity)
      setmain(w_data.data.weather[0].main)
      setname(w_data.data.name)
      setState(w_data.data.sys.country)
      setmin_temp(w_data.data.main.temp_min)
      setmax_temp(w_data.data.main.temp_max)
      settemp(w_data.data.main.temp)
      
    } catch(error)
    {
      console.log(error)
    }
  }

  const savePositionToState = (position: any) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };
  const fetchLiveWeather = async () => {
    try {
        await window.navigator.geolocation.getCurrentPosition(
          savePositionToState
        );
        const w_data = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${App_key}`
        );
      sethumidity(w_data.data.main.humidity)
      setmain(w_data.data.weather[0].main)
      setname(w_data.data.name)
      setState(w_data.data.sys.country)
      setmin_temp(w_data.data.main.temp_min)
      setmax_temp(w_data.data.main.temp_max)
      settemp(w_data.data.main.temp)
    }
    catch(error)
    {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSearchData()
  }, [city])
  useEffect(() => {
    fetchLiveWeather();
  }, [latitude, longitude]);
    return (
        <div>
            <Header setcity={setcity} main={main} temp={temp} name={name} State={State} min_temp={min_temp} max_temp={max_temp} humidity={humidity} fetchLiveWeather={fetchLiveWeather}></Header>
        </div>
    )
}

export default FetchData
