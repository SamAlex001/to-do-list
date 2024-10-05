import { createContext, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Task } from "./components/Task";

export const TaskContext = createContext();

const App = () => {

   const [tasks, setTasks] = useState([]);
   const [selectTask, setSelectTask] = useState(false);
   const [addTask, setAddTask] = useState(false);
   const [taskIndex, setTaskIndex] = useState(null);

   return (
      <TaskContext.Provider value={{ tasks, setTasks, selectTask, setSelectTask, addTask, setAddTask, taskIndex, setTaskIndex }}>
         <div>
            <NavBar />
            <Task />
         </div>
      </TaskContext.Provider>
   )
}

export default App;