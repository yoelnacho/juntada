import axios from 'axios'

const meetingApi = axios.create({
  baseURL: 'https://juntada-5c86c-default-rtdb.firebaseio.com'
})

export default meetingApi