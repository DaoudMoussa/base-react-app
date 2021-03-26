import Task from './Task'
const Tasks = ({tasks, onDelete}) => {
    
    return (
        <ul>
            {tasks.map(task => {
                return <Task onDelete={onDelete} task={task}/>
                })}
        </ul>
    )
}
export default Tasks
