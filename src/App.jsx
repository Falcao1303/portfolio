import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import { Navbar, Hero, About, Skills, Projects, Contact } from './components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <div className="App">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export default App
