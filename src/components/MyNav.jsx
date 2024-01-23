import { Container, Form, Nav, Navbar, Dropdown, Button, Offcanvas, Card, Row, Col } from "react-bootstrap/";
import { FaLinkedin } from "react-icons/fa";
import { IoSearchSharp, IoHomeSharp, IoNotifications } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaUserGroup, FaDiamond } from "react-icons/fa6";
import { TiMessageTyping } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
import { BiSolidGrid } from "react-icons/bi";
import "../assets/style/navbar.css";
import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { CgInsights } from "react-icons/cg";
import { MdBusinessCenter } from "react-icons/md";
import { GiTwirlCenter } from "react-icons/gi";
import { FaSafari } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

function MyNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar sticky="top" className="bg-white shadow-sm nopadding">
      <Container>
        <Nav className="my-2 my-lg-0 p-0" navbarScroll>
          <div className="d-flex align-items-center me-auto">
            <Nav.Link className="p-0">
              <FaLinkedin className="linkedin-icon fs-1" />
            </Nav.Link>
            <Nav.Link className="d-flex flex-column align-items-center px-1">
              <Form className="search d-flex align-items-center rounded">
                <IoSearchSharp className="fs-5 ms-2" />
                <Form.Control
                  type="search"
                  placeholder="Cerca"
                  className="bg-transparent d-none d-xl-flex border-0 me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav.Link>
          </div>

          <Nav.Link to="/*" href="#action1" className="d-flex flex-column align-items-center py-1 ms-auto">
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
            <Dropdown className="d-flex flex-column justify-content-center">
              <Dropdown.Toggle className="custom-color py-0" variant="transparent" id="dropdown-basic">
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
            <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas rounded-3">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <strong>Per le aziende</strong>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Card border="secondary" className="w-100">
                  <Card.Header>
                    <strong>Scopri altri prodotti LinkedIn</strong>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Row md={4} className="g-2">
                        <Col>
                          <Button variant="transparent" className="d-flex flex-column align-items-center p-1">
                            <GoVideo className="linkedin-icon border rounded-2 fs-1 p-2" />
                            <span className="font-aziende">Learning</span>
                          </Button>
                        </Col>
                        <Col>
                          <Button variant="transparent" className="d-flex flex-column align-items-center p-1">
                            <CgInsights className="linkedin-icon border rounded-2 fs-1 p-2" />
                            <span className="font-aziende">Talent Insights</span>
                          </Button>
                        </Col>
                        <Col>
                          <Button variant="transparent" className="d-flex flex-column align-items-center p-1">
                            <MdBusinessCenter className="linkedin-icon border rounded-2 fs-1 p-2" />
                            <span className="font-aziende">Pubblica un'offerta di lavoro</span>
                          </Button>
                        </Col>
                        <Col>
                          <Button variant="transparent" className="d-flex flex-column align-items-center p-1">
                            <GiTwirlCenter className="linkedin-icon border rounded-2 fs-1 p-2" />
                            <span className="font-aziende">Pubblicizza</span>
                          </Button>
                        </Col>
                        <Col>
                          <Button variant="transparent" className="d-flex flex-column align-items-center p-1">
                            <FaSafari className="linkedin-icon border rounded-2 fs-1 p-2" />
                            <span className="font-aziende">Trova lead</span>
                          </Button>
                        </Col>
                        <Col>
                          <Button variant="transparent" className="d-flex flex-column align-items-center p-1">
                            <TiGroup className="linkedin-icon border rounded-2 fs-1 p-2" />
                            <span className="font-aziende">Gruppi</span>
                          </Button>
                        </Col>
                        <Col>
                          <Button variant="transparent" className="d-flex flex-column align-items-center p-1">
                            <TiTick className="linkedin-icon border rounded-2 fs-1 p-2" />
                            <span className="font-aziende">Marketplace dei servizi</span>
                          </Button>
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card border="secondary" className="w-100">
                  <Card.Header>
                    <strong>Scopri altro per il business</strong>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Assumi su LinkeIn</Card.Title>
                    <Card.Text>Trova, attrai e assumi</Card.Text>
                    <Card.Title>Vendi con LinkedIn</Card.Title>
                    <Card.Text>Sblocca nuove opportunità di vendita</Card.Text>
                    <Card.Title>Offerta di lavoro gratuita</Card.Title>
                    <Card.Text>Ottieni rapidamente candidati qualiticati</Card.Text>
                    <Card.Title>Fai Pubblicità su LinkeIn</Card.Title>
                    <Card.Text>Acquisisci clienti e fai crescere la tua azienda</Card.Text>
                    <Card.Title>Impara con LinkedIn</Card.Title>
                    <Card.Text>Corsi per formare i tuoi dipendenti</Card.Text>
                    <Card.Title>Centro amministrazione</Card.Title>
                    <Card.Text>Gestisci i dettagli di fatturazione e account</Card.Text>
                  </Card.Body>
                  <Card.Header>
                    <strong>Crea una pagina aziendale + </strong>
                  </Card.Header>
                </Card>
              </Offcanvas.Body>
            </Offcanvas>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
