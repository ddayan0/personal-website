import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from "./containers/Main"
import "98.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main}></Route>
      </Switch>
    </Router>
  );
}

export default App;
