import { HiOutlineDotsVertical } from "react-icons/hi";
import PropTypes from "prop-types";

const TaskCard = ({
  headingBg,
  data,
  type,
  statusText,
  handleStatusChanged,
}) => {

  return (
    <div className="shadow-md bg-white rounded-md ">
      <div className={`${headingBg} text-center  rounded-t-md text-white py-2`}>
        {type}
      </div>

      <div className="overflow-y-scroll  max-h-[30rem]">
        {data?.map((singleTask, index) => (
          <div key={index} className="bg-gray-100 p-2 m-2">
            <div className="border-b-2 border-gray-300 pb-2 flex justify-between">
              <h2>{singleTask?.taskTitle}</h2>
              <span className="bg-blue-800 text-white px-2 rounded-sm">
                {singleTask?.priority}
              </span>
            </div>
            <div>{singleTask?.taskDescription}</div>
            <div className="flex justify-between mt-4">
              <p>@{singleTask?.assignees}</p>
              <button className="bg-blue-800 text-white px-1">
                <HiOutlineDotsVertical />
              </button>
            </div>
            <div className="mt-4">

            <span
              className="bg-blue-900  text-white py-1 px-6 rounded-md"
            >
              {statusText}
            </span>
            </div>
          </div>
        ))}

        {data?.length === 0 && (
          <span className="text-center block my-6">No {type} Task</span>
        )}
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  headingBg: PropTypes.string,
};

export default TaskCard;
