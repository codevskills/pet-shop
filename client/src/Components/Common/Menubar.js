import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function PetMenubar() {
  const categories = [
    "Dogs",
    "Cats",
    "Birds",
    "Fish",
    "Reptiles",
    "Hamsters",
    "Rabbits",
    "Horses",
    "Goat",
    "Cow",
    "Hens",
    "Turtles",
  ];

  
  
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="bg-body-tertiary p-0"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/009/551/676/small/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg"
          width="40"
          height="40"
          className="d-inline-block align-top rounded-circle"
          alt="Your Logo"
        />
      </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav>
              {categories.map((category, index) => (
                <Nav.Link key={index} href={`#${category}`}>
                  {category}
                </Nav.Link>
              ))}
            </Nav>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PetMenubar;
