import React from 'react';
import classes from './ToDo.module.css';
import ToDoCard from './ToDoCard/ToDoCard';

const ToDo = ({todoData, refreshedTasks}) => {

  const updateTodos = (data) => {
    console.log("Data: ", data)
    refreshedTasks(data);
  }

  return (
    <>
        <div className={classes.todoContainer}>
            {
                todoData.length > 0 ? todoData.map((todo, index) => {
                    console.log("Todo : ", todo);
                    return <ToDoCard key={index} todo={todo} updateTodos={updateTodos} />
                }) : 
                (<div>No Tasks Available</div>)
            }
        </div>
    </>
  )
}

export default ToDo