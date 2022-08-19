import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import "../test.css";
import styled from "styled-components";

//videos
import Vid1 from "./landingpage_1_Trim.mp4";
import Vid2 from "./BattleCards - Google Chrome 2021-09-11 11-16-11_Trim.mp4";
import Vid3 from "./2021-09-29 01-12-24_3_Trim.mp4";
import Vid4 from "./Shop - Google Chrome 2022-01-13 22-03-14_Trim.mp4";

const Projects = () => {
  const data = [
   {
      id: 1,
      head: "SCI-FI BLOGS",
      description:" A blogging site that has a user and admin dashboard with complete CRUD capabilities,JWT-based authentication, a commenting system, and Google social login.",
      tech: "NextJS, NodeJS, Express, MongoDB, Bootstrap",
      vidSrc: Vid1,
      url : 'https://github.com/Dipesh123-ux/sci-fi-blogs'
    },{
      id: 2,
      head: "SHOPIFY",
      description:
        "Shopify is a e-commerce website in which a user can buy and sell anything.It contains CRUD operations , user authentication , safe payments.",
      tech: "HTML CSS JS NODEJS EXPRESS MONGODB",
      vidSrc: Vid4,
      url : 'https://github.com/Dipesh123-ux/Shopify'
    },
    {
      id: 3,
      head: "BATTLECARDS",
      description:
        "Battlecards is a one player game in which a player can compare hero powers with villian's, One who get first five points will be considered as winner.",
      tech: "HTML CSS JS BOOTSTRAP",
      vidSrc: Vid2,
      url : 'https://github.com/Dipesh123-ux/battlecards'
    },
    {
      id: 4,
      head: "STREAMER",
      description:
        "Streamer is a video streaming platform in which we can create any type of streams and serve it to the internet. It is a react-redux based application.",
      tech: "ReactJs Redux SemanticUI",
      vidSrc: Vid3,
      url : 'https://github.com/Dipesh123-ux/streamer'
    },
 
  ];

  return (
    <>
      <div className="gallery">
        {data.map((items, index) => {
          return (
            <div className="pics">
              <HoverVideoPlayer
                className="design"
                videoSrc={items.vidSrc}
                key={index}
                pausedOverlay={
                  <div  className="design">
                    <Title>{items.head}</Title>
                    <Des>{items.description}</Des>
                    <Tech>{items.tech}</Tech>
                  </div>
                }
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const Title = styled.h3`
  color: black;

  @media (max-width: 500px) {
    position: relative;
    top: 15px;
  }
`;
const Tech = styled.h5`
  color: #50E3C2;

  @media (max-width: 500px) {
    position: relative;
    bottom: 10px;
  }
`;

const Des = styled.div`
  color: black;
  margin: 5px;
`;

export default Projects;
