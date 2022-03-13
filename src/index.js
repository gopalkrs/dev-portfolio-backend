import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/index.css';
import Mainpage from './Mainpage';
import ProfilePage from './ProfilePage';


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/:gitUsername" component={ProfilePage} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

