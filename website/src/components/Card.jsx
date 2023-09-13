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
  background-color: white;
  opacity: 0;
  :hover {
    opacity: 0.8;
  }
`

const Button = styled.button`
  height: 24px;
  width: 56px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

const Card = ({ image, demoURL, github }) => {
  console.log(demoURL)
  return (
    <Container style={{ backgroundImage: `url(${image})` }}>
      <Hovered>
        <a href={demoURL} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </Hovered>
    </Container>
  )
}

export default Card
