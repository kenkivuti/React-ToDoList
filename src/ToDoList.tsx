import  { SetStateAction, useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '2px solid #ccc', borderRadius: '5px' }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter task"
        style={{ width: 'calc(100% - 80px)', padding: '8px', marginBottom: '10px' }}
      />
      <button onClick={handleAddTask} style={{ width: '80px', padding: '8px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add Task</button>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {tasks.map((task, index) => (
          <li className='list-group-item' key={index} style={{ marginBottom: '7px' }}>
            {task}
            <button onClick={() => handleRemoveTask(index)} style={{ padding: '5px 10px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default ToDoList;
