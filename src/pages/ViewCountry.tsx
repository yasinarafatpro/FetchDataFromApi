import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Country {
    capital: [''],
    population: number,
    latlng: [number],
    flags: {
        png: string
        svg: string
    },
}
interface Weather {
    
    current:{
    temperature: number,
    weather_icons:[string]
    wind_speed: number,
    precip: number,
    observation_time:"",
    weather_descriptions:[string]
    }
}

export const ViewCountry: React.FC = () => {

    const { countryName } = useParams()
    // console.log(countryName)

    const [countryData, setCountryData] = useState<Country>()
    const [countryWeather, setCountryWeather] = useState<Weather>()


    useEffect(() => {
        callApi()
    }, [])

    const callApi = () => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(res => res.json())
            .then(countryData => {
                setCountryData(countryData[0])
                console.log(countryData)
            })
    }
    const goWeather = async () => {
        const res = await fetch(`http://api.weatherstack.com/current?access_key=2959f4e4b465c371ac2611d9d4875b46&query=${countryData?.capital[0]}`)
        const weather = await res.json()
        setCountryWeather(weather)
        console.log('capitals weather is', weather)
    }

    return (
        <div>
            <p>Capital of {countryName} is :{countryData?.capital[0]}</p>
            <p>Population : {countryData?.population}</p>
            <p>latlng : {countryData?.latlng}</p>
            <img src={countryData?.flags.svg} width='100' height='50' />

            <div>
                
            </div>
            <div>
                <Button variant="outlined" onClick={goWeather}>Capital Weather</Button>
            </div>
            <div>
                <p>Weather current precip : {countryWeather?.current.precip}</p>
                <p>Weather current temperature : {countryWeather?.current.temperature}</p>
                <img src={countryWeather?.current.weather_icons[0]}/>
                <p>Current wind speed : {countryWeather?.current.wind_speed}</p>
                <p>Current Observation time : {countryWeather?.current.observation_time}</p>
                <p>Current weather discription : {countryWeather?.current.weather_descriptions}</p>
            </div>

        </div>
    )
}
