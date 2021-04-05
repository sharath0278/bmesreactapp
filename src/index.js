import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/source/assets/scss/bmes.scss';
import './styles/source/assets/css/site.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import BmesComponent from './components/BmesComponent';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available. 
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BmesComponent />
    </ConnectedRouter>
  </Provider>,
  rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
