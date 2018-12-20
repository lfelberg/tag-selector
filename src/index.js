import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import inputData from './data/input_data.js';

const { downloads, selections } = inputData;

ReactDOM.render(
  <App downloads={downloads} selections={selections} />,
  document.getElementById('root')
);
