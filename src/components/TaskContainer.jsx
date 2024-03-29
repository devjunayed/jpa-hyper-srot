import FilterTask from "./FilterTask"
import SortBy from "./SortBy"

const TaskContainer = () => {
    return (
        <div className="border border-white p-6 rounded-md">
            <div>
                <div className="flex justify-between">
                    <FilterTask />
                    <button className="btn-primary btn btn-sm  bg-blue-800 text-white rounded-sm">Add New Task</button>
                </div>
                <SortBy />
            </div>
        </div>
    )
}

export default TaskContainer
