import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Login from "./containers/Login/Login";
import MainMenu from "./containers/MainMenu/MainMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/" exact render={props => <MainMenu {...props} /> } />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default withRouter(App);
