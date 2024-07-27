import React, { useState, useRef, useEffect, useContext } from 'react';
import { useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../theme'; // Adjust the import path as needed
import './Weather.css';
import search_icon from '../../assets/search.png';
import wind_icon from '../../assets/wind.png';
import humidity_icon from '../../assets/humidity.png';
import warning_icon from '../../assets/warning.png';
import moon_icon from '../../assets/half-moon.png';
import sun_icon from '../../assets/sun.png';
import cloudy_icon from '../../assets/cloudy.png';
import cloudy_night_icon from '../../assets/cloudy_night.png';
import cloud_icon from '../../assets/cloud.png';
import cloud_night_icon from '../../assets/cloud_night.png';
import broken_clouds_icon from '../../assets/broken_clouds.png';
import shower_rain_day_icon from '../../assets/shower_rain_day.png';
import shower_rain_night_icon from '../../assets/shower_rain_night.png';
import rain_icon from '../../assets/rain.png';
import thunder_icon from '../../assets/thunder.png';
import snow_icon from '../../assets/snow.png';
import mist_icon from '../../assets/mist.png';

const weatherIcons = {
    "01d": sun_icon,
    "01n": moon_icon,
    "02d": cloudy_icon,
    "02n": cloudy_night_icon,
    "03d": cloud_icon,
    "03n": cloud_night_icon,
    "04d": broken_clouds_icon,
    "04n": cloudy_night_icon,
    "09d": shower_rain_day_icon,
    "09n": shower_rain_night_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "11d": thunder_icon,
    "11n": thunder_icon,
    "13d": snow_icon,
    "13n": snow_icon,
    "50d": mist_icon,
    "50n": mist_icon,
    // Add more mappings for your custom icons here
};

const Weather = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const inputRef = useRef();
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (theme.palette.mode === 'light') {
            document.documentElement.style.setProperty('--color-start', '#ffffff');
            document.documentElement.style.setProperty('--color-end', '#f5f5f5');
            document.documentElement.style.setProperty('--text-color', '#000000');
            document.documentElement.style.setProperty('--input-text-color', '#000000');
            document.documentElement.style.setProperty('--input-background', '#e0e0e0');
        } else {
            document.documentElement.style.setProperty('--color-start', colors.primary[400]);
            document.documentElement.style.setProperty('--color-end', colors.primary[500]);
            document.documentElement.style.setProperty('--text-color', colors.grey[100]);
            document.documentElement.style.setProperty('--input-text-color', colors.grey[700]);
            document.documentElement.style.setProperty('--input-background', colors.primary[200]);
        }
    }, [colors, theme.palette.mode]);

    const fetchWeatherData = async (url) => {
        try {
            setError(null); // Clear previous errors
            const response = await fetch(url);
            const data = await response.json();
            if (data.cod !== 200) {
                throw new Error(data.message);
            }
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: weatherIcons[data.weather[0].icon] || warning_icon                
            });
        } catch (error) {
            setError(error.message);
            setWeatherData(null);
        }
    };

    const getWeatherByCity = (city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
        fetchWeatherData(url);
    };

    const getWeatherByCoordinates = (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
        fetchWeatherData(url);
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    getWeatherByCoordinates(latitude, longitude);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setError("Unable to retrieve location.");
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        if (city) {
            getWeatherByCity(city);
        } else {
            getLocation();
        }
    }, [city]);

    const handleSearch = () => {
        const searchValue = inputRef.current.value.trim();
        if (searchValue) {
            setCity(searchValue);
        } else {
            getLocation();
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className='weather'>
            <div className='search-bar'>
                <input 
                    ref={inputRef} 
                    type='text' 
                    placeholder='Search' 
                    onKeyPress={handleKeyPress} 
                    style={{ color: 'var(--input-text-color)' }}
                />
                <img 
                    src={search_icon} 
                    alt="Search" 
                    onClick={handleSearch} 
                    style={{ cursor: 'pointer', backgroundColor: 'var(--input-background)' }} 
                />
            </div>
            {weatherData && (
                <>
                    <img src={weatherData.icon} alt="Weather Icon" className='weather-icon' />
                    <p className='temperature'>{weatherData.temperature}ºc</p>
                    <p className='city'>{weatherData.location}</p>
                    <div className='weather-data'>
                        <div className='col'>
                            <img src={humidity_icon} className='icon' alt="Humidity" />
                            <div>
                                <p>{weatherData.humidity}%</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className='col'>
                            <img src={wind_icon} alt="Wind" />
                            <div>
                                <p>{Math.round(weatherData.windSpeed * 3.6)} Km/h</p>
                                <span>Wind Power</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {error && (
                <div className='weather-data'>
                    <div className='col'>
                        <img src={warning_icon} className='icon' alt="Error" />
                        <div>
                            <p>{error}</p>
                            <span>Error</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
