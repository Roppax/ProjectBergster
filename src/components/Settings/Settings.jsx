import React, { useState, useEffect } from 'react';
import { useDashboardContext } from '../Dashboard';
import { useSettingsContext } from './SettingsContext';
import './Settings.css';
import { SettingsIcon } from '../Icons';

const Settings = () => {
  const { webcamOn, setWebcamOn, setSettingsVisible } = useSettingsContext();
  const { setRecordedExpressionsVisible, setMountedVideoComponent } = useDashboardContext();

  const [isWebcamOn, setIsWebcamOn] = useState(webcamOn);
  const [currentTestState, setCurrentTestState] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [totalTestRuns, setTotalTestRuns] = useState(7); 
  const [expressions, setExpressions] = useState([
    "Angry",
    "Disgusted",
    "Fearful",
    "Happy",
    "Neutral",
    "Sad",
    "Surprised",
  ]);
  const [currentExpression, setCurrentExpression] = useState("");
  const [displayedExpressions, setDisplayedExpressions] = useState([]); 

  useEffect(() => {
    if (isWebcamOn) {
      setCurrentTestState("START TEST");
    } else {
      setCurrentTestState("");
    }
  }, [isWebcamOn]);

  useEffect(() => {
    let interval;

    if (timerActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    } else if (countdown <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerActive, countdown]);

  const startTest = async () => {
    setCurrentTestState("Ready");

    const handleTestRun = async () => {
      setCurrentTestState("Ready");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCurrentTestState("Set");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCurrentTestState("Go!: ");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setTimerActive(true);

      for (let i = 0; i < totalTestRuns; i++) {
        setCurrentExpression(expressions[Math.floor(Math.random() * expressions.length)]); 
        setDisplayedExpressions((prevExpressions) => [...prevExpressions, currentExpression]); 
        setCountdown(5); 
        await new Promise((resolve) => setTimeout(resolve, 5000)); 
      }

      setTimerActive(false);
      setCurrentTestState("TEST FINISHED");
    };

    handleTestRun();
  };

  const toggleWebcam = () => {
    const newWebcamState = !isWebcamOn;
    setIsWebcamOn(newWebcamState);
    setWebcamOn(newWebcamState);
    if (!newWebcamState) {
      setRecordedExpressionsVisible(true);
      setMountedVideoComponent(false);
    }
  };

  return (
    <div className="settings-container font-raleway">
      <div className="webcam-control">
        <span
          className={`webcam-toggle ${isWebcamOn ? 'on' : 'off'}`}
          onClick={toggleWebcam}
        >
          {isWebcamOn ? 'Show Results' : 'Start Tracking'}
        </span>
        {isWebcamOn && (
          <button className="countdown-button" onClick={startTest}>
            {currentTestState}
          </button>
        )}
        {currentTestState === "Go!: " && countdown > 0 && (
          <span className="countdown text-white">{countdown} - {currentExpression}</span>
        )}
      </div>

      {currentTestState === "TEST FINISHED" && (
        <div className="expressions-container">
          {displayedExpressions.map((expression, index) => (
            <span key={index} className="expression text-white">{expression}</span>
          ))}
        </div>
      )}

      <div onClick={() => setSettingsVisible(true)} className="settings-icon">
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Settings;
