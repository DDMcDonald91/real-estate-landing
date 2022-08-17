import { Container, Navbar, Nav } from 'react-bootstrap'

export default function Navigation() {
  return (
    <Container fluid className='p-0' style={{background: 'black'}}>
      <Container fluid>
    <Navbar collapseOnSelect expand="lg" style={{background: 'black'}} variant="dark">
      <Container fluid className='p-0'>
        <Navbar.Brand href="#home">Sara Lee Real Estate</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#listings">Listings</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
    </Container>
  );
}
