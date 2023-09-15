/* eslint-disable react/prop-types */
import styled from "styled-components"

const Container = styled.div`
  height: 280px;
  width: 280px;
  background-size: contain;
  border-radius: 8px;
  margin: 10px;
`

const Hovered = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: 8px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #004138;
  opacity: 0;
  transition: opacity 0.8s;
  :hover {
    opacity: 0.95;
  }
`

const LinkElement = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  color: #f89e2f;
  height: 40px;
  width: 90px;
  text-decoration: none;
`

const Card = ({ image, demoURL, github }) => {
  return (
    <Container
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <Hovered>
        <LinkElement href={demoURL} target="_blank" rel="noopener noreferrer">
          Demo
        </LinkElement>
        <LinkElement href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </LinkElement>
      </Hovered>
    </Container>
  )
}

export default Card
