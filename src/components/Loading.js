import React from "react";
import Rocket from "../assets/rocket.png";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <Container>
      <IconWrap>
        <img
          style={{
            height: "100px",
            width: "100px",
            transform: "rotate(45deg)",
          }}
          src={Rocket}
          alt="Rocket Loading Icon"
        />
      </IconWrap>
    </Container>
  );
};

export default Loading;

const Animation = keyframes`
from {
    transform: translateX(0)
}
to {
    transform: translateX(100vw)
}
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const IconWrap = styled.div`
  height: 100px;
  width: 100px;
  animation: ${Animation} 10s infinite ease;
`;
