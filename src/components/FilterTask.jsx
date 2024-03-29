
const FilterTask = () => {
  return (
    <div className="flex gap-4 w-2/3">
      Filter By:
      <div className="flex gap-4 justify-between">
        <input type="text" className="w-52 px-2 rounded-md h-8 border-none outline-none" placeholder="Assignee Name" />
        <select name="" id="" className="w-52 px-2 rounded-md h-8 border-none outline-none" >
          <option value="s">P0</option>
          <option value="s">P1</option>
          <option value="s">P2</option>
        </select>
        <input type="date" className="outline-none w-64 px-2 rounded-md h-8 border-none" />
      </div>
    </div>
  )
}

export default FilterTask
