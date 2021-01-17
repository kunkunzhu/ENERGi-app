import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-router-dom'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home"
import Data from "./Data"
import Questions from "./Questions"
import { Graph } from "./Graph"

function App() {
  return (
      <BrowserRouter class="frame">
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/data">
                  <Data />
              </Route>
              <Route path="/questions">
                  <Questions />
              </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
