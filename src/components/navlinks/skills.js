import React from "react";
import ProgressBar from "../ProgressBar";
import styled from "styled-components";

const Skills = () => {
  return (
    <Main>
      <Languages>
        <Head>Programming Languages</Head>

        <ProgressBar title="C" done="75"></ProgressBar>
        <ProgressBar title="C++" done="80"></ProgressBar>
        <ProgressBar title="JS" done="78"></ProgressBar>
        <ProgressBar title="HTML" done="70"></ProgressBar>
        <ProgressBar title="CSS" done="83"></ProgressBar>
      </Languages>

      <Languages>
        <Head>Libraries , Frameworks and Database</Head>

        <ProgressBar title="React" done="65"></ProgressBar>
        <ProgressBar title="NodeJs" done="60"></ProgressBar>
        <ProgressBar title="Express" done="60"></ProgressBar>
        <ProgressBar title="Bootstrap" done="67"></ProgressBar>
        <ProgressBar title="MongoDB" done="50"></ProgressBar>
      </Languages>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Languages = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

const Head = styled.h3`
  position: relative;
  margin: auto;
  color:white;
`;

export default Skills;
