import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/'
import { Provider } from 'react-redux'
import { Helmet } from "react-helmet";
import { configureStore } from './store/'

const store = configureStore()

export default () => (
  <Provider store={store}>
    <Router>
      <div>
        <Helmet>
          {/* Load scripts and stuff in here */}
        </Helmet>
        <Routes/>
      </div>
    </Router>
  </Provider>
)
