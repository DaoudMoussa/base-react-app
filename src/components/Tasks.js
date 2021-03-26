import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return (
        <ul>
            {tasks.map(task => {
                return <Task key={task.id}
                            onToggle={onToggle} 
                            onDelete={onDelete} 
                            task={task}/>
                })}
        </ul>
    )
}
export default Tasks
