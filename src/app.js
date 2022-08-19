import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/navlinks/home";
import Skills from "./components/navlinks/skills";
import Projects from "./components/navlinks/projects";
import ContactMe from "./components/navlinks/contactMe";
import styled from "styled-components";
import Footer from "./components/footer";
const App = () => {
  return (
    <Container>
      <HashRouter>
        <div>
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/skills" exact element={<Skills />}></Route>
            <Route path="/projects" exact element={<Projects />}></Route>
            <Route path="/contactme" exact element={<ContactMe />}></Route>
          </Routes>
        </div>

        <Footer />
      </HashRouter>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: auto;
  /* background: #dbeafe; */
`;

export default App;
