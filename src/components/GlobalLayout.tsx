import { useState } from 'react'
import WordsContext from '../context/WordsContext'
import Container from '@mui/material/Container'
import FetchButton from './FetchButton'
// import LinearProgress from '@mui/material/LinearProgress'
import Menu from './Menu'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import WordsCardsContainer from './WordsCardsContainer'
import LangChanger from './LangChanger'

function GlobalLayout() {
  const [wordPair, setWordPair] = useState({ eng: '', ukr: '' })
  const [loader, setLoader] = useState(false)
  const [learnLanguage, setLearnLanguage] = useState('eng')
  const [blured, setBlured] = useState(false)

  return (
    <>
      <WordsContext.Provider
        value={{
          wordPair,
          setWordPair,
          loader,
          setLoader,
          learnLanguage,
          setLearnLanguage,
          blured,
          setBlured,
        }}>
        <Menu />
        {/* {loader && <LinearProgress color='success' />} */}
        <Container sx={{ height: '100vh' }}>
          <Box pt={12} pb={2} sx={{ textAlign: 'center' }}>
            <LangChanger />
          </Box>

          <Divider />

          <Box pt={4} pb={5}>
            <WordsCardsContainer />
          </Box>

          <Divider />

          <Box pt={4} pb={2} sx={{ textAlign: 'center' }}>
            <FetchButton />
          </Box>
        </Container>
      </WordsContext.Provider>
    </>
  )
}

export default GlobalLayout
