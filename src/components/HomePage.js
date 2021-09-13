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
          <h3 style={{ paddingLeft: "20px", color: "#565656" }}>
            A selection of 12 random pictures from NASA's Astronomy Picture of
            the Day (APOD) API
          </h3>
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
  margin-left: 4vw;
  margin-right: 4vw;
  margin-top: 0;
  width: 100%;
  max-width: 92vw;
  padding: 10px;
  z-index: 5;
  animation: ${animation} 1s linear;
`;
