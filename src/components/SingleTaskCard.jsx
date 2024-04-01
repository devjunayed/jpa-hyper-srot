import { HiOutlineDotsVertical } from "react-icons/hi";
import EditTask from "./EditTask";
import { useState } from "react";
import PropType from "prop-types";
import { Popover } from "antd";
import Swal from "sweetalert2";

const SingleTaskCard = ({data, statusText, setTasks}) => {

    const [open, setOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
    const hide = () => {
      setOpen(false);
    };
  
    const handleEditClick = () => {
      setIsEditModalOpen(true);
      hide();
    };
  

    const handleDelete = () => {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",  
        showCancelButton: true,
        confirmButtonColor: "#1E40AF",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

          // deleting task if confrim button clicked
          setTasks((prevTasks) => {
            return prevTasks.filter((singleTask) => singleTask !== data);
          })
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    }

    const content = (
      <div className="flex flex-col">
        <button onClick={handleEditClick} className="px-2">
          Edit
        </button>
        <span className="divider my-0"></span>
        <button onClick={handleDelete} className="px-2">Delete</button>
      </div>
    );
  
  return (
    <div  className="rounded bg-gray-200 shadow-sm py-4 p-2 m-2 relative">
      <div className="border-b-2 border-gray-300 pb-2 flex justify-between">
        <h2>{data?.taskTitle}</h2>
        <span className="bg-blue-800 text-white px-2 rounded-sm">
          {data?.priority}
        </span>
      </div>
      <div>{data?.taskDescription}</div>
      <div className="flex justify-between mt-4   ">
        <p>@{data?.assignees}</p>

        <Popover
          trigger="click"
          open={open}
          placement="right"
          content={content}
        >
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-800 text-white p-1"
          >
            <HiOutlineDotsVertical />
          </button>
          <EditTask
            task={data}
            setTasks={setTasks}
            isEditModalOpen={isEditModalOpen}
            setIsEditModalOpen={setIsEditModalOpen}
          />
        </Popover>
      </div>
      <div className="mt-4">
        <span className="bg-blue-900  text-white py-1 px-6 rounded-md">
          {statusText}
        </span>
      </div>
    </div>
  );
};

SingleTaskCard.propTypes ={
    data: PropType.object,
    statusText: PropType.string,
    setTasks: PropType.func,
}

export default SingleTaskCard;
