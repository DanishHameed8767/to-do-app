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
      <li className="card col-md-5">
        <div className="card-body">
          <h5 className="card-title">
            {taskStatus === "done" ? <strike>{title}</strike> : title}
          </h5>
          <p className="card-text">
            {taskStatus === "done" ? (
              <strike>{description}</strike>
            ) : (
              description
            )}
          </p>
          <div className="d-flex gap-3 flex-wrap">
            <button
              className={`btn btn-primary ${
                taskStatus === "done" ? "disabled" : ""
              }`}
              onClick={handleDone}
            >
              Mark as done
            </button>
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
            <span className="text-danger">{taskStatus}</span>
          </div>
        </div>
      </li>
    </>
  );
}

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  taskStatus: PropTypes.string,
  deleteTask: PropTypes.func,
  handleDone: PropTypes.func,
  editTask: PropTypes.func,
};
