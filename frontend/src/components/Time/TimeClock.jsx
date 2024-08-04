import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TimeClock.css';

const TimeClock = ({ cities }) => {
  const [time, setTime] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = {};
      cities.forEach(city => {
        newTime[city.name] = new Date().toLocaleTimeString('en-GB', { timeZone: city.timeZone });
      });
      setTime(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [cities]);

  const TimeBox = ({ city, time }) => (
    <div className="time-box">
      <div className="city">{city}</div>
      <div className="time">{time}</div>
      <span className="green-dot"></span>
    </div>
  );

  return (
    <div className="time-clock-container">
      <div className="time-clock">
        {cities.map(city => (
          <TimeBox key={city.name} city={city.name} time={time[city.name]} />
        ))}
      </div>
    </div>
  );
};

TimeClock.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    timeZone: PropTypes.string.isRequired,
  })).isRequired,
};

export default TimeClock;
