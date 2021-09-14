import React, { useState } from "react";
import styled from "styled-components";

const Post = ({ pic }) => {
  const [like, setLike] = useState(false);
  const handleClick = () => {
    console.log("click");
    setLike(!like);
  };
  console.log(like);
  return (
    <Container>
      <div>
        <Image src={pic.url} alt="NASA image of the day" />
        <h3>{pic.title}</h3>
        <HeaderInfo>
          <h4>{pic.date}</h4>
          <h4>{pic.copyright}</h4>
        </HeaderInfo>
        <p>{pic.explanation}</p>
      </div>
      <Button onClick={handleClick} like={like}>
        {like ? "Liked" : "Like "}
      </Button>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 500px;
  height: auto;
  margin: 10px 10px 10px 10px;
  padding: 20px;
  color: #565656;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 0.3rem 0.075rem grey;
`;

const Image = styled.img`
  max-width: 100%;

  height: auto;
  margin-bottom: 10px;
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  border: 1px solid #565656;
  width: 100px;
  font-size: 0.9rem;
  font-family: Lausanne300-Italic;
  background: ${({ like }) => {
    return like ? "#e1e1e1" : "#F9f9f9";
  }};

  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  text-decoration: none;
  box-shadow: 0.15rem 0.15rem 0.0015rem #565656;

  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateX(0.15rem);
    transform: translateY(0.15rem);
    box-shadow: 0 0 0 0;
  }
`;
