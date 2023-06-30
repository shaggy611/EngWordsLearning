import WordCard from './WordCard'
import { useContext } from 'react'
import WordsContext from '../context/WordsContext'
import { ContextTypes } from '../types'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'

function WordsCardsContainer() {
  const { wordPair, learnLanguage } = useContext(WordsContext) as ContextTypes
  return (
    <Box>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        spacing={3}
        columns={{ xs: 5, sm: 12, md: 12 }}>
        <Grid item xs={12} md={5}>
          <WordCard
            text={learnLanguage === 'eng' ? wordPair.eng : wordPair.ukr}
          />
        </Grid>

        <Grid item xs={12} md={5}>
          <WordCard
            text={learnLanguage === 'eng' ? wordPair.ukr : wordPair.eng}
            bluredFirst={true}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default WordsCardsContainer
