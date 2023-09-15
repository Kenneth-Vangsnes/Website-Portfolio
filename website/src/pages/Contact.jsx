import styled from "styled-components"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

const Section = styled.div`
  height: 100vh;
  background-color: whitesmoke;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  color: orange;
  font-size: 35px;
  text-align: center;
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
  background-color: #f89e2f;
`

const SuccessMessage = styled.div`
  font-size: 16px;
  color: #f89e2f;
`

const Contact = () => {
  const [success, setSuccess] = useState(null)

  const ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        ref.current,
        import.meta.env.VITE_EMAILJS_KEY
      )
      .then(
        (result) => {
          setSuccess(true)
          console.log(result.text)
        },
        (error) => {
          setSuccess(false)
          console.log(error.text)
        }
      )
  }

  return (
    <Section id="Contact">
      <Container>
        <ContactForm ref={ref} onSubmit={handleSubmit}>
          <Title>
            Interested in hiring or collaborating? <br /> Send an inquiry today!
          </Title>
          <Input type="text" placeholder="Name" name="name" required></Input>
          <Input type="email" placeholder="Email" name="email" required></Input>
          <TextArea
            placeholder="Write here"
            rows={8}
            name="message"
            required></TextArea>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ContactForm>
        <SuccessMessage>
          {success &&
            "Your message has been sent. I'll get back to you soon :)"}
        </SuccessMessage>
      </Container>
    </Section>
  )
}

export default Contact
