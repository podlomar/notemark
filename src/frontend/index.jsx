import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import NotesPage from './NotesPage';
import './index.scss';

const stripLeadingSlash = path => path === '/' ? '' : path;

const App = () => {  
  return (
    <BrowserRouter>
      <Route
        path="/:path?"
        render={({location: { pathname } }) => {
          return (
            <NotesPage path={stripLeadingSlash(pathname)} />
          )
        }}
      />
    </BrowserRouter>
  );
};

ReactDOM.render(<App/>, document.querySelector('#app'));
