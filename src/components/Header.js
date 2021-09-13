import React, { useEffect, useState } from "react";
import { FiGithub, FiTwitter, FiCodepen } from "react-icons/fi";
import styled, { keyframes } from "styled-components";

const Header = () => {
  const [stars, setStars] = useState([]);
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: 70, // fixed height of header
  });

  const updateSize = () =>
    setSize({
      x: window.innerWidth,
    });

  useEffect(() => (window.onresize = updateSize), []);

  useEffect(() => {
    let array = [];
    for (let i = 0; i < 100; i++) {
      // set random star height/width
      array = [...array, Math.round(Math.random() * 10)];
      if (i === 99) {
        setStars(array);
      }
    }
  }, []);

  return (
    <Container>
      {stars.length > 98 &&
        stars.map((element) => {
          return (
            <Star
              style={{
                height: `${element}px`,
                width: `${element}px`,
                position: "absolute",
                left: `${size.x * Math.random()}px`,
                top: `${size.y * Math.random()}px`,
              }}
            />
          );
        })}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "20px",
        }}
      >
        <LineIconWrapper>
          <Line />
          <Icons>
            <Link href="https://github.com/christopherjbanks">
              <FiGithub
                aria-hidden="true"
                style={{ margin: "0", height: "25px", width: "25px" }}
              />{" "}
              <span style={{ display: "none" }}>
                Link to Chris Banks' Github
              </span>
            </Link>
            <Link href="https://codepen.io/chris_jb">
              <FiCodepen
                style={{ margin: "0", height: "25px", width: "25px" }}
              />
              <span style={{ display: "none" }}>
                Link to Chris Banks' Codepen
              </span>
            </Link>
            <Link href="https://twitter.com/chris____jb">
              <FiTwitter
                style={{ margin: "0", height: "25px", width: "25px" }}
              />
              <span style={{ display: "none" }}>
                Link to Chris Banks' Twitter
              </span>
            </Link>
          </Icons>
        </LineIconWrapper>
        <h2 style={{ color: "white" }}>Spacestagram</h2>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: sticky;
  top: 0;
  padding: 20px;
  background: black;
  z-index: 10;
`;

const Star = styled.div`
  border-radius: 100%;
  background: white;
  box-shadow: 0 0 5px 6=10px black;
  opacity: 0.7;
`;

const slideRight = keyframes`
from {
  opacity: 0;
  transform: translateX(-30px);
}
to {
  opacity: 1;
  transform: translateX(0px);
}
`;

const LineIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  width: 100%;
  animation: ${slideRight} 1s cubic-bezier(0.61, 0.11, 0.27, 0.89);
`;

const Line = styled.div`
  height: 2px;
  width: 175px;
  background-color: gray;
`;

const Icons = styled.nav`
  display: flex;
  justify-content: space-evenly;
  color: gray;
  margin-top: 0;
  width: 200px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
