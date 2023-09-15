import styled from "styled-components"
import ProfilePicture from "../assets/picture.jpg"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: whitesmoke;
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: right;

  @media only screen and (max-width: 768px) {
    align-items: flex-end;
  }
`
const Picture = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 25px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    margin-right: 0;
    justify-content: flex-end;
    margin-bottom: 25px;
  }
`
const Right = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: left;
  flex: 1;

  @media only screen and (max-width: 768px) {
    align-items: flex-start;
    margin-top: 2%;
  }
`

const Text = styled.div`
  display: flex;
  max-width: 250px;
  font-size: 16px;
  margin-left: 25px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-left: 0;
  }
`

const About = () => {
  return (
    <Section id="About">
      <Container>
        <Left>
          <Picture src={ProfilePicture} />{" "}
        </Left>
        <Right>
          <Text>
            In 2022 I took the leap and quit my job to start becoming a front
            end developer.
            <br /> It has been a journey filled with learning new skills,
            getting frustrated and overcoming challenges. I have learned a lot
            the past year, not only about coding but about myself.
            <br /> My motivation today is even stronger than it was when I
            started learning to code. And I am looking forward to becoming a
            full stack developer.
          </Text>
        </Right>
      </Container>
    </Section>
  )
}

export default About
