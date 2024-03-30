import TaskCard from "./TaskCard";
import PropTypes from "prop-types";

const Tasks = ({ tasks, setTasks }) => {
  var pendingTasks = [];
  var inProgressTasks = [];
  var completedTasks = [];
  var deployedTasks = [];
  var defferedTasks = [];

  if (tasks !== undefined) {
    pendingTasks = tasks.filter((task) => task.taskStatus === "Pending");
    inProgressTasks = tasks.filter((task) => task.taskStatus === "In Progress");
    completedTasks = tasks.filter((task) => task.taskStatus === "Completed");
    deployedTasks = tasks.filter((task) => task.taskStatus === "Deployed");
    defferedTasks = tasks.filter((task) => task.taskStatus === "Deffered");
  }

  const handleStatusChanged = (task) => {
    const remainingTasks = tasks.filter((singleTasks) => singleTasks !== task);

    if (task.taskStatus === "Pending") {
      task.taskStatus = "In Progress";
    } else if (task.taskStatus === "In Progress") {
      task.taskStatus = "Completed";
    } else if (task.taskStatus === "Completed") {
      task.taskStatus = "Deployed";
    } else if (task.taskStatus === "Deployed") {
      task.taskStatus = "Deffered";
    } else {
      task = {};
    }

    setTasks(() => [remainingTasks, task]);

    console.log("Clicked");
    console.log(task);
  };

  console.log(pendingTasks);

  return (
    <div className="grid gap-8 mt-10 grid-cols-5 justify-center items-center">
      <TaskCard
        handleStatusChanged={handleStatusChanged}
        statusText="Assign"
        type={"Pending"}
        data={pendingTasks}
        headingBg="bg-[#8C8B90]"
      />
      <TaskCard
        handleStatusChanged={handleStatusChanged}
        statusText="In Progress"
        type={"In Progress"}
        data={inProgressTasks}
        headingBg="bg-[#E89825]"
      />
      <TaskCard
        handleStatusChanged={handleStatusChanged}
        statusText={"Completed"}
        type={"Completed"}
        data={completedTasks}
        headingBg="bg-[#42A81E]"
      />
      <TaskCard
        handleStatusChanged={handleStatusChanged}
        statusText={"Deployed"}
        type={"Deployed"}
        data={deployedTasks}
        headingBg="bg-[#353976]"
      />
      <TaskCard
        handleStatusChanged={handleStatusChanged}
        statusText={"Deffered"}
        type={"Deffered"}
        data={defferedTasks}
        headingBg="bg-[#F68871]"
      />
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
};

export default Tasks;
