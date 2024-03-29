import { HiOutlineDotsVertical } from "react-icons/hi";
import PropTypes from 'prop-types';

const TaskCard = ({headingBg}) => {


  return (
    <div className="shadow-md bg-white rounded-md ">
      <div className={`${headingBg} text-center  rounded-t-md text-white py-2`}>Pending</div>

      <div className="overflow-y-scroll  max-h-[30rem]">

      <div className="bg-gray-100 p-2 m-2">
        <div className="border-b-2 border-gray-300 pb-2 flex justify-between">
            <h2>Task 1</h2>
            <span className="bg-blue-800 text-white px-2 rounded-sm">P0</span>
        </div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta inventore dolores.</div>
        <div className="flex justify-between mt-4">
            <p>@Junayed</p>
            <button><HiOutlineDotsVertical /></button>
        </div>
        <button className="bg-blue-900 text-white py-1 px-6 mt-4 rounded-md">Assign</button>
      </div>
      <div className="bg-gray-100 p-2 m-2">
        <div className="border-b-2 border-gray-300 pb-2 flex justify-between">
            <h2>Task 1</h2>
            <span className="bg-blue-800 text-white px-2 rounded-sm">P0</span>
        </div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta inventore dolores.</div>
        <div className="flex justify-between mt-4">
            <p>@Junayed</p>
            <button>dot</button>
        </div>
        <button className="bg-blue-900 text-white py-1 px-6 mt-4 rounded-md">Assign</button>
      </div>
      <div className="bg-gray-100 p-2 m-2">
        <div className="border-b-2 border-gray-300 pb-2 flex justify-between">
            <h2>Task 1</h2>
            <span className="bg-blue-800 text-white px-2 rounded-sm">P0</span>
        </div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta inventore dolores.</div>
        <div className="flex justify-between mt-4">
            <p>@Junayed</p>
            <button>dot</button>
        </div>
        <button className="bg-blue-900 text-white py-1 px-6 mt-4 rounded-md">Assign</button>
      </div>
      </div>
    </div>
  )
}

 TaskCard.propTypes = {
  headingBg: PropTypes.string,
}

export default TaskCard;
