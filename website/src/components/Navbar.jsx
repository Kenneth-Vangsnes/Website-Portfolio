import styled from "styled-components"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import { useState } from "react"

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const Container = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: bisque;

  @media only screen and (max-width: 768px) {
    background-color: blue;
  }
`

const Name = styled.div`
  font-size: 35px;
  color: white;
  margin-left: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
    margin-left: 50px;
  }
`

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const ListItem = styled.li`
  font-size: 24px;
  margin-left: 8px;
  color: white;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    color: orange;
    font-size: 40px;
  }
`

const MobileMenu = styled.span`
  height: 50px;
  width: 50px;
  cursor: pointer;
  margin-right: 10px;
  z-index: 1;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const MobileMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  background-color: gray;
  opacity: 0.7;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const MobileMenuListItem = styled.li`
  list-style: none;
  font-size: 70px;
`

const ToTheTop = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
`
const Navbar = () => {
  const [open, setOpen] = useState(false)

  const pages = ["Home", "About", "Portfolio", "Contact"]

  function handleClick(props) {
    const element = document.getElementById(props)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Section>
      <Container>
        <Name>K</Name>
        <List>
          {pages.map((page, index) => (
            <ListItem key={page + index} onClick={() => handleClick(page)}>
              {page}
            </ListItem>
          ))}
        </List>
        <MobileMenu>
          {" "}
          {!open ? (
            <MenuIcon
              onClick={() => setOpen(!open)}
              style={{ fontSize: "48px" }}
            />
          ) : (
            <CloseIcon
              onClick={() => setOpen(!open)}
              style={{ fontSize: "48px" }}
            />
          )}
        </MobileMenu>
        {open && (
          <MobileMenuList onClick={() => setOpen(!open)}>
            {pages.map((page, index) => (
              <MobileMenuListItem
                key={page + index}
                onClick={() => handleClick(page)}>
                {page}
              </MobileMenuListItem>
            ))}
          </MobileMenuList>
        )}
      </Container>
      <ToTheTop onClick={() => handleClick("Home")}>
        <ArrowUpwardIcon />
        To the top
      </ToTheTop>
    </Section>
  )
}

export default Navbar
