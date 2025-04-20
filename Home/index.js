import react, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import TaskItem from '../TaskItem'
import './index.css'

const Home = () => {
  const [task, setTaskItem] = useState('')
  const [taskList, setTaskList] = useState([])
  const onClickChange = event => {
    setTaskItem(event.target.value)
  }

  const onAddTask = () => {
    const id = uuidv4()
    const newObj = {id, task}
    setTaskList([...taskList, newObj])
  }

  const deleteTaskItem = taskId => {
    setTaskList({
      taskList: taskList.filter(eachTask => eachTask.id !== taskId),
    })
  }

  return (
    <div className="task-container">
      <h1>Task Tracker</h1>
      <div className="input-container">
        <input
          type="text"
          className="input-element"
          onChange={onClickChange}
          value={task}
        />
        <button className="add-button" type="button" onClick={onAddTask}>
          Add Task
        </button>
      </div>
      <ul className="task-list-container">
        {Array.isArray(taskList) &&
          taskList.map(taskItem => (
            <TaskItem
              key={taskItem.id}
              taskDetails={taskItem}
              deleteTaskFunction={deleteTaskItem}
            />
          ))}
      </ul>
    </div>
  )
}
export default Home
