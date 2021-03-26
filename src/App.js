import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react'; //global states

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'doctor',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'school',
        day: 'Feb 7th at 2:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'work',
        day: 'Feb 6th at 2:30pm',
        reminder: false
    }
]);

const [showAddTask, setShowAddTask] = useState(false);

//Add task function
const addTask = task => {
  const id = tasks[tasks.length-1].id + 1;
  const newTask = { id, ...task };
  console.log(newTask);
  setTasks([ ...tasks, newTask ]);
}

//Delete task
const deleteTask = id => {
  setTasks(tasks.filter(task => task.id !== id))
}

//Toggle task reminder
const toggleReminder = id => {
  setTasks(tasks.map(task => {
    return task.id === id ? {...task, reminder: !task.reminder} : task
  }))
}
  return (
    <div className="container">
      <Header onAddClick={() => setShowAddTask(!showAddTask)} 
              title='Task tracker' showAddTask={showAddTask}/>
      {showAddTask ? <AddTask onAdd={addTask}/> : '' }
      { tasks.length ? (
          <Tasks 
            tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder}/>
      ) : (
        <div>There's no task to show</div>
      )}
      
    </div>
  );
}

export default App;
