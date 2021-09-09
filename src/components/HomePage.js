import React, { useEffect, useState } from "react";
import Post from "./Post";
import styled from "styled-components";

const API_KEY = process.env.REACT_APP_API_KEY;

const HomePage = () => {
  const [dailyPics, setDailyPics] = useState(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`)
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
    <Wrapper>
      {dailyPics &&
        dailyPics.map((element, index) => <Post pic={element} key={index} />)}
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  background-color: #d3d3d3;
  margin-top: 0;
  width: 540px;
  padding: 10px;
`;
