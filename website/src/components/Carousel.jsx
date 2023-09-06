import styled from "styled-components"
import Card from "./Card"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked"
import { useState } from "react"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`

const Dot = styled.span``

const Carousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === projects.length ? 0 : prevIndex + 1
    )

  const handlePrevious = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1
    )

  const handleDot = (index) => {
    setCurrentIndex(index)
  }

  return (
    <Container>
      <Card image={projects[currentIndex].image} />
      <NavigationContainer>
        <NavigateBeforeIcon
          onClick={handlePrevious}
          style={{ fontSize: "35px" }}
        />
        {projects.map((_, index) => (
          <Dot key={index}>
            {currentIndex === index ? (
              <RadioButtonCheckedIcon onClick={() => handleDot(index)} />
            ) : (
              <RadioButtonUncheckedIcon onClick={() => handleDot(index)} />
            )}
          </Dot>
        ))}
        <NavigateNextIcon onClick={handleNext} style={{ fontSize: "35px" }} />
      </NavigationContainer>
    </Container>
  )
}

export default Carousel
