import { React } from "react";
import { Navbar, button,Container,Nav } from "react-bootstrap";


export function NavU() {
  return (
    <>
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">WIN</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/usuario"> Usuario </Nav.Link>
      <Nav.Link href="/tipo_servicio"> Tipo Servicio </Nav.Link>
      <Nav.Link href="/servicio"> Servicio </Nav.Link>
      <Nav.Link href="/aceptar-servicio"> Aceptar servicio </Nav.Link>
  
    </Nav>
    </Container>
  </Navbar>
  
  
</>
    </>
  );
}
