import axios from 'axios'

export const runCallback = (callback) => {
  callback('abc')
}

export const createObject = (classItem) => {
  new classItem();
}

export const getData = () => {
  return axios.get('fake').then(res => res.data)
}
