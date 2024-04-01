import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
import {  toastSuccess } from "../utils/toast";
import { useState } from "react";
import PropTypes from "prop-types";

const EditTask = ({ isEditModalOpen, task, setIsEditModalOpen, setTasks }) => {
  const [formData, setFormData] = useState(task);

  console.log(formData);

  const closeModal = () => {
    setIsEditModalOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    setTasks((prevTask) => {
       
      const unmatchedTask = prevTask.filter(
        (singleTask) => singleTask !== task
      );
        
      toastSuccess("Task Updated");
      return [...unmatchedTask, formData];

    });
  };


  function handleInputChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <Modal
        className={"absolute  bg-gradient-to-r from-pink-200 to-violet-200"}
        isOpen={isEditModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-between w-full p-2 bg-white ">
          <h2>EDIT TASK</h2>
          <button
            className="border p-1 text-sm rounded-full  border-black"
            onClick={closeModal}
          >
            <IoIosClose />
          </button>
        </div>
        <div className="w-96 ">
          <form
            onSubmit={(e) => handleUpdate(e)}
            className="flex flex-col gap-4 mx-10 my-4"
          >
            <label htmlFor="" className="flex flex-col gap-2 justify-between">
              Title:
              <input
                disabled
                defaultValue={formData.taskTitle}
                onChange={handleInputChange}
                type="text"
                name="taskTitle"
                className="w-full px-1 border "
              />
            </label>
            <label htmlFor="" className="flex flex-col gap-2 justify-between">
              Description:
              <textarea
                onChange={handleInputChange}
                type="text"
                defaultValue={formData.taskDescription}
                name="taskDescription"
                disabled
                className="w-full px-2 border-2"
                rows={3}
              />
            </label>
            <label htmlFor="" className="flex flex-col gap-2 justify-between">
              Team:
              <input
                onChange={handleInputChange}
                type="text"
                defaultValue={formData.teamName}
                name="teamName"
                disabled
                className="w-full px-2 border"
              />
            </label>
            <label htmlFor="" className="flex flex-col gap-2 justify-between">
              Assignees:
              <input
                type="text"
                name="assignees"
                onChange={handleInputChange}
                defaultValue={formData.assignees}
                disabled
                className="w-full px-2"
              />
            </label>
            <div className="flex justify-between">
              <label htmlFor="" className="flex gap-2 justify-between">
                Priority:
                <select
                  name="priority"
                  defaultValue={formData.priority}
                  onChange={handleInputChange}
                  id=""
                  className="w-1/2"
                >
                  <option defaultValue="P0">P0</option>
                  <option defaultValue="P1">P1</option>
                  <option defaultValue="P2">P2</option>
                </select>
              </label>
              <label htmlFor="" className="flex justify-between">
                status:
                <select
                  name="taskStatus"
                  defaultValue={formData.taskStatus}
                  onChange={handleInputChange}
                  id=""
                  className="w-1/2"
                >
                  <option defaultValue="Pending">Pending</option>
                  <option defaultValue="In Progress">In Progress</option>
                  <option defaultValue="Completed">Completed</option>
                  <option defaultValue="Deployed">Deployed</option>
                  <option defaultValue="Deffered">Deffered</option>
                </select>
              </label>
            </div>

            <input
              type="submit"
              className="btn-sm btn bg-blue-800 btn-primary text-white"
              value="Submit"
            />
          </form>
        </div>
      </Modal>
    </div>
  );
};

EditTask.propTypes = {
  isEditModalOpen: PropTypes.bool,
  setIsEditModalOpen: PropTypes.func,
  setTasks: PropTypes.func,
  task: PropTypes.object,
};

export default EditTask;
