import React, { useState, useEffect } from 'react';
import './DigitalClock.css'; // Import the CSS file for styling

const Time = () => {
    const [timeData, setTimeData] = useState(null);
    const [error, setError] = useState(null);

    const fetchTimeData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/time/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTimeData({
                datetime: new Date(data.datetime),
                timezone: data.timezone
            });
        } catch (error) {
            setError('Failed to fetch time data.');
        }
    };

    useEffect(() => {
        fetchTimeData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeData(prevTimeData => {
                if (prevTimeData) {
                    return {
                        ...prevTimeData,
                        datetime: new Date(prevTimeData.datetime.getTime() + 1000)
                    };
                }
                return prevTimeData;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [timeData]);

    return (
        <div className="clock-container">
            {timeData ? (
                <div className="clock">
                    <div className="time">
                        {timeData.datetime.toLocaleTimeString('en-US', { hour12: false })}
                    </div>
                    <div className="timezone">
                        {timeData.timezone}
                    </div>
                </div>
            ) : (
                <div className="loading">
                    <p>Loading...</p>
                </div>
            )}
            {error && (
                <div className="error">
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default Time;
