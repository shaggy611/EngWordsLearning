const API_URL = 'http://127.0.0.1:3000/'

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
