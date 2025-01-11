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
      <li className="card col-5">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button
            className={`btn btn-primary ${
              taskStatus === "done" ? "disabled" : ""
            }`}
            onClick={handleDone}
          >
            Mark as done
          </button>
          <button className="btn btn-outline-danger ms-3" onClick={deleteTask}>
            Delete
          </button>
          <button
            className="btn btn-outline-success ms-3"
            onClick={editTask}
            data-bs-toggle="modal"
            data-bs-target="#editModal"
          >
            Edit
          </button>
          <span className="ms-3 text-danger">{taskStatus}</span>
        </div>
        <>
          {/* Button trigger modal */}
          {/* <button
            type="button"
            className="btn btn-primary"
            
          >
            Launch demo modal
          </button> */}
          
        </>
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
