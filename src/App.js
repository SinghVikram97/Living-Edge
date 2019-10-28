import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import ProductDetails from "./Components/ProductDetails";

import { useTransition, animated } from "react-spring";
function App() {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: {
      opacity: 0,
      transform: "translate(100%,0)",
      transition: "800ms linear"
    },
    enter: {
      opacity: 1,
      transform: "translate(0,0)",
      transition: "800ms linear"
    },
    leave: {
      opacity: 0,
      transform: "translate(-50%,0)",
      transition: "800ms linear"
    }
  });
  return (
    <div className="App">
      <Navbar />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/product/:id"
              component={props => <ProductDetails {...props} />}
            />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default App;
