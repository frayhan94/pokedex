import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import store from './store';
import './components/base.scss';
import ErrorBoundary from './ErrorBoundary';

import * as serviceWorker from './serviceWorker';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>{routes}</Provider>
    </ErrorBoundary>
  );
};

ReactDOM.render(<App />, document.getElementById('root') || document.createElement('div'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
