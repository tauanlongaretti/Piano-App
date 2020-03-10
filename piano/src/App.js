import React from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./components/Login";
import Register from "./components/Register";
import Piano from "./components/Piano";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/piano" component={Piano} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
