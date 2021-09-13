import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import styled from "styled-components";

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

const Container = styled.div`
  height: 100%;
  width: 100vw;
  background: #ebecf0;
`;

export default App;
