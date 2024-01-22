import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Container, Button, ProgressBar } from "react-bootstrap";
import "../assets/style/profile.css";
import ProfilePic from "../profile.jpg";
import ProfileBg from "../background.jpg";
import Premium from "../premium.png";
import { Pencil, EyeFill, PeopleFill, BarChartFill, Search } from "react-bootstrap-icons";
import { fetchProfile } from "../redux/actions/profileAction";
import { fetchNetwork } from "../redux/actions/networkAction";
import FooterProfile from "./FooterProfile";

const getRandomElements = (arr, count) => {
  let shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};

const Profile = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const { network } = useSelector((state) => state.network);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchNetwork());
  }, [dispatch]);

  console.log("Dati del Profilo:", profile);
  console.log("Dati Rete:", network);
  const { name, surname, email, username, area, title, image } = profile;
  const displayedNetwork = Array.isArray(network) ? getRandomElements(network, 5) : []; //controllo se e' array perche' da subito errore altrimenti
  return (
    <>
      <Container className="mt-4">
        {/* ROW PRIMA SEZIONE */}
        <Row>
          <Col md={8}>
            <Card className="profile-card">
              <Card.Img variant="top" src={ProfileBg} className="profile-background" />

              <img src={image} className="profile-picture" alt="profile-pic" />

              <Card.Body className="mt-5">
                <Card.Title className="fs-4">
                  {name} {surname}
                </Card.Title>
                <Card.Text className="mb-1">{title}</Card.Text>
                <Card.Text className="lead fs-6 mb-1">
                  {area} ·{" "}
                  <a className="text-primary fw-bold text-decoration-none custom-link" href="#">
                    Informazioni di contatto
                  </a>
                </Card.Text>
                <a className="text-primary fw-bold text-decoration-none custom-link" href="#">
                  67 collegamenti
                </a>
              </Card.Body>
              <Card.Body className="mb-2 pt-0">
                <Card.Link className="text-primary custom-link" href="#">
                  <Button className="rounded-5 px-3 border-2 py-1 fw-bolder custom-button-1">Disponibile per</Button>
                </Card.Link>
                <Card.Link href="#">
                  <Button variant="outline-primary" className="rounded-5 px-3 border-2 py-1 fw-bolder custom-button-2">
                    Aggiungi sezione del profilo
                  </Button>
                </Card.Link>
                <Card.Link href="#">
                  <Button
                    variant="outline-secondary"
                    className="rounded-5 px-3 py-1 border-2 fw-bolder custom-button-3"
                  >
                    Altro
                  </Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <Card.Title className="mb-0">Lingua del profilo</Card.Title>
                  <Pencil className="text-secondary fs-6 mt-1" />
                </div>
                <Card.Text className="lead fs-6">Italiano</Card.Text>
              </Card.Body>
              <Card.Body className=" border-top">
                <div className="d-flex justify-content-between">
                  <Card.Title className="mb-0">Public profile & URL</Card.Title>
                  <Pencil className="text-secondary fs-6 mt-1" />
                </div>
                <Card.Text className="lead fs-6">
                  www.linkedin.com/in/{name}-{surname}
                </Card.Text>
              </Card.Body>
            </Card>
            <Col md={12} className="mt-2">
              {/* SEZIONE ANNUNCIO VARIABILE */}
              <Card className="pb-2">
                <Card.Body>
                  <Card.Text className="text-center lead" style={{ fontSize: "12px" }}>
                    {name}, enjnoy 50% off 2 months of Linkedin Premium!
                  </Card.Text>
                  <div className="d-flex">
                    <img src={image} alt="profile-pic" className="rounded-5 ms-auto me-3" style={{ width: "60px" }} />
                    <img src={Premium} alt="linkedin-premium" className=" me-auto" style={{ width: "60px" }} />
                  </div>
                  <Card.Text className="text-center lead mt-4 fs-6">Get a boost with this exclusive offer.</Card.Text>
                  <Card.Link href="#">
                    <div className="text-center">
                      <Button
                        variant="outline-primary"
                        className="rounded-5 px-3 border-1 py-1 fw-bolder custom-button-2"
                      >
                        Get 50% today
                      </Button>
                    </div>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>
        {/* ROW SECONDA SEZIONE */}
        <Row>
          <Col md={8}>
            <Card className="pb-2" style={{ marginTop: "-7px" }}>
              <Card.Body>
                <Card.Title className="mb-1">Consigliato per te</Card.Title>
                <Card.Text className="lead" style={{ fontSize: "16px" }}>
                  <EyeFill className="text-secondary me-2" /> Solo per te
                </Card.Text>
                <h6>Intermedio</h6>
                <ProgressBar now={80} variant="secondary" style={{ height: "8px" }} />
                <Card.Text className="mt-2 fs-6">
                  Completa 1 passaggio per raggiungere il livello{" "}
                  <a className="text-primary fw-bold text-decoration-none custom-link" href="#">
                    Massimo
                  </a>
                </Card.Text>
                <div className="border border-1 rounded-3 bg-light">
                  <Card.Title className="m-3 mb-2">
                    Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa
                  </Card.Title>
                  <Card.Text className="m-3 mt-2 mb-2" style={{ fontSize: "14px" }}>
                    Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.
                  </Card.Text>
                  <Card.Link href="#">
                    <Button
                      variant="outline-secondary"
                      className="rounded-5 px-3 border-2 py-1 fw-bolder custom-button-3 m-3 mt-2"
                    >
                      Aggiungi un riepilogo
                    </Button>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>

            <Col xs={12}>
              <Card className=" mt-2">
                <Card.Body className="pb-0">
                  <Card.Title className="mb-1">Analisi</Card.Title>
                  <Card.Text className="lead" style={{ fontSize: "16px" }}>
                    <EyeFill className="text-secondary me-2" /> Solo per te
                  </Card.Text>
                  <Row className="mb-2">
                    <Col xs={12} md={4} className="px-5">
                      <Card.Title className="mb-1 fs-6">
                        <PeopleFill className="me-2" />
                        45 visualizzazioni del profilo
                      </Card.Title>
                      <Card.Text className="mb-1 fs-6"> Scopri chi ha visitato il tuo profilo.</Card.Text>
                    </Col>
                    <Col xs={12} md={4} className="px-5">
                      <Card.Title className="mb-1 fs-6">
                        <BarChartFill className="me-2" />
                        253 impressioni del post
                      </Card.Title>
                      <Card.Text className="mb-1 fs-6">Scopri chi sta interagendo con i tuoi post.</Card.Text>
                    </Col>
                    <Col xs={12} md={4} className="px-5">
                      <Card.Title className="mb-1 fs-6">
                        <Search className="me-2" />4 comparse nei motori di ricerca
                      </Card.Title>
                      <Card.Text className="mb-1 fs-6">Vedi quante volte compari nei risultati di ricerca.</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Text className="text-center fs-6 fw-bolder text-secondary border-1 border-top py-2 custom-buttons ">
                  Mostra tutte le analisi →
                </Card.Text>
              </Card>
            </Col>
          </Col>

          <Col md={4}>
            <Card className="pb-0 mt-2">
              <Card.Body>
                <Card.Title className="fs-6 mb-3">Altri profili consultati</Card.Title>
                {displayedNetwork.map((suggested, index) => (
                  <React.Fragment key={index}>
                    <div className="d-flex">
                      <div>
                        <img
                          src={suggested.image}
                          alt="profile-pic"
                          className="rounded-5"
                          style={{ width: "60px", height: "60px" }}
                        />
                      </div>

                      <div className="ms-2">
                        <Card.Title className="fs-6 mt-1 mb-1">
                          {suggested.name} {suggested.surname}
                        </Card.Title>
                        <Card.Text>{suggested.title}</Card.Text>
                      </div>
                    </div>
                    <Card.Link href="#">
                      <div
                        className={`text-center mb-3 mt-3 ${
                          index !== displayedNetwork.length - 1 ? " pb-4 border-bottom" : "" // condizione se e' l'ultimo elemento non mette margin bottom
                        }`}
                      >
                        <Button
                          variant="outline-secondary"
                          className="rounded-5 px-3 border-1 py-1 fw-bolder custom-button-3 "
                        >
                          Visualizza Profilo
                        </Button>
                      </div>
                    </Card.Link>
                  </React.Fragment>
                ))}
              </Card.Body>
              <Card.Text className="text-center fs-6 fw-bolder text-secondary border-1 border-top py-2 custom-buttons ">
                Mostra tutto
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterProfile />
    </>
  );
};

export default Profile;
