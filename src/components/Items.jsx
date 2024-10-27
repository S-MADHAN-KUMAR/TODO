import React, { useState } from 'react';
import Card from './Card';

const Items = ({ tasks, setTasks }) => {
    
    const [editingTaskId, setEditingTaskId] = useState(null)


    const deleteTask = (taskId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                
                setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));



                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    };


    const editTask = (taskId) => {
        setEditingTaskId(taskId);
    };

    const saveTask = (taskId, newTaskValue) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, task: newTaskValue } : task
        ));
        setEditingTaskId(null);
    };

    return (
        <div className='mt-2 py-3 md:py-12 flex flex-wrap-reverse gap-6 md:gap-10 justify-center bg-slate-800 rounded-lg'>
            {tasks.length > 0 ? ( 
                tasks.map((task) => (
                    <Card 
                        key={task.id} 
                        task={task} 
                        onDelete={() => deleteTask(task.id)} 
                        onEdit={() => editTask(task.id)} 
                        onSave={saveTask} 
                        isEditing={editingTaskId === task.id} 
                    />
                ))
            ) : (
                <h1 className='text-white'>NO MORE TASK...</h1> 
            )}
        </div>
    );
}

export default Items;
