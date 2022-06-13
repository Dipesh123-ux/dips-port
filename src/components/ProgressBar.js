import React, { useState } from "react";
import styled from "styled-components";

const ProgressBar = ({ done, title }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <Main>
      <Title>{title}</Title>
      <Progress>
        <ProgressDone style={style}>{done}%</ProgressDone>
      </Progress>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  margin-left: 50px;
`;

const Title = styled.h3`
  position: relative;
  top: 30px;
  margin-right: 20px;

  @media (max-width: 500px) {
    top: 20px;
    font-size: 15px;
  }
`;

const Progress = styled.div`
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin: 25px 0;
  height: 30px;
  width: 300px;

  @media (max-width: 500px) {
    height: 20px;
    width: 200px;
    margin-top: 13px;
    margin-bottom: 20px;
  }
`;
const ProgressDone = styled.div`
  background: #3b82f6;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
`;

export default ProgressBar;
