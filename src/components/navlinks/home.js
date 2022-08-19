import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../test.css";
import resume from "./DipeshResume.pdf";
import { Samy, SvgProxy } from "react-samy-svg";
import RobotAnimated from "./robot-animated";

const buttonVariant = {
  hidden: {
    x: "-500px",
  },
  hide: {
    x: "500px",
  },
  visible: {
    x: 0,

    transition: {
      duration: 0.3,
    },
  },
};

const Home = () => {
  return (
    <Main>
       <Robot>
        <RobotAnimated />
      </Robot>
      <Head>
        Hi , I'm &nbsp;
        <span>
          <Typewriter
            style={{ fontFamily: "Times New Roman"}}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={["Dipesh Jaswani", "A Web Developer."]}
          />
        </span>
      </Head>



      <Buttons>
        <motion.button
          variants={buttonVariant}
          initial="hidden"
          animate="visible"
          className="btn"
          onClick={() => window.open(resume)}
        >
          Resume
        </motion.button>
      </Buttons>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Head = styled.h1`
  position: relative;
  top: 30vh;
  color:white;

  @media (max-width: 800px) {
    font-size: 20px;
    top: 5vh;
  }
`;

const Buttons = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 50vh;
  @media (max-width: 800px) {
  
    bottom: -20vh;
  }
`;

const Robot = styled.div`
position : fixed;
top : 20vh;
left:10vw;
`

export default Home;
