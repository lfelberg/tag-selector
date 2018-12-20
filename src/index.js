import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import inputData from './data/input_data.js';

ReactDOM.render(<App downloads={inputData.downloads} />, document.getElementById('root'));
