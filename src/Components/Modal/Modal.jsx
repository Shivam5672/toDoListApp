import React, { useState } from 'react';
import classes from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import PrimaryInput from '../PrimaryInput/PrimaryInput';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Modal = ({ onClose, fetchNewTaskData }) => {

    const [taskName, setTaskName] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const handleAddNewTask = () => {
        const newTaskData = {
            taskName: taskName,
            taskDate: taskDate,
            taskDesc: taskDesc.split('\n')
        }
        console.log(newTaskData);
        fetchNewTaskData(newTaskData);
        onClose();
    }
  return (
    <div className={classes.modalContainer}>
        <div className={classes.modal}>
            <div className={classes.header}>
                <h3 className={classes.heading}>New Task</h3>
                <FontAwesomeIcon className={classes.closeIcon} icon={faClose} onClick={onClose} />
            </div>
            <div className={classes.body}>
                <PrimaryInput 
                    type='text'
                    label={"Task Name"}
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder={"Enter Task Name..."}
                    isRequired={true}
                />
                <PrimaryInput
                    label={"Task Created"}
                    type='date'
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                    isRequired={true}
                />
                <textarea 
                    value={taskDesc}
                    className={classes.description} 
                    placeholder={"Enter your tasks..."}
                    onChange={(e) => setTaskDesc(e.target.value)} />
                <PrimaryButton 
                    className={classes.addNewBtn}
                    children = {"Add"}
                    onClick={handleAddNewTask}
                    toolTip={"Add new task"}
                />  
            </div>
        </div>
    </div>
  )
}

export default Modal