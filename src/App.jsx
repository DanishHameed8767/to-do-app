import { useEffect, useReducer, useRef } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Navbar from "./components/Navbar";
import taskReducer from "./components/taskReducer";

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const ref = useRef(null);
  const previousLengthRef = useRef(tasks.length);

  useEffect(() => {
    if (tasks.length > previousLengthRef.current) {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    previousLengthRef.current = tasks.length;
  }, [tasks]);

  const deleteTask = (item) => {
    dispatch({
      type: "deleted",
      id: item.id,
    });
  };

  const handleDone = (item) => {
    dispatch({
      type: "status_changed",
      id:item.id,
    });
  };

  const addTask = (item) => {
    dispatch({
      type: "added",
      task: item,
    });
  };

  const editTask = (item) => {
    dispatch({
      type: "updated",
      task: item,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <h1>Add Task</h1>
        <Form addTask={addTask} />
      </div>
      <div className="container">
        <h1 className="mt-2">Tasks</h1>
        <List
          tasks={tasks}
          handleDone={handleDone}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
      <div id="scroll-elem" ref={ref}></div>
    </>
  );
}

let initialTasks =
  localStorage.getItem("tasks") === null
    ? []
    : JSON.parse(localStorage.getItem("tasks"));
