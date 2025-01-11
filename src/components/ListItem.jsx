import PropTypes from "prop-types";

export default function ListItem({
  title,
  description,
  taskStatus,
  handleDone,
  deleteTask,
  editTask,
}) {
  return (
    <>
      <li className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3">
            <div>
              <h5 className="card-title">
                {taskStatus ? <strike>{title}</strike> : title}
              </h5>
              <p className="card-text">{description}</p>
            </div>
            <div>
              <span className="text-danger">
                {taskStatus ? "done" : "pending"}
              </span>
            </div>
          </div>
          <div className="d-flex gap-3 flex-wrap align-items-center justify-content-between">
            <div className="d-flex gap-3 flex-wrap">
              <button className="btn btn-outline-danger" onClick={deleteTask}>
                Delete
              </button>
              <button
                className="btn btn-outline-success"
                onClick={editTask}
                data-bs-toggle="modal"
                data-bs-target="#editModal"
              >
                Edit
              </button>
            </div>
            <div>
              <button className="btn btn-primary" onClick={handleDone}>
                Mark as {taskStatus ? "undone" : "done"}
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  taskStatus: PropTypes.bool,
  deleteTask: PropTypes.func,
  handleDone: PropTypes.func,
  editTask: PropTypes.func,
};
