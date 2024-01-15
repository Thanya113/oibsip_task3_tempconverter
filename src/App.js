import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import { WiThermometer } from 'react-icons/wi';

const App = () => {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('celsius');

  const celsius = scale === 'fahrenheit' ? toCelsius(temperature) : temperature;
  const fahrenheit = scale === 'celsius' ? toFahrenheit(temperature) : temperature;

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleScaleChange = (selectedScale) => {
    setScale(selectedScale);
  };

  return (
    <div className="app">
      <div className="temperature-container">
        <h1>Temperature Converter</h1>
        <div className="input-container">
          <input
            type="number"
            value={temperature}
            onChange={handleTemperatureChange}
            placeholder="Enter temperature"
          />
          <div className="scale-buttons">
            <button onClick={() => handleScaleChange('celsius')}>Celsius</button> &nbsp; &nbsp; &nbsp; 
            <button onClick={() => handleScaleChange('fahrenheit')}>Fahrenheit</button>
          </div>
        </div>
        <div className="result-container">
          <ResultCard scale="Celsius" temperature={celsius} />
          <ResultCard scale="Fahrenheit" temperature={fahrenheit} />
        </div>
      </div>
      <WiThermometer className="icon" />
    </div>
  );
};

const ResultCard = ({ scale, temperature }) => (
  <div className="result-card">
    <h3>{scale}</h3>
    <p>{Number(temperature).toFixed(2)}&deg;{scale === 'Celsius' ? 'C' : 'F'}</p>
  </div>
);

const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

export default App;
