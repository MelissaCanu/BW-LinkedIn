import { Container, Form, Nav, Navbar, NavDropdown, Button, InputGroup, Modal } from "react-bootstrap/";
import { FaLinkedin } from "react-icons/fa";
import { IoSearchSharp, IoHomeSharp, IoNotifications } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaUserGroup, FaDiamond } from "react-icons/fa6";
import { TiMessageTyping } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
import { BiSolidGrid } from "react-icons/bi";
import "../assets/style/navbar.css";

function MyNav() {
  return (
    <Navbar sticky="top" className="bg-body-tertiary nopadding">
      <Container>
        <Nav className="my-2 my-lg-0 p-0" navbarScroll>
          <div className="d-flex align-items-center">
            <Nav.Link className="p-0">
              <FaLinkedin className="fs-1" />
            </Nav.Link>
            <Nav.Link className="p-0">
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
          </div>

          <Nav.Link href="#action1" className="d-flex flex-column align-items-center ms-5">
            <span>
              <IoHomeSharp className="fs-4" />
            </span>
            <span className="d-none d-lg-flex">Home</span>
          </Nav.Link>
          <Nav.Link href="#action2" className="d-flex flex-column align-items-center">
            <span>
              <FaUserGroup className="fs-4" />
            </span>
            <span className="d-none d-lg-flex">Rete</span>
          </Nav.Link>
          <Nav.Link href="#action3" className="d-flex flex-column align-items-center">
            <span>
              <MdWork className="fs-4" />
            </span>
            <span className="d-none d-lg-flex">Lavoro</span>
          </Nav.Link>
          <Nav.Link href="#action4" className="d-flex flex-column align-items-center">
            <span>
              <TiMessageTyping className="fs-4" />
            </span>
            <span className="d-none d-lg-flex">Messaggistica</span>
          </Nav.Link>
          <Nav.Link href="#action5" className="d-flex flex-column align-items-center">
            <span>
              <IoNotifications className="fs-4" />
            </span>
            <span className="d-none d-lg-flex">Notifiche</span>
          </Nav.Link>
          <Nav.Link>
            <span>
              <MdAccountCircle className="fs-4" />
            </span>
            <span className="d-none d-lg-flex">
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
            </span>
          </Nav.Link>

          <div className="border-start"></div>
          <Nav.Link href="#" className="d-flex flex-column align-items-center">
            <span>
              <BiSolidGrid className="fs-4" />
            </span>
            <span className="d-none d-md-flex justify-content-">
              Per le aziende
              <NavDropdown>
                <div className="modal show" style={{ display: "block", position: "initial" }}>
                  <Modal.Dialog>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                      <Button variant="secondary">Close</Button>
                      <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                  </Modal.Dialog>
                </div>
              </NavDropdown>
            </span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
