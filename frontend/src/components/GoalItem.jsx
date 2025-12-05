import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal, updateGoal } from '../features/goals/goalSlice'
import { IoMdClose } from 'react-icons/io'

function GoalItem({ goal }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(goal.text)

  const handleTitleClick = () => {
    setIsEditing(true)
  }

  const handleBlur = () => {
    if (text.trim() && text !== goal.text) {
      dispatch(updateGoal({ id: goal.id, text }))
    }
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleBlur()
    } else if (e.key === 'Escape') {
      setText(goal.text)
      setIsEditing(false)
    }
  }

  return (
    <div className='goal'>
      <div className='goal-header'>
        <span className='goal-date'>
          {new Date(goal.createdAt).toLocaleString('en-US')}
        </span>
        <button
          onClick={() => dispatch(deleteGoal(goal.id))}
          className='close'
        >
          <IoMdClose />
        </button>
      </div>

      {isEditing ? (
        <input
          className='goal-edit-input'
          value={text}
          autoFocus
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <h3 className='goal-title' onClick={handleTitleClick}>
          {goal.text}
        </h3>
      )}
    </div>
  )
}

export default GoalItem