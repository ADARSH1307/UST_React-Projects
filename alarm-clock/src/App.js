import React, { useState, useEffect } from 'react';
import './App.css';

function AlarmClock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState('');
  const [isAlarmPlaying, setIsAlarmPlaying] = useState(false);
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [alarmMessage, setAlarmMessage] = useState(''); 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isAlarmSet && alarmTime && currentTime.toLocaleTimeString('en-US', { hour12: false }) === alarmTime) {
      playAlarm();
    }
  }, [currentTime, alarmTime, isAlarmSet]);

  const playAlarm = () => {
    const alarmSound = new Audio('/alarm-clock-short-6402.mp3');
    alarmSound.play();
    setIsAlarmPlaying(true);
  };

  const handleAlarmChange = (event) => {
    setAlarmTime(event.target.value);
    setIsAlarmPlaying(false);
    setIsAlarmSet(false); 
    setAlarmMessage(''); 
  };

  const handleSetAlarm = () => {
    if (alarmTime) {
      setIsAlarmSet(true);
      setAlarmMessage(`Alarm set for ${alarmTime}`); 
    }
  };

  return (
    <div>
      <h1>Alarm Clock</h1>
      <div>
        <label>Set Alarm Time (24-hour format, e.g., 14:30): </label>
        <input
          type="time"
          value={alarmTime}
          onChange={handleAlarmChange}
        />
        <button onClick={handleSetAlarm}>Set Alarm</button>
      </div>
      <div>
        <h2>Current Time: {currentTime.toLocaleTimeString('en-US', { hour12: false })}</h2>
      </div>
      {isAlarmPlaying && <p>Alarm is ringing!</p>}
      {alarmMessage && <p>{alarmMessage}</p>}  {}
    </div>
  );
}

export default AlarmClock;