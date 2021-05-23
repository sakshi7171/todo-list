import React from 'react'
import { Navbar,Nav,FormControl,Form,Button } from 'react-bootstrap';

export const Header = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
     <Navbar.Brand href="#home">Todo-List</Navbar.Brand>
     <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About </Nav.Link>
      
    </Nav>
    
  </Navbar>
  <br />
        </div>
    )
}
