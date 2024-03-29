
const FilterTask = () => {
  return (
    <div className="flex gap-4 w-9/12 mb-4 items-center">
      Filter By:
      <div className="flex gap-4 justify-between">
        <input type="text" className="w-52 px-2 rounded-md h-8 border-none outline-none" placeholder="Assignee Name" />
        <select value="Priority" name="" id="" className="w-52 px-2 rounded-md h-8 border-none outline-none" >
          <option value="p0">P0</option>
          <option value="p1">P1</option>
          <option value="p2">P2</option>
        </select>
        <input type="date" className="outline-none w-64 px-2 rounded-md h-8 border-none" />
      </div>
    </div>
  )
}

export default FilterTask
