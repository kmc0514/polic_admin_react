import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Detail from "./routes/Detail";
import Navigation from "./component/Navigation";
import "./reset.css";

function App() {
  return (
    <HashRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/detail/:id" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;
