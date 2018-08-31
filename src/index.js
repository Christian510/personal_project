import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import Center from 'react-center'

ReactDOM.render(
    <Center>
        <Provider store={store}>
            <App />
        </Provider>
    </Center>
    , document.getElementById('root'));
unregister();

