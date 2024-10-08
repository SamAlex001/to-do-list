import { useContext, useEffect, useState } from "react";
import "../styles/navbar.css";
import { TaskContext } from "../App";

export const NavBar = () => {

   const { taskArray, setTaskArray, taskID, editing, setEditing } = useContext(TaskContext);
   const [createTaskBool, setCreateTaskBool] = useState(false);

   const handleCreateTask = () => {
      createTaskBool ? setCreateTaskBool(!createTaskBool) : console.log("Create Task: ", createTaskBool);
   }

   function createTask(newTask) {
      newTask = prompt("Enter Task: ");
      setTaskArray([...taskArray, newTask]);

      // console.log("Task Created");
      // console.log(taskArray);
   }

   function editTask() {
      setEditing(editing === false ? !editing : editing);
      const updatedTaskArray = [...taskArray];
      if (editing === true) {
         const newValue = prompt("Enter Changes in Task: ");
         updatedTaskArray[taskID] = newValue;
         setTaskArray([...updatedTaskArray]);
      }
      console.log(editing);
      console.log("Editing Task");

   }

   function removeSelectedTask() {
      const updatedTaskArray = taskArray.filter((_, index) => index !== taskID);
      setTaskArray([...updatedTaskArray]);

      console.log("Removed Selected Task");
      console.log("Updated Array: ", updatedTaskArray)
      // console.log("Task Id (Navbar): ", taskID);

   }

   function removeAllTask() {
      console.log("Removed All Task");
      setTaskArray([]);
   }

   useEffect(() => { console.log(taskArray); }, [taskArray, setTaskArray])


   return (
      <nav>
         <ul className="nav-item-container">
            <li className="nav-item" onClick={() => handleCreateTask ? createTask() : console.log("Create Task NA")}>Add Task</li>
            <li className="nav-item" onClick={editTask}>Edit Task</li>
            <li className="nav-item" onClick={() => removeSelectedTask()}>Remove Selected Task</li>
            <li className="nav-item" onClick={removeAllTask}>Remove All Task</li>
         </ul>
      </nav>
   )
}