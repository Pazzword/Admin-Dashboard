import React, { useState, useEffect } from 'react';

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

    return (
        <div>
            {timeData ? (
                <div>
                    <h3>Local Time</h3>
                    <p>{timeData.datetime.toLocaleString()}</p>
                    <p>{timeData.timezone}</p>
                </div>
            ) : (
                <div>
                    <p>Loading...</p>
                </div>
            )}
            {error && (
                <div>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default Time;
