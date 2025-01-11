import { useEffect, useRef, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Navbar from "./components/Navbar";

export default function App() {
  const [tasks, setTasks] = useState(
    initialTasks === null ? [] : JSON.parse(initialTasks)
  );
  const ref = useRef(null);
  const previousLengthRef = useRef(tasks.length);

  useEffect(() => {
    // Scroll to the bottom only if a new item is added
    if (tasks.length > previousLengthRef.current) {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // Update the previous length reference
    previousLengthRef.current = tasks.length;
  }, [tasks]);
  const deleteTask = (item) => {
    const newList = tasks.filter((x) => x.id !== item.id);
    setTasks(newList);
    localStorage.setItem("tasks", JSON.stringify(newList));
  };

  const handleDone = (item) => {
    const newList = tasks.map((x) => {
      if (x.id === item.id) {
        return { ...x, status: "done" };
      } else {
        return x;
      }
    });
    setTasks(newList);
    localStorage.setItem("tasks", JSON.stringify(newList));
  };

  const addTask = (item) => {
    const id =
      tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1;
    const newList = [...tasks, { ...item,id }];
    setTasks(newList);
    localStorage.setItem("tasks", JSON.stringify(newList));
  };

  const editTask = (item) => {
    const newList = tasks.map((x) => (x.id === item.id ? item : x));
    setTasks(newList);
    localStorage.setItem("tasks", JSON.stringify(newList));
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

let initialTasks = localStorage.getItem("tasks");
