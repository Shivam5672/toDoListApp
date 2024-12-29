import React from 'react';
import classes from './ToDoCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ToDoCard = ({todo, updateTodos}) => {

  const handleDeleteTask = () => {
    const todos = JSON.parse(localStorage.getItem('tasks')) || [];
    const filteredTasks = todos.filter((task) => task.taskName !== todo.taskName);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    updateTodos(filteredTasks);
    toast.success("Task Deleted Successfully");
  }

  const handleEditTask = () => {
    const newTaskName = prompt('Edit Task Name', todo.taskName);
    const newTaskDesc = prompt('Edit Task Description (comma-separated)', todo.taskDesc.join(','));
    const newTaskDate = prompt('Edit Task Date', todo.taskDate);

    if (newTaskName && newTaskDesc !== null) {
      const todos = JSON.parse(localStorage.getItem('tasks')) || [];
      const updatedTodos = todos.map((t) =>
        t.taskName === todo.taskName
          ? { ...t, taskName: newTaskName, taskDesc: newTaskDesc.split(','), taskDate: newTaskDate }
          : t
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTodos));
      updateTodos(updatedTodos);
      toast.success("Task Edited Successfully");
    }
  }

  return (
    <div className={classes.todoCardContainer}>
        <h3 className={classes.taskName}>{todo.taskName}</h3>
        <div className={classes.taskDesc}>
            {todo.taskDesc.map((tasks, index) => {
                return <div className={classes.task} key={index}>{tasks}</div>
            })}
        </div>
        <div className={classes.taskCreated}>{todo.taskDate}</div>
        <FontAwesomeIcon className={classes.editIcon} icon={faEdit} onClick={handleEditTask} />
        <FontAwesomeIcon className={classes.deleteIcon} icon={faTrashCan} onClick={handleDeleteTask}/>
    </div>
  )
}

export default ToDoCard