export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      const id = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1;
      const newList = [...tasks, { ...action.task, id }];
      localStorage.setItem("tasks", JSON.stringify(newList));
      return newList;
    }
    case "deleted": {
      const newList = tasks.filter((x) => x.id !== action.id);
      localStorage.setItem("tasks", JSON.stringify(newList));
      return newList;
    }
    case "status_changed": {
      const newList = tasks.map((x) => {
        if (x.id === action.id) {
          return { ...x, status: !x.status };
        } else {
          return x;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(newList));
      return newList;
    }
    case "updated": {
      const newList = tasks.map((x) =>
        x.id === action.task.id ? action.task : x
      );
      localStorage.setItem("tasks", JSON.stringify(newList));
      return newList;
    }
    default:
      break;
  }
}
