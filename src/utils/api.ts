const API_URL = 'https://romaniuk-dev.com/api'

async function fetchNotionData() {
  try {
    //   setLoader(true)
    const res = await fetch(API_URL)
    const pairWords = await res.json()
    //   setWordPair(pairWords)
    //   setLoader(false)
    return pairWords
  } catch (error) {
    throw new Error(error.message)
  }
}

export default fetchNotionData
