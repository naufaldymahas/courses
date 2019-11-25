import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalState from './context/index.js'
import App from './App.js';


ReactDOM.render(
<GlobalState>
    <App/>
</GlobalState>
, document.getElementById('root'));
