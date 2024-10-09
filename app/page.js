"use client";
import React from 'react';
import { useState } from 'react';

const Page = () => {

  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  //for add button and input
  const submitHandler = (e) =>{
    e.preventDefault()
    if (desc.trim() !== "") {
      setmainTask([...mainTask, desc]); // Add new task to the task array
      setdesc(""); // Clear input field
    }
  }

  //function to clear all tasks
  const clearTasks = () => {
    setmainTask([]);
  };

  const deleteTasks = (index) => {
    const updatedTasks = mainTask.filter((task, taskIndex) => taskIndex !== index);
    setmainTask(updatedTasks);
  }

  return (
    <>
      <div id='main'>
        <h1>Todo App</h1>

        <div id='add-task'>
          <form onSubmit={submitHandler}>
            <input 
            type='text' 
            id='input' 
            placeholder="Add your task" 
            value = {desc}
            onChange={(e) =>{
              setdesc(e.target.value)
            }}
            />
            <button id="add">Add</button>
          </form>
        </div>

        <div id='show-task'  style={{ maxHeight: '225px', overflowY: 'auto' }}>
          {mainTask.length === 0 ? (
            <div className='task'>No task available</div>
          ) : (
            mainTask.map((task, index) => (
              <div key={index} className='task'>
                {task}
                <button onClick={() => deleteTasks(index)} id='del'> Del</button>
              </div>
            ))
          )}
        </div>

        <div id='bottom'>
          <p>You have {mainTask.length} pending tasks</p>
          <button onClick={clearTasks}>Clear All</button>
        </div>
      </div>
    </>
  );
};

export default Page;
