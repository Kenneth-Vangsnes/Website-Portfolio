import styled from "styled-components"
import Navbar from "../components/Navbar"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #4e4eff;

  @media only screen and (max-width: 768px) {
  }
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`

const Title = styled.h1`
  font-size: 40px;
  color: #796767;
`

const SubTitle = styled.h2`
  font-size: 28px;
  display: flex;
  text-align: center;
  justify-items: center;
  color: gray;
`

const Button = styled.button`
  padding: 10px;
  width: 230px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`

const Home = () => {
  function handleClick(props) {
    const element = document.getElementById(props)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Section id="Home">
      <Navbar />
      <Container>
        <Title>HEY I AM KENNETH VANGSNES</Title>
        <SubTitle>
          A frontend focused on building the Frontend of Websites and
          Webapplications that leads to the success of the overall product.
        </SubTitle>
        <Button onClick={() => handleClick("Portfolio")}>TO PROJECTS</Button>
      </Container>
    </Section>
  )
}

export default Home
