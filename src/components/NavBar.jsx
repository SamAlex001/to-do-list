import { useContext, useEffect, useState } from "react";
import "../styles/navbar.css";
import { TaskContext } from "../App";

export const NavBar = () => {

   const { addTask, setAddTask, tasks, setTasks, selectTask, taskIndex } = useContext(TaskContext);
   const newTasks = useState([]);
   const taskListLength = newTasks.length;

   function handleAddTask() { setAddTask(!addTask) }
   
   function createTask() {
      handleAddTask();
      addTask ? newTasks.push(`Task ${tasks.length + 1}`) : [...tasks];
      setTasks(tasks);
      console.log(addTask)
      // console.log(addTask);
      // console.log(newTasks[3]);
   }

   function removeSelectedTask() {
      console.log("remove selected tasks!")
   }

   function removeAllTask() {
      setTasks([]);
      setAddTask(false);
   }



   return (
      <nav>
         <ul className="nav-item-container">
            <li className="nav-item" onClick={createTask}>Add Task</li>
            <li className="nav-item">Edit Task</li>
            <li className="nav-item" onClick={removeSelectedTask}>Remove Selected Task</li>
            <li className="nav-item" onClick={removeAllTask}>Remove All Task</li>
         </ul>
      </nav>
   )
}