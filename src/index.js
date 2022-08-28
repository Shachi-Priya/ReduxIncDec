import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './Store/Store';
import {Provider} from 'react-redux';


Store.subscribe(()=>console.log(Store.getState()));

ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={Store}><App /></Provider>);
