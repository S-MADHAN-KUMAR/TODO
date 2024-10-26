import React, { useState } from 'react';

const Card = ({ task, onDelete, onEdit, onSave, isEditing }) => {

    const [newTaskValue, setNewTaskValue] = useState(task.task);

    const handleSave = () => {
        onSave(task.id, newTaskValue); 
    };

    return (
        <div className='flex flex-col gap-y-10 justify-between w-80 md:w-96 overflow-hidden border shadow-lg p-5 rounded-lg bg-white'>
            <div>
                {isEditing ? (
                    <textarea 
                        type="text" 
                        className="border p-2 w-full"
                        value={newTaskValue} 
                        onChange={e => setNewTaskValue(e.target.value)} 
                    />
                ) : (
                    <h1 className='text-xl'>{task.task}</h1>
                )}
                <small className='text-xs font-normal text-gray-400'>
                    {new Date(task.id).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </small>
            </div>
            <div className='flex flex-row justify-between md:gap-7'>
                {isEditing ? (
                    <button onClick={handleSave}><i className="fa-solid fa-save"></i></button>
                ) : (
                    <>
                        <button onClick={onEdit}><i className="fa-regular fa-pen-to-square"></i></button>
                        <button onClick={onDelete}><i className="fa-solid fa-trash"></i></button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Card;
