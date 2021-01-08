import api from '../config/api'

export async function registerUser(userInfo) {
  const response = await api.post("/user/register", userInfo)
  console.log("new user posted to server", response) 
  return response.data
}

export async function getUsers() {
  const response = await api.get("/user/all")
  console.log("got all users back from server", response) 
  return response.data
}