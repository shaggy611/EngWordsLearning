import { Paper, Skeleton } from '@mui/material'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { ContextTypes, WordCardProps } from '../types'
import { useContext, useState } from 'react'
import WordsContext from '../context/WordsContext'

function WordCard({ text, bluredFirst }: WordCardProps) {
  const { loader,  blured, setBlured} = useContext(WordsContext) as ContextTypes
 

  return (
    <Paper elevation={5} onClick={() => (bluredFirst ? setBlured(!blured) : blured)}>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        sx={{ minHeight: '150px' }}>
        <Typography
          sx={{
            fontSize: 24,
            width: '100%',
            filter: (bluredFirst && blured) ? 'blur(5px)' : '',
          }}
          p={3}
          align='center'>
          {!loader ? (
            text
          ) : (
            <Skeleton
              variant='text'
              sx={{ width: '100%', fontSize: 28, backgroundColor: '#55555596' }}
            />
          )}
        </Typography>
      </Stack>
    </Paper>
  )
}

export default WordCard
