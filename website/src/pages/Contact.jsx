import styled from "styled-components"

const Section = styled.div`
  height: 100vh;
  background-color: bisque;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 10px;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`

const Input = styled.input`
  width: 500px;
  padding: 8px;
  margin: 10px;
  border: none;
  border-radius: 8px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`

const TextArea = styled.textarea`
  width: 500px;
  padding: 8px;
  margin: 10px;
  border: none;
  border-radius: 8px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`

const SubmitButton = styled.button`
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 8px;
`

const Contact = () => {
  return (
    <Section id="Contact">
      <Container>
        <ContactForm>
          <Input type="text" placeholder="Name" required></Input>
          <Input type="email" placeholder="Email" required></Input>
          <TextArea placeholder="Write here" rows={8} required></TextArea>
          <SubmitButton>Submit</SubmitButton>
        </ContactForm>
      </Container>
    </Section>
  )
}

export default Contact
