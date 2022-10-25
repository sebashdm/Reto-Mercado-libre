import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import {store} from './features/store.js'
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
              <Provider store={store}>
                <App />
              </Provider>
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
