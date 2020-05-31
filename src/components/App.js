import React from "react";
import Header from "./elements/Header";
import Movie from "./Movie";
import NotFound from "./NotFound";
import { Router } from "@reach/router";
import { createGlobalStyle } from "styled-components";
import Home from "./Home";

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;
  box-sizing:border-box;
}


`;
const App = () => (
  <div>
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </div>
);

export default App;
