import { Container, Form, Nav, Navbar, NavDropdown, Button, InputGroup } from "react-bootstrap/";
import { FaLinkedin } from "react-icons/fa";
import { IoSearchSharp, IoHomeSharp, IoNotifications } from "react-icons/io5";
import { MdNoAccounts, MdWork } from "react-icons/md";
import { FaUserGroup, FaDiamond } from "react-icons/fa6";
import { TiMessageTyping } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
import { BiSolidGrid } from "react-icons/bi";

function MyNav() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
          <Nav.Link className="pe-1">
            <FaLinkedin className="fs-1" />
          </Nav.Link>

          <Nav.Link className="ps-0">
            <Form className="d-flex bg-secondary rounded me-5">
              <InputGroup>
                <InputGroup.Text className="bg-transparent border-0 pe-0">
                  <IoSearchSharp className="fs-5" />
                </InputGroup.Text>
                <Form.Control
                  type="search"
                  placeholder="Cerca"
                  className="bg-transparent d-none d-lg-flex border-0 me-2"
                  aria-label="Search"
                />
              </InputGroup>
            </Form>
          </Nav.Link>

          <Nav.Link href="#action1" className="d-flex flex-column align-items-center ms-5">
            <IoHomeSharp className="fs-4" />
            Home
          </Nav.Link>
          <Nav.Link href="#action2" className="d-flex flex-column align-items-center">
            <FaUserGroup className="fs-4" />
            Rete
          </Nav.Link>
          <Nav.Link href="#action3" className="d-flex flex-column align-items-center">
            <MdWork className="fs-4" />
            Lavoro
          </Nav.Link>
          <Nav.Link href="#action4" className="d-flex flex-column align-items-center">
            <TiMessageTyping className="fs-4" />
            Messaggistica
          </Nav.Link>
          <Nav.Link href="#action5" className="d-flex flex-column align-items-center">
            <IoNotifications className="fs-4" />
            Notifiche
          </Nav.Link>
          <Nav.Link className="d-flex align-items-center">
            <MdAccountCircle className="fs-4" />
            Tu
            <NavDropdown id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action6">
                <MdAccountCircle className="fs-1 m-3" />
                Epicode
              </NavDropdown.Item>
              <div className="text-center">
                <Button variant="outline-primary" className="rounded-5">
                  Visualizza Profilo
                </Button>
              </div>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">
                <strong>Account</strong>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8">Gestisci</NavDropdown.Item>
              <NavDropdown.Item href="#action9">
                <FaDiamond className="me-2" />
                Prova Premium gratis
              </NavDropdown.Item>
              <NavDropdown.Item href="#action10">Guida</NavDropdown.Item>
              <NavDropdown.Item href="#action11">Lingua</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action12">
                <strong>Gestisci</strong>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action13">Post e attività</NavDropdown.Item>
              <NavDropdown.Item href="#action14">Account per la pubblicazione</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action15">Esci</NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>

          <Nav.Link href="#" className="d-flex flex-column align-items-center border-start">
            <BiSolidGrid className="fs-4" />
            Per le aziende
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
