import React from "react";
import { Route, Switch } from "wouter";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Activities from "./components/Activities";
import Actions from "./components/Actions";
import Membership from "./components/Membership";
import GovermentOrder from "./components/GovermentOrder";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/Intro" component={Intro} />
      <Route path="/Activities" component={Activities} />
      <Route path="/Actions" component={Actions} />
      <Route path="/Membership" component={Membership} />
      <Route path="/GovermentOrder" component={GovermentOrder} />
      {/* Fallback */}
      <Route>404 – Page not found</Route>
    </Switch>
  );
}
