import React from "react";

const Index = () => {
  let date = new Date().toLocaleString();
  let age = 100;

  return (
    <>
      <h1>Home Page</h1>
      <div>Promise is here</div>
      <div>I am a {age} year old</div>
      <div>Today is {date}</div>
    </>
  );
};

export default Index;
