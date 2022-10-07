import { useState, useEffect } from "react";

const Todo = () => {
  let [newTask, setNewTask] = useState("");
  let [doneTask, setDoneTask] = useState(0);
  let [allTasks, setAllTasks] = useState([{ id: 1, task: "Tasker 1", status: 0 }]);
  // Statuses - 0: Open, 1: Done, 2: Deleted

  useEffect(() => {
    let done = allTasks.filter((t) => t.status == 1).length;
    setDoneTask(done);
  }, [allTasks]);

  function handleSubmit() {
    if (!newTask) return;

    // GET last id
    let id = allTasks.length + 1;

    // Create new obj
    let newObj = { id: id, task: newTask, status: 0 };

    // set it to the state
    setAllTasks([...allTasks, newObj]);
    setNewTask("");
  }

  function handleCheck(id, status) {
    // Find in allTask by id
    let task = allTasks.filter((t) => t.id == id)[0];

    // change the status
    task.status = status ? 1 : 0; //ternary operator
    allTasks[id - 1] = task;

    // update setAllStatus
    setAllTasks([...allTasks]);
  }

  return (
    <>
      <h1>Todo Page</h1>

      <div>
        <h3>New Task</h3>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={handleSubmit}>Add Task</button>
      </div>

      <hr />

      <div>
        <h3>All Tasks</h3>
        {doneTask ? (
          <>
            <div>
              Done Tasks: {doneTask} out of {allTasks.length}
            </div>
            <br />
          </>
        ) : (
          ""
        )}
        {allTasks.length
          ? allTasks.map((d) => (
              <div className="tasks" key={d.id}>
                <input type="checkbox" onChange={(e) => handleCheck(d.id, e.target.checked)} />
                <span>{d.task}</span>
                <a>&times;</a>
              </div>
            ))
          : ""}
      </div>

      <div style={{ height: "400px" }}></div>
    </>
  );
};

export default Todo;

// Create a Task
// Edit a Task
// Delete a Task

// HOOKS

// Anonymous Function () => fn()
