import React from 'react'
import '../App.css'
import {
  Button,
  Navbar,
  NavbarBrand,
  Nav
} from 'reactstrap'

function NavBar() {
return (
  <>
    <Navbar color="dark">
      <NavbarBrand href="/" className="color-red">Lambda Eats</NavbarBrand>
        <Nav className="mr-auto" navbar>
        </Nav>
        <Button className="btn-wide" color="info">
          Home
        </Button>
        <Button className="btn-wide" color="info">
          Help
        </Button>
    </Navbar>
  </>
)
}

export default NavBar