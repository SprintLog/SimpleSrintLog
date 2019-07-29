import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {Provider } from 'react-redux';

const store =  configureStore();

const App = () =>  (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

export default App;