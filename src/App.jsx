import React, { useEffect, useState } from 'react';
import './App.css';
import PrimaryButton from './Components/PrimaryButton/PrimaryButton';
import ToDo from './Components/ToDo/ToDo';
import Modal from './Components/Modal/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNewTask = () => {
    setIsModalOpen(true);
  };

  const getNewTaskFromModal = (task) => {
    setNewTask(task);
  };

  const refreshedTasks = (tasks) => {
    console.log("Tasks: ", tasks);
    setTasks([]);
    setTasks(tasks);
    toast.success("Task Deleted Successfully");
  }

  useEffect(() => {
    if (newTask.taskName) {
      setTasks((prev) => {
        const updatedTasks = [...prev, newTask];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        toast.success("New Task Added.");
        return updatedTasks;
      });
    }
  }, [newTask]);

  return (
    <div className="app">
      <div className="header">
        <h1 className="main-heading">To Do List App</h1>
        <PrimaryButton
          className={"addNewBtn"}
          children={"Add"}
          onClick={handleAddNewTask}
          toolTip={"Add new task"}
        />
      </div>
      <div className="body">
        <h2 className="sub-heading">Your Todos</h2>
        <ToDo todoData={tasks} refreshedTasks={refreshedTasks} />
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} fetchNewTaskData={getNewTaskFromModal} />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
