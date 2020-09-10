
//we are importing the provider component from react-redux and the store file created earlier
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './ducks/store'


//we are wrapping the app component in the provider component so it gives the entire application access to whatever is in the store, because we pass in the store as a prop to the provider, and wrap the provider around the app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
