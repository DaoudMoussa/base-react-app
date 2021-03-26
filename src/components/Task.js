import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <li className={`task ${task.reminder ? "reminder" : ""}`} 
            onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} 
                <FaTimes onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </li>
    )
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task
