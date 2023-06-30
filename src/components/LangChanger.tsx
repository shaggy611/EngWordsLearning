import { useContext } from 'react'
import Button from '@mui/material/Button'
import WordsContext from '../context/WordsContext'
import { ContextTypes } from '../types'
import { Typography, Stack } from '@mui/material/'

function LangChanger() {
  const { setLearnLanguage } = useContext(WordsContext) as ContextTypes

  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      sx={{ minHeight: '100px' }}>
      <Typography sx={{ fontSize: '1.3rem' }} p={0} align='center'>
        Choose language for training:
      </Typography>
      <Button variant='contained' onClick={() => setLearnLanguage('eng')}>
        Eng
      </Button>

      <Button variant='contained' onClick={() => setLearnLanguage('ukr')}>
        Ukr
      </Button>
    </Stack>
  )
}

export default LangChanger
