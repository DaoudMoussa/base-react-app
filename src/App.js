import Header from './components/Header';
import Tasks from './components/Tasks';
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

//DeleteAsk
const deleteTask = id => {
  setTasks(tasks.filter(task => task.id != id))
}
  return (
    <div className="container">
      <Header title='Task tracker'/>
      { tasks.length ? (
          <Tasks tasks={tasks} onDelete={deleteTask}/>
      ) : (
        <div>There's no task to show</div>
      )}
      
    </div>
  );
}

export default App;
