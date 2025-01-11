import { useState } from "react";
import PropTypes from "prop-types";

export default function Form({ addTask }) {
  const [fields, setFields] = useState({
    title: "",
    description: "",
    status: "pending",
  });

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    addTask(fields);
  };
  return (
    <>
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
          <label htmlFor="description" className="form-label fw-normal fs-4">
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
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </>
  );
}

Form.propTypes = {
  addTask: PropTypes.func,
};
