import './index.css'

const TaskItem = props => {
  const {taskDetails, deleteTaskFunction} = props
  const onClickDelete = () => {
    deleteTaskFunction(taskDetails.id)
  }
  console.log(taskDetails)
  return (
    <li className="list-item">
      <p>{taskDetails.task}</p>
      <button className="delete-btn" type="button" onClick={onClickDelete}>
        delete
      </button>
    </li>
  )
}

export default TaskItem
