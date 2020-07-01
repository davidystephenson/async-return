const axios = require('axios')

async function getDog () {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random') 

    const { data } = response
    // const data = response.data

    return data
  } catch (error) {
    console.log(error.message)
  }
}

async function logData () {
  const returned = await getDog()

  console.log('returned test:', returned)

  return returned
}

const x = logData()
console.log('x test:', x)

logData()