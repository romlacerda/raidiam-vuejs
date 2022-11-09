import axios from 'axios'

export const getParticipants = () => {
  return axios.get(`${process.env.VUE_APP_BASE_URL}/participants`)
    .then(res => {
      console.log(res.data)
      return res.data;
    })
    .catch(er => console.log(er));
}