import { createContext, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Task } from "./components/Task";

export const TaskContext = createContext();

const App = () => {

   const [taskArray, setTaskArray] = useState([]);
   const [taskID, setTaskID] = useState(null);
   const [editing, setEditing] = useState(false);

   return (
      <TaskContext.Provider value={{
         taskArray, setTaskArray,
         taskID, setTaskID,
         editing, setEditing
      }}>
         <div>
            <NavBar />
            <Task />
         </div>
      </TaskContext.Provider>
   )
}

export default App;