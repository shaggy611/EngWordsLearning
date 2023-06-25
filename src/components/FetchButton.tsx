import Button from '@mui/material/Button'

async function getWords() {
  setLoader(true)

  const pairWords = await fetchNotionData()
  setWordPair(pairWords)

  setLoader(false)
}

function FetchButton() {
  return (
    <Button variant='contained' onClick={getWords}>
      Generate New Words
    </Button>
  )
}

export default FetchButton
