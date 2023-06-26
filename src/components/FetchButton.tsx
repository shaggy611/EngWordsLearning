import { useContext } from 'react'
import Button from '@mui/material/Button'
import fetchNotionData from '../utils/api'
import WordsContext from '../context/WordsContext'

function FetchButton() {
  const { setWordPair, loader, setLoader } = useContext(WordsContext)

  async function getWords() {
    setLoader(true)

    const pairWords = await fetchNotionData()
    setWordPair(pairWords)

    setLoader(false)
  }

  return (
    <Button variant='contained' onClick={getWords}>
      Generate New Words
    </Button>
  )
}

export default FetchButton
