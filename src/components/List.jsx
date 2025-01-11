import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import ListContainer from "./ListContainer";
import ListItem from "./ListItem";

export default function List({ tasks, deleteTask, handleDone, editTask }) {
  const [fields, setFields] = useState({
    title: "",
    description: "",
    status: "",
  });
  const listItems = tasks.map((task) => {
    return (
      <Fragment key={task.id}>
        <ListItem
          title={task.title}
          description={task.description}
          taskStatus={task.status}
          handleDone={() => handleDone(task)}
          deleteTask={() => deleteTask(task)}
          editTask={() => {
            setFields(task);
          }}
        />
      </Fragment>
    );
  });

  return (
    <>
      <ListContainer>{listItems}</ListContainer>
      <Modal fields={fields} setFields={setFields} editTask={editTask} />
    </>
  );
}

List.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func,
  handleDone: PropTypes.func,
  editTask: PropTypes.func,
};

const Modal = ({ fields, setFields,editTask }) => {
  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    editTask(fields);
  };
  return (
    <>
      {/* Modal */}
      <div className="modal fade" id="editModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Task
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label fw-normal fs-4">
                    Task Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={fields.title}
                    name="title"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="description"
                    className="form-label fw-normal fs-4"
                  >
                    Task Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={fields.description}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  fields: PropTypes.object,
  setFields: PropTypes.func,
  editTask: PropTypes.func,
};
