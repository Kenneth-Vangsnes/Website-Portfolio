import styled from "styled-components"
import Carousel from "../components/Carousel"
import { projects } from "../projects"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: whitesmoke;
`

const Container = styled.div`
  height: 100vh;
  max-width: 600px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 36px;
  color: orange;
  display: flex;
  justify-content: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0;
  align-items: center;
  justify-items: center;
`

const Portfolio = () => {
  return (
    <Section id="Portfolio">
      <Container>
        <Title>Portfolio</Title>
        <Carousel projects={projects} />
        <Grid></Grid>
      </Container>
    </Section>
  )
}

export default Portfolio
