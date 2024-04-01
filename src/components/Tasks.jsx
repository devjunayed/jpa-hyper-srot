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

  

  return (
    <div className=" grid gap-8 mt-10 grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center">
      <TaskCard
        setTasks={setTasks}
        statusText="Assign"
        cardType={"Pending"}
        data={pendingTasks}
        headingBg="bg-[#8C8B90]"
      />
      <TaskCard
        setTasks={setTasks}
        statusText="In Progress"
        cardType={"In Progress"}
        data={inProgressTasks}
        headingBg="bg-[#E89825]"
      />
      <TaskCard
        setTasks={setTasks}
        statusText={"Completed"}
        cardType={"Completed"}
        data={completedTasks}
        headingBg="bg-[#42A81E]"
      />
      <TaskCard
        setTasks={setTasks}
        statusText={"Deployed"}
        cardType={"Deployed"}
        data={deployedTasks}
        headingBg="bg-[#353976]"
      />
      <TaskCard
        setTasks={setTasks}
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
