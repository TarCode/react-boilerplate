import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/'
import { Provider } from 'react-redux'
import { configureStore } from './store/'

const store = configureStore()

export default () => (
  <Provider store={store}>
    <Router>
      <div>
        <Routes/>
      </div>
    </Router>
  </Provider>
)
