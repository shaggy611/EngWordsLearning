import { useState } from 'react'
import WordsContext from '../context/WordsContext'
import Container from '@mui/material/Container'
import FetchButton from './FetchButton'
import LinearProgress from '@mui/material/LinearProgress'
import Menu from './Menu'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import WordsCardsContainer from './WordsCardsContainer'

function GlobalLayout() {
  const [wordPair, setWordPair] = useState({ eng: '', ukr: '' })
  const [loader, setLoader] = useState(false)

  return (
    <>
      <WordsContext.Provider
        value={{ wordPair, setWordPair, loader, setLoader }}>
        <Menu />
        {loader && <LinearProgress color='success' />}
        <Container sx={{ height: '100vh' }}>
          <Box pt={10} pb={2} sx={{ textAlign: 'center' }}>
            <FetchButton />
          </Box>

          <Divider />

          <Box pt={3}>
            <WordsCardsContainer />
          </Box>
        </Container>
      </WordsContext.Provider>
    </>
  )
}

export default GlobalLayout
