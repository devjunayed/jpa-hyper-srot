// import { useState } from "react"
import TaskCard from "./TaskCard"

const Tasks = () => {
    // const [taskData, setTaskData] = useState([]);

    // const data = {
    //     pending: [
    //         {
    //             title: "Task 1",
    //             priority: "P0",
    //             description: "lajsdflsjflsjflsdflsdjf aldsf jlsdjf ",
    //             assignee: "Junayed",
    //             status: "pending"
    //         }
    //     ]
    // }

    return (
        <div className="grid gap-8 mt-10 grid-cols-5 justify-center items-center">
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
        </div>
    )
}


export default Tasks
