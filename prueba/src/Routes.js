import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import UserProfile from "./components/userprofile/UserProfile";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/profile" component={UserProfile} />
    <Route path="/users/:id" component={UserProfile} />
  </Switch>
);

export default Routes;
