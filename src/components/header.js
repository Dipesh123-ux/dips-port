import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./test.css";

const HeadVariant = {
  hidden: {
    y: "-100px",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const svgVariant = {
  hidden: {
    x: "-500px",
  },
  visible: {
    x: 0,
    rotate: 360,
    transition: {
      duration: 1,
    },
  },
};

const iconVariants = {
  opened: {
    rotate: 135,
  },
  closed: {
    rotate: 0,
  },
};

const menuVariants = {
  opened: {
    top: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  closed: {
    top: "-90vh",
  },
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Head variants={HeadVariant} initial="hidden" animate="visible">
      <Name to="/">
        <svg id="svg" xmlns="http://www.w3.org/2000/svg">
          <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
          </filter>
        </svg>

        <span id="logo" filter-content="S">
          {" "}
          &#60;Dipesh/&#62;
        </span>
      </Name>

      <Nav variants={menuVariants} animate={isOpen ? "opened" : "closed"}>
        <Links
          activeClassName="active"
          to="/"
          onClick={() => setIsOpen(!isOpen)}
        >
          Home
        </Links>
        <Links
          activeClassName="active"
          to="/skills"
          onClick={() => setIsOpen(!isOpen)}
        >
          Skills
        </Links>
        <Links
          activeClassName="active"
          to="/projects"
          onClick={() => setIsOpen(!isOpen)}
        >
          Projects
        </Links>
        <Links
          activeClassName="active"
          to="/contactme"
          onClick={() => setIsOpen(!isOpen)}
        >
          ContactMe
        </Links>
      </Nav>
      <SvgBox
        variants={iconVariants}
        animate={isOpen ? "opened" : "closed"}
        whileHover={{ scale: 1.4 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.svg
          variants={svgVariant}
          initial="hidden"
          animate="visible"
          width="20"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
            fill="rgb(255,255,255)"
          />
        </motion.svg>
      </SvgBox>
    </Head>
  );
};

const SvgBox = styled(motion.div)`
  position: relative;
  right: 40px;
  visibility: hidden;
  margin-left: 20vw;
  font-size: 50px;
  @media (max-width: 800px) {
    visibility: visible;
  }
`;

const Head = styled(motion.div)`
  height: 55px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #3b82f6;
  box-shadow: 0 0 10px rgba(0, 0, 0);
`;

const Nav = styled(motion.div)`
  display: flex;
  margin-left: 30vw;
  padding-bottom: 10px;

  @media (max-width: 800px) {
    position: relative;
    flex-direction: column;
    height: 50vh;
    width: 100%;
    align-items: center;
    background: #3b82f6;
    opacity: 0.8;
    margin-top: 57vh;
    margin-left: 0px;
    margin-right: -190px;
    z-index: 100;
  }

  @media (max-width: 500px) {
    margin-left: -255px;
  }
`;

const Links = styled(NavLink)`
  margin-top: 10px;
  margin-left: 10vw;
  font-weight: bold;
  color: rgb(16, 24, 21);
  color: white;

  &:hover {
    color: black;
  }

  @media (max-width: 800px) {
    margin-top: 40px;
  }
`;

const Name = styled(Link)`
  position: fixed;
  font-weight: bold;
  font-size: 20px;
  color: white;
  margin-left: 30px;

  &:hover {
    color: black;
  }
  @media (max-width: 500px) {
    position: relative;
  }
`;

export default Header;
