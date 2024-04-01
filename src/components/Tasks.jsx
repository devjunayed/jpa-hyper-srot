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
    <div className=" grid gap-8 mt-10 grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center">
      <TaskCard
        setTasks={setTasks}
        handleStatusChanged={handleStatusChanged}
        statusText="Assign"
        cardType={"Pending"}
        data={pendingTasks}
        headingBg="bg-[#8C8B90]"
      />
      <TaskCard
        setTasks={setTasks}
        handleStatusChanged={handleStatusChanged}
        statusText="In Progress"
        cardType={"In Progress"}
        data={inProgressTasks}
        headingBg="bg-[#E89825]"
      />
      <TaskCard
        setTasks={setTasks}
        handleStatusChanged={handleStatusChanged}
        statusText={"Completed"}
        cardType={"Completed"}
        data={completedTasks}
        headingBg="bg-[#42A81E]"
      />
      <TaskCard
        setTasks={setTasks}
        handleStatusChanged={handleStatusChanged}
        statusText={"Deployed"}
        cardType={"Deployed"}
        data={deployedTasks}
        headingBg="bg-[#353976]"
      />
      <TaskCard
        setTasks={setTasks}
        handleStatusChanged={handleStatusChanged}
        statusText={"Deffered"}
        cardType={"Deffered"}
        data={defferedTasks}
        headingBg="bg-[#F68871]"
      />
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};

export default Tasks;
