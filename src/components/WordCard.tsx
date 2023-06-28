import { Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { WordCardProps } from '../types'

function WordCard({ text }: WordCardProps) {
  return (
    <Paper elevation={5}>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        sx={{ minHeight: '100px' }}>
        <Typography sx={{ fontSize: 24 }} p={3} align='center'>
          {text}
        </Typography>
      </Stack>
    </Paper>
  )
}

export default WordCard
