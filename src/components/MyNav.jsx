import { Container, Form, Nav, Navbar, NavDropdown, Dropdown, Button, Offcanvas } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { IoSearchSharp, IoHomeSharp, IoNotifications } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaUserGroup, FaDiamond } from "react-icons/fa6";
import { TiMessageTyping } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
import { BiSolidGrid } from "react-icons/bi";
import "../assets/style/navbar.css";
import { GoTriangleDown } from "react-icons/go";
import { useState } from "react";

function MyNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showB, setShowB] = useState(true);
  const toggleShowB = () => setShowB(!showB);

  return (
    <Navbar sticky="top" className="bg-white shadow-sm nopadding">
      <Container>
        <Nav className="my-2 my-lg-0 p-0" navbarScroll>
          <div className="d-flex align-items-center" style={{ justifyContent: "space-around" }}>
            <Nav.Link className="p-0">
              <FaLinkedin className="linkedin-icon fs-1" />
            </Nav.Link>
            <Nav.Link className="d-flex flex-column align-items-center px-1">
              <Form className="search d-flex align-items-center rounded ">
                <IoSearchSharp className="fs-4" />

                <Form.Control
                  type="search"
                  placeholder="Cerca"
                  className="bg-transparent d-none d-xl-flex border-0 me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav.Link>
          </div>

          <Nav.Link to="/*" href="#action1" className="d-flex flex-column align-items-center py-1 ms-5">
            <span>
              <IoHomeSharp className="fs-4" />
            </span>
            <span className="d-none d-md-flex">Home</span>
          </Nav.Link>
          <Nav.Link to="/*" href="#action2" className="d-flex flex-column align-items-center py-1">
            <span>
              <FaUserGroup className="fs-4" />
            </span>
            <span className="d-none d-md-flex">Rete</span>
          </Nav.Link>
          <Nav.Link to="/*" href="#action3" className="d-flex flex-column align-items-center py-1">
            <span>
              <MdWork className="fs-4" />
            </span>
            <span className="d-none d-md-flex">Lavoro</span>
          </Nav.Link>
          <Nav.Link to="/*" href="#action4" className="d-flex flex-column align-items-center py-1">
            <span>
              <TiMessageTyping className="fs-4" />
            </span>
            <span className="d-none d-md-flex">Messaggistica</span>
          </Nav.Link>
          <Nav.Link to="/*" href="#action5" className="d-flex flex-column align-items-center py-1">
            <span>
              <IoNotifications className="fs-4" />
            </span>
            <span className="d-none d-md-flex">Notifiche</span>
          </Nav.Link>
          <Nav.Link to="/*" className="d-flex flex-column align-items-center py-1">
            {/* <MdAccountCircle className="d-flex fs-4" /> */}
            {/* <NavDropdown title="Tu" id="navbarScrollingDropdown">
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
              </NavDropdown> */}

            <Dropdown className="d-flex flex-column justify-content-center">
              <Dropdown.Toggle className="py-0" variant="transparent" id="dropdown-basic">
                <MdAccountCircle className="d-flex fs-4" />
                <span className="d-none d-md-inline-flex">Tu</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#action6">
                  <MdAccountCircle className="fs-1 m-3" />
                  Epicode
                </Dropdown.Item>
                <div className="text-center">
                  <Button variant="outline-primary" className="rounded-5">
                    Visualizza Profilo
                  </Button>
                </div>
                <Dropdown.Divider />
                <Dropdown.Item href="#action7">
                  <strong>Account</strong>
                </Dropdown.Item>
                <Dropdown.Item href="#action8">Gestisci</Dropdown.Item>
                <Dropdown.Item href="#action9">
                  <FaDiamond className="me-2" />
                  Prova Premium gratis
                </Dropdown.Item>
                <Dropdown.Item href="#action10">Guida</Dropdown.Item>
                <Dropdown.Item href="#action11">Lingua</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action12">
                  <strong>Gestisci</strong>
                </Dropdown.Item>
                <Dropdown.Item href="#action13">Post e attività</Dropdown.Item>
                <Dropdown.Item href="#action14">Account per la pubblicazione</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action15">Esci</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>

          <div className="border-start"></div>
          <Nav.Link href="#" className="d-flex flex-column align-items-center py-1">
            <Button variant="trasparent" onClick={handleShow} className="py-0">
              <BiSolidGrid className="fs-4" />
              <span className="d-none d-md-flex justify-content-">
                Per le aziende <GoTriangleDown />
              </span>
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images,
                lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
