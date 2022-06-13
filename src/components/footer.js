import React from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import "./test.css";

const Footer = () => {
  return (
    <div>
      <Main>
        <div className="circle-outer">
          <div class="circle circle1">
            <a
              href="https://github.com/Dipesh123-ux"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
        <div className="circle-outer">
          <div class="circle circle2">
            <a
              href="https://twitter.com/Dipeshjaswani2"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="circle-outer">
          <div class="circle circle3">
            <a
              href="https://www.linkedin.com/in/dipesh-jaswani-0a02871b7/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="circle-outer">
          <div className="circle circle4">
            <a
              href="https://www.instagram.com/jaswanidipesh/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </Main>
    </div>
  );
};

const Main = styled.div`
  display: flex;
  position: fixed;

  @media (min-width: 1000px) and (max-width: 2000px) {
    top: 75vh;
    left: 33vw;
  }

  @media (min-width: 800px) and (max-width: 1000px) {
    top: 75vh;
    left: 25vw;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    top: 75vh;
    left: 17vw;
  }

  @media (max-width: 500px) {
    top: 84vh;
    left: -6vw;
  }
`;

export default Footer;
