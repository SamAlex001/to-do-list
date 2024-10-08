import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../App";
import "../styles/task.css";

export const Task = () => {

   const { taskArray, setTaskArray, taskID, setTaskID } = useContext(TaskContext);
   const [taskClicked, setTaskClicked] = useState(false);
   const [clickedTaskId, setClickedTaskId] = useState(null);

   function handleTask(taskId) {
      setTaskClicked(!taskClicked);
      setClickedTaskId(taskId === setTaskID(taskId) && clickedTaskId ? null : taskId);
      // console.log(taskId)
   }

   return (
      <>
         <ul className="task-container">
            {taskArray.map((value, taskId) => (
               <li
                  key={taskId}
                  className={`task-list-item ${clickedTaskId === taskId ? "clicked" : ""
                     }`}
                  onClick={() => handleTask(taskId)}
               >
                  {value}
               </li>
            ))}
         </ul >
      </>
   )
}