import { ThemeProvider, theme } from '@chakra-ui/react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='layout'>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
