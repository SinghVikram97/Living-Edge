import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>{/* <Route exact path="/" component={Navbar} /> */}</Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
