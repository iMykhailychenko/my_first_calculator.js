import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import myFirstCalculator from './my_first_calculator';
import './index.css';

const NUMBERS = Array(51).fill(1);

// SIMPLE FORM MARKUP
const App = () => {
  const [inputs, setInputs] = useState({ num1: '0', num2: '0', sign: '+' });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // RUN CALCULATOR HERE
  const handleSubmit = (e) => {
    e.preventDefault();
    myFirstCalculator(inputs);
  };

  return (
    <form action='#' method='post' onSubmit={handleSubmit}>
      <label>
        <p>Select first number:</p>
        <select name='num1' value={inputs.num1} onChange={handleChange}>
          {NUMBERS.map((_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </label>

      <label>
        <p>Select second number:</p>
        <select name='num2' value={inputs.num2} onChange={handleChange}>
          {NUMBERS.map((_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </label>

      <label>
        <p>Select sign:</p>
        <select name='sign' value={inputs.sign} onChange={handleChange}>
          <option value='+'>+</option>
          <option value='-'>-</option>
          <option value='*'>*</option>
          <option value='/'>/</option>
        </select>
      </label>

      <button type='submit'>Calculate</button>
    </form>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
