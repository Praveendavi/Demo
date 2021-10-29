import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";

// pages
import Home from "./pages/HomePage/Home";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
