import { useContext } from 'react'
import Button from '@mui/material/Button'
import fetchNotionData from '../utils/api'
import WordsContext from '../context/WordsContext'
import { ContextTypes } from '../types'

function FetchButton() {
  const { setWordPair, setLoader, blured, setBlured } = useContext(
    WordsContext
  ) as ContextTypes

  async function getWords() {
    setLoader(true)

    const pairWords = await fetchNotionData()
    setBlured(true)
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
