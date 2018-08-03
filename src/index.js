import React from 'react';
import ReactDOM from 'react-dom';

import './assets/index.css';
import 'font-awesome/css/font-awesome.min.css'
import 'materialize-css/dist/css/materialize.min.css';

import 'jquery/dist/jquery.min';
import 'materialize-css/dist/js/materialize.min';

import App from './container/App';
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
