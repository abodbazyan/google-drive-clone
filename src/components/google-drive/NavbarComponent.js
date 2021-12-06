import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        Demo Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
