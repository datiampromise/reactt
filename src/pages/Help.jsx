import React from "react";
import ReactDOM from "react-dom/client";

function Help() {
  return <h1>Help Page</h1>;
}

export default Help;

function Faq(props) {
  return (
    <h5>
      <li>I am a {props.question1}</li>
    </h5>
  );
}

function Answer() {
  const faq = [
    { id: 1, question1: "This is the answer to your question1" },
    { id: 2, question2: "This is the answer to another question2" },
    { id: 3, question3: "This is the answer to the third question3" },
  ];
  return (
    <>
      <h1>FAQ</h1>
      <ul>
        {faq.map((faq) => (
          <Faq key={faq.id} question1={faq.question1} />
        ))}
      </ul>
    </>
  );
}

// Assignment
// Create and loop through help informnation
// like FAQ
// format will be like question and answer
// Hints:
// 1. Create arrays of objects that will have id, question, answer
// 2. No need for useState or useEffects(react hooks) just use variables
// to handle your arrays.
// 3. Use maps to loop through and show your array like in the to-do operation
