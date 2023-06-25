import { useState } from 'react'
import './App.css'

import LinearProgress from '@mui/material/LinearProgress'
import fetchNotionData from './utils/api'

function App() {
  const [wordPair, setWordPair] = useState({})
  const [loader, setLoader] = useState(false)

  return (
    <>
      {loader && <LinearProgress color='success' />}

      <div>{wordPair.eng}</div>
      <div>{wordPair.ukr}</div>
    </>
  )
}

export default App
