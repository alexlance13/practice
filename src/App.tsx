import React from 'react';
import './App.css';
import { Switch, BrowserRouter, Redirect, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import NotificationPage from './pages/NotificationPage';
import TablePage from './pages/TablePage';
import Notification from './containers/NotificationContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/table" component={TablePage} />
          <Route path="/form" component={FormPage} />
          <Route path="/notification" component={NotificationPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
      <Notification />
    </>
  );
}

export default App;
