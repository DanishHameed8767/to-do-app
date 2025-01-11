import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tasks, setTasks] = useState(
    initialTasks === null ? [] : JSON.parse(initialTasks)
  );

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
    const newList = [...tasks, { ...item, id: tasks.length }];
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
    </>
  );
}

let ini = [
  {
    id: 0,
    title: "React",
    description: "Learn react concepts",
    status: "pending",
  },
  {
    id: 1,
    title: "MySQL",
    description: "Learn MySQL concepts",
    status: "pending",
  },
  {
    id: 2,
    title: "Nodejs",
    description: "Learn nodejs concepts",
    status: "pending",
  },
  {
    id: 3,
    title: "C Sharp",
    description: "Learn C# concepts",
    status: "pending",
  },
];

let initialTasks = localStorage.getItem("tasks");
