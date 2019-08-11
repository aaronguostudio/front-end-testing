import axios from 'axios'
const url = 'http://www.dell-lee.com/react/api/demo.json'

export const fetchData = (fn) => {
  axios.get(url)
    .then(res => {
      fn(res.data)
    })
}

export const fetchData2 = () => {
  return axios.get(url)
}

export const fetchData3 = () => {
  return axios.get(url + '1')
}
