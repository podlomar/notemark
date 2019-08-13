import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';
import './index.scss';

const App = () => (
  <BrowserRouter>
    <Route
      path="/:path?"
      render={({location: { pathname } }) => (
        <Main path={pathname} />
      )}
    />
  </BrowserRouter>
);

ReactDOM.render(<App/>, document.querySelector('#app'));
