import { useState, useContext } from 'react'
import WordsContext from './context/WordsContext'
import './App.css'
import FetchButton from './components/FetchButton'
import LinearProgress from '@mui/material/LinearProgress'

function App() {
  const [wordPair, setWordPair] = useState({})
  const [loader, setLoader] = useState(false)

  return (
    <>
      <WordsContext.Provider
        value={{ wordPair, setWordPair, loader, setLoader }}>
        {loader && <LinearProgress color='success' />}

        <br />
        <FetchButton />
        <br />
        <div>{wordPair.eng}</div>
        <div>{wordPair.ukr}</div>
      </WordsContext.Provider>
    </>
  )
}

export default App
