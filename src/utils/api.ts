

const API_URL = 'https://romaniuk-dev.com/api'

async function fetchNotionData() {
  try {
    const res = await fetch(API_URL)
    const pairWords = await res.json()
    return pairWords
  } catch (error) {
    // throw new Error(error.message)
    console.log((error as Error).message)
  }
}

export default fetchNotionData
