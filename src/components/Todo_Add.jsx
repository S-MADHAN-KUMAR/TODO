import React, { useState, useEffect } from 'react';
import Items from './Items';

const Todo_Add = () => {

    const [taskInput, setTaskInput] = useState(''); 

    const [searchTaskInput, setSearchTaskInput] = useState(''); 

    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : []; 
    });

    const [filteredTasks, setFilteredTasks] = useState(tasks);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        searchTask();
    }, [searchTaskInput, tasks]);

    const addTask = () => {
        if (taskInput.trim()) {
            const newTask = { task: taskInput, id: Date.now() }; 
            setTasks(prevTasks => [...prevTasks, newTask]); 
            setTaskInput(''); 
        }
    };

    const searchTask = () => {
        setFilteredTasks(
            tasks.filter(task => 
                task.task.toLowerCase().includes(searchTaskInput.toLowerCase())
            )
        );
    };

    return (
        <>
            <div className='flex flex-col md:flex-row gap-x-5 gap-y-5 my-10'>
                <div className="relative w-full">
                    <input
                        className="border-gray-500 border-2 w-full p-3 pr-12 rounded-lg"
                        type="text"
                        value={taskInput}
                        onChange={e => setTaskInput(e.target.value)} 
                        placeholder="Write What You Want To Do ..."
                    />
                    <button onClick={addTask} className="absolute top-1/2 transform -translate-y-1/2 right-3">
                        <i className="fa-solid fa-2x fa-plus"></i>
                    </button>
                </div>
                <div className="relative w-full">
                    <input
                        className="border-gray-500 border-2 w-full p-3 pr-12 rounded-lg"
                        type="text"
                        value={searchTaskInput}
                        onChange={e => setSearchTaskInput(e.target.value)}
                        placeholder="Search Tasks ..."
                    />
                    <button onClick={searchTask} className="absolute top-1/2 transform -translate-y-1/2 right-3">
                        <i className="fa-solid fa-2x fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
            <Items tasks={filteredTasks} setTasks={setTasks} /> 
        </>
    );
}

export default Todo_Add;
