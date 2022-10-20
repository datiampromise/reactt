import { useState } from "react";

function Help() {
  const [faq, setFaq] = useState([
    { id: 1, question: "This is question 1", ans: "The Answer to Q1" },
    { id: 2, question: "This is question 2", ans: "The Answer to Q2" },
    { id: 3, question: "This is question 3", ans: "The Answer to Q3" },
  ]);

  const [que, setQue] = useState("");
  const [ans, setAns] = useState("");

  function submit() {
    let id = faq.length + 1;
    let newObj = {
      id: id,
      question: que,
      ans: ans,
    };
    faq[id - 1] = newObj;
    setFaq([...faq]);
    setQue("");
    setAns("");
  }

  // let abc = [
  //   [
  //     ["id", 1],
  //     ["quest", "what is water?"],
  //     ["ans", "it is a liquid"],
  //   ],
  //   [
  //     ["id", 2],
  //     ["quest", "what is water?"],
  //     ["ans", "it is a liquid"],
  //   ],
  //   [
  //     ["id", 3],
  //     ["quest", "what is water?"],
  //     ["ans", "it is a liquid"],
  //   ],
  // ];

  let toggle = (e) => {
    console.log(e.target);
    let togu = e.target.id;
    let togman = document.querySelector("a" + e.target.id);
  };

  return (
    <>
      <h1>Help Page</h1>
      {faq.map((f) => (
        <div key={f.id} className="qa-section">
          <div>
            <div className="font-bold text-xl flex justify-between items-center px-3 py-3 mb-2 border-b border-white border-opacity-20">
              {f.question}
              <a className="button px-4 py-1 bg-purple-600 inline-block " onClick={toggle} id={"q" + f.id}>
                +
              </a>
            </div>
          </div>

          <h3 id={"a" + f.id}>{f.ans}</h3>
        </div>
      ))}

      <div className="qa-section">
        <div className=" mb-2 pb-2 border-b border-white border-opacity-20">
          <input type="text" value={que} placeholder="Question" className="px-3" onChange={(e) => setQue(e.target.value)} />
        </div>
        <div>
          <input type="text" value={ans} placeholder="Answer" className="px-3" onChange={(e) => setAns(e.target.value)} />
          <br />
          <a onClick={submit} className="inline-block bg-purple-600 text-white mt-3 rounded-md py-1.5 px-6 hover:bg-black hover:text-white cursor-pointer">
            Add FAQ
          </a>
        </div>
      </div>

      {/* {abc.map((a) => (
        <div key={a[0][1]}>
          <div>{a[1][1]}</div>
          <h1>{a[2][1]}</h1>
        </div>
      ))} */}
    </>
  );
}

export default Help;

// Assignment
// Create and loop through help informnation
// like FAQ
// format will be like question and answer
// Hints:
// 1. Create arrays of objects that will have id, question, answer
// 2. No need for useState or useEffects(react hooks) just use variables
// to handle your arrays.
// 3. Use maps to loop through and show your array like in the to-do operation
