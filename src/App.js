import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100vw;
  background: #ebecf0;
  background-repeat: repeat;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/">
            <Layout />
          </Route>
          <Route path="">
            <ErrorPage />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
