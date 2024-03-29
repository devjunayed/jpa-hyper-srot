import TaskCard from "./TaskCard"

const Tasks = () => {
   
    return (
        <div className="grid gap-8 mt-10 grid-cols-5 justify-center items-center">
            <TaskCard headingBg="bg-[#8C8B90]" />
            <TaskCard headingBg="bg-[#E89825]" />
            <TaskCard headingBg="bg-[#42A81E]" />
            <TaskCard headingBg="bg-[#353976]" />
            <TaskCard headingBg="bg-[#F68871]" />
        </div>
    )
}


export default Tasks
