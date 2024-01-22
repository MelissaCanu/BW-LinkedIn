import { Row, Col, Card, Container, Button } from "react-bootstrap";
import "../assets/profile.css";
import ProfilePic from "../profile.jpg";
import ProfileBg from "../background.jpg";
import Premium from "../premium.png";
import { Pencil } from "react-bootstrap-icons";

const Profile = () => {
  return (
    <>
      <Container className="mt-4">
        {/* ROW PRIMA SEZIONE */}
        <Row>
          <Col md={8}>
            <Card className="profile-card">
              <Card.Img variant="top" src={ProfileBg} className="profile-background" />

              <img src={ProfilePic} className="profile-picture" alt="profile-pic" />

              <Card.Body className="mt-5">
                <Card.Title className="fs-4">Francesco Napoli</Card.Title>
                <Card.Text className="mb-1">Junior Front-End Developer</Card.Text>
                <Card.Text className="lead fs-6 mb-1">
                  La Spezia, Liguria, Italia ·{" "}
                  <a className="text-primary fw-bold text-decoration-none custom-link" href="#">
                    Informazioni di contatto
                  </a>
                </Card.Text>
                <a className="text-primary fw-bold text-decoration-none custom-link" href="#">
                  67 collegamenti
                </a>
              </Card.Body>
              <Card.Body className="mb-2">
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
                <Card.Text className="lead fs-6">www.linkedin.com/in/francesco-napoli</Card.Text>
              </Card.Body>
            </Card>
            <Col md={12} className="mt-2">
              {/* SEZIONE ANNUNCIO VARIABILE */}
              <Card className="pb-2">
                <Card.Body>
                  <Card.Text className="text-center lead" style={{ fontSize: "12px" }}>
                    Francesco, enjnoy 50% off 2 months of Linkedin Premium!
                  </Card.Text>
                  <div className="d-flex">
                    <img
                      src={ProfilePic}
                      alt="profile-pic"
                      className="rounded-5 ms-auto me-3"
                      style={{ width: "60px" }}
                    />
                    <img src={Premium} alt="linkedin-premium" className=" me-auto" style={{ width: "60px" }} />
                  </div>
                  <Card.Text className="text-center lead mt-4 fs-6">Get a boost with this exclusive offer.</Card.Text>
                  <Card.Link href="#">
                    <div class="text-center">
                      <Button
                        variant="outline-primary"
                        className="rounded-5 px-3 border-2 py-1 fw-bolder custom-button-2"
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
      </Container>
    </>
  );
};

export default Profile;
