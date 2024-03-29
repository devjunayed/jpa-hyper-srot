import { createContext, useState } from "react"
import PropTypes from 'prop-types';

export const TaskContext = createContext(null);

const TaskDataProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    const values = { tasks, setTasks }

    return <TaskContext.Provider value={values}>
        {children}
    </TaskContext.Provider>
}

TaskDataProvider.propTypes = {
    children: PropTypes.node
}

export default TaskDataProvider;
