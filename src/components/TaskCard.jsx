import PropTypes from "prop-types";
import SingleTaskCard from "./SingleTaskCard";

const TaskCard = ({
  headingBg,
  data,
  cardType,
  statusText,
  // handleStatusChanged,
  setTasks,
}) => {
  return (
    <div className="shadow-md  overflow-x-hidden bg-white rounded-md ">
      <div className={`${headingBg} text-center  rounded-t-md text-white py-2`}>
        {cardType}
      </div>

      <div className="overflow-y-scroll  overflow-x-hidden   max-h-[30rem]">
        {data?.map((singleTask, index) => (
          <SingleTaskCard
            data={singleTask}
            key={index}
            statusText={statusText}
            setTasks={setTasks}
          />
        ))}

        {data?.length === 0 && (
          <span className="text-center block my-6">No {cardType} Task</span>
        )}
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  headingBg: PropTypes.string,
  data: PropTypes.array,
  cardType: PropTypes.string,
  handleStatusChanged: PropTypes.func,
  statusText: PropTypes.string,
  setTasks: PropTypes.func,
};

export default TaskCard;
