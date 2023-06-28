import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import './App.css'
import GlobalLayout from './components/GlobalLayout'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <GlobalLayout />
      </ThemeProvider>
    </>
  )
}

export default App
