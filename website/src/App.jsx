import styled from "styled-components"
import About from "./pages/About"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"

const Container = styled.div`
  height: 100vh;
  font-size: 16px;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {
  return (
    <Container>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </Container>
  )
}

export default App
