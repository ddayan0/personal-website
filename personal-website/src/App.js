import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WelcomeBox from "./components/WelcomeBox"


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={WelcomeBox}></Route>
        {/* <Route path="/github" component={() => {window.location.href = 'https://www.github.com/ddayan0'; return null;}}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
