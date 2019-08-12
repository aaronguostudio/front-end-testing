export const generateConfig = () => {
  return {
    server: 'http://localhost',
    port: 8083,
    time: new Date()
  }
}

export const generateAnotherConfig = () => {
  return {
    server: 'http://localhost/api/new',
    port: 8084,
    time: new Date()
  }
}
