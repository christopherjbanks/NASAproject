import React, { useEffect, useState } from "react";
import Post from "./Post";
import styled, { keyframes } from "styled-components";
import Loading from "./Loading";

const API_KEY = process.env.REACT_APP_API_KEY;

const HomePage = () => {
  const [dailyPics, setDailyPics] = useState(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=12`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDailyPics(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      {!dailyPics && <Loading />}
      {dailyPics && (
        <Wrapper>
          <h1 style={{ padding: "20px" }}>Spacestagram</h1>
          <PostWrapper>
            {dailyPics.map((element, index) => (
              <Post pic={element} key={index} />
            ))}
          </PostWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default HomePage;

const animation = keyframes`
from {
  opacity: 0
}
to {
  opacity: 1
}
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Wrapper = styled.div`
  /* margin: 2em auto 4em; */

  background-color: rgb(211, 211, 211);
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 0;
  width: 100%;
  max-width: 80vw;
  padding: 10px;
  z-index: 5;
  animation: ${animation} 1s linear;
`;
