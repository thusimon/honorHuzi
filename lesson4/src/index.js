import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/app';
import StoreContext from './storeContext';
import store from './store';

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <App />
    </StoreContext.Provider>,
    document.getElementById('app')
);