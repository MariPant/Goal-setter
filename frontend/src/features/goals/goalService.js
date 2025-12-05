import axios from 'axios'

const API_URL = '/api/goals/'

// Get goals
const getGoals = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

// Create goal
const createGoal = async (goalData) => {
  const response = await axios.post(API_URL, goalData)
  return response.data
}

// Update goal
const updateGoal = async (id, goalData) => {
  const response = await axios.put(API_URL + id, goalData)
  return response.data
}

// Delete goal
const deleteGoal = async (goalId) => {
  const response = await axios.delete(API_URL + goalId)
  return response.data // { id }
}

const goalService = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
}

export default goalService