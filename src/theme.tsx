import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#DAFFFB',
      main: 'rgba(23,107,135,0)',
      dark: '#001C30',
      contrastText: '#F67280',
    },
    secondary: {
      light: '#F67280',
      main: '#C06C84',
      dark: '#6C5B7B',
      contrastText: '#355c7d',
    },
    background: {
      default: '#2D4356',
      paper: '#C06C84',
    },
  },
  typography: {
    button: {
      fontSize: '1.2rem',
    },
  },
})

export default theme
