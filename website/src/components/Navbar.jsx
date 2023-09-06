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
  background-color: #f89e2f;

  @media only screen and (max-width: 768px) {
    background-color: #f89e2f;
  }
`

const Name = styled.div`
  font-size: 50px;
  color: white;
  margin-left: 50px;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
    margin-left: 50px;
  }
`

const List = styled.ul`
  color: white;
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
    color: #f89e2f;
    font-size: 40px;
  }
`

const MobileMenu = styled.span`
  height: 50px;
  width: 50px;
  color: white;
  cursor: pointer;
  margin-right: 10px;
  z-index: 1;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const MobileMenuList = styled.ul`
  display: flex;
  color: white;
  flex-direction: column;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #f89e2f;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const MobileMenuListItem = styled.li`
  list-style: none;
  font-size: 70px;
  cursor: pointer;
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
