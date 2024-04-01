import { useState } from "react";
import FilterTask from "./FilterTask";
import SortBy from "./SortBy";
import Tasks from "./Tasks";
import AddNewTask from "./AddNewTask";

const TaskContainer = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="border border-white p-6 rounded-md">
      <AddNewTask
        setTasks={setTasks}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
      <div>
        <div className="flex items-center flex-col-reverse md:flex-row gap-2 justify-between">
          <FilterTask />
          <div className="mx-auto md:m-0">
            <button
              onClick={handleClick}
              className="btn-primary btn btn-sm  bg-blue-800 text-white rounded-sm"
            >
              Add New Task
            </button>
          </div>
        </div>
        <SortBy />
      </div>
      <div>
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default TaskContainer;
