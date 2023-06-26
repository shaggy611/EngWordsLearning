import { useState, useContext } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import WordsContext from './context/WordsContext'
import './App.css'
import FetchButton from './components/FetchButton'
import LinearProgress from '@mui/material/LinearProgress'
import Menu from './components/Menu'

function App() {
  const [wordPair, setWordPair] = useState({})
  const [loader, setLoader] = useState(false)

  return (
    <>
      <ThemeProvider theme={theme}>
        <WordsContext.Provider
          value={{ wordPair, setWordPair, loader, setLoader }}>
          <Menu />
          {loader && <LinearProgress color='success' />}

          <br />
          <FetchButton />
          <br />
          <div>{wordPair.eng}</div>
          <div>{wordPair.ukr}</div>
        </WordsContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
