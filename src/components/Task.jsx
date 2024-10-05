import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../App";
import "../styles/task.css";

export const Task = () => {

   const { addTask, setAddTask, tasks, selectTask, setSelectTask, taskIndex, setTaskIndex } = useContext(TaskContext);
   const [taskClicked, setTaskClicked] = useState(false);
   const [taskList, setTaskList] = useState([...tasks]);
   
   useEffect(() => {
      if (addTask !== true) setAddTask(true); // automatically sets addTask to false if true
   }, []);


   function handleTaskClick(index) {
      // setTaskIndex(index);
      setTaskClicked(!taskClicked);
      setSelectTask(!selectTask);
   }

   return (
      <>
         <ul className="task-container">
            {(tasks.map((task, indx) => (
               <li key={indx} className="task-list-item"
                  onClick={handleTaskClick}
                  style={{
                     border: taskClicked ? "1px solid #ffffff" : "",
                     paddingLeft: "10px",
                     paddingRight: "10px",
                     padding: "5px",
                  }}
               >{task}</li>)))}
         </ul>
      </>
   )
}
