import React, { useRef, useState } from 'react'

function Todo() {
  const [item, setItem] = useState([]);
  const [input, setInput] = useState('');
  const [edit, setEdit] = useState(false);
  const [editval, setEditVal] = useState('');
  const [editId, setEditId] = useState(null);

  function handlesubmit() {
    if (edit) {
      // Save edited item
      setItem(prev =>
        prev.map(task =>
          task.id === editId ? { ...task, text: editval } : task
        )
      );
      setEdit(false);
      setEditVal('');
      setEditId(null);
    } else {
      // Add new item
      setItem(prev => [
        ...prev,
        { id: Date.now(), text: input }
      ]);
      setInput('');
    }
  }

  function deletehandle(id) {
    setItem(prev => prev.filter(val => val.id !== id));
  }

  function edithandle(id) {
    setEdit(true);
    setEditId(id);
    const taskToEdit = item.find(val => val.id === id);
    if (taskToEdit) {
      setEditVal(taskToEdit.text);
    }
  }

  return (
    <>
      <h1 className='text-red-500'>TODO LIST</h1>

      <input
        type="text"
        placeholder={edit ? 'Edit your task' : 'Enter your task'}
        value={edit ? editval : input}
        onChange={(e) => {
          edit ? setEditVal(e.target.value) : setInput(e.target.value);
        }}
      />

      <button onClick={handlesubmit}>
        {edit ? 'Save Changes' : 'Add Task'}
      </button>

      {item.map((task) => (
        <h1 key={task.id}>
          {task.text}{' '}
          <button
            onClick={() => deletehandle(task.id)}
            className='bg-red-400 text-white'
          >
            delete
          </button>{' '}
          <button
            onClick={() => edithandle(task.id)}
            className='bg-green-400 text-white'
          >
            edit
          </button>
        </h1>
      ))}
    </>
  );
}

export default Todo;
