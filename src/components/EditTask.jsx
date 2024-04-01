import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
import { toastError, toastSuccess } from "../utils/toast";
import { useState } from "react";
import PropTypes from 'prop-types';


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

  
  function handleSubmit(e) {
    e.preventDefault();
    if (formData.taskTitle.length === 0) {
      toastError("Please enter task title");
    }else if(formData.taskDescription.length === 0){
        toastError("Please enter description");
    }else if(formData.assignees.length === 0){
        toastError("Please enter assignees");
    }else if(formData.teamName.length === 0){
        toastError("Please enter team name");
    }else{
        setTasks((prevTasks)=> [...prevTasks, formData]);
        toastSuccess("Task added");
        setIsEditModalOpen(false);
    }
  }

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
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mx-10 my-4"
          >
            <label htmlFor="" className="flex justify-between">
              Title:
              <input
                defaultValue={formData.taskTitle}
                onChange={handleInputChange}
                type="text"
                name="taskTitle"
                className="w-2/3"
              />
            </label>
            <label htmlFor="" className="flex justify-between">
              Description:
              <input
                onChange={handleInputChange}
                type="text"
                defaultValue={formData.taskDescription}
                name="taskDescription"
                className="w-2/3"
              />
            </label>
            <label htmlFor="" className="flex justify-between">
              Team:
              <input
                onChange={handleInputChange}
                type="text"
                defaultValue={formData.teamName}
                name="teamName"
                className="w-2/3"
              />
            </label>
            <label htmlFor="" className="flex justify-between">
              Assignees:
              <input
                type="text"
                name="assignees"
                onChange={handleInputChange}
                defaultValue={formData.assignees}
                className="w-2/3"
              />
            </label>
            <label htmlFor="" className="flex justify-between">
              Priority:
              <select
                name="priority"
                defaultValue={formData.priority}
                onChange={handleInputChange}
                id=""
                className="w-2/3"
              >
                <option defaultValue="P0">P0</option>
                <option defaultValue="P1">P1</option>
                <option defaultValue="P2">P2</option>
              </select>
            </label>
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
  task: PropTypes.object
}

export default EditTask;
