import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { useState } from "react";
import "../assets/style/messaggistica.css";
import Premium from "../premium.png";
import SidebarFooter from "./SidebarFooter";
import Pietro from "../assets/imgChat/pietro.png";
import GPT from "../assets/imgChat/chat.jpg";
import Chiara from "../assets/imgChat/chiara.png";
import EPICODE from "../assets/imgChat/epicode.jpg";

const MessaggisticaComponent = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: "Pietro Semerano", profileImage: Pietro },
    { id: 2, name: "ChatGPT", profileImage: GPT },
    { id: 3, name: "Chiara Presaghi", profileImage: Chiara },
    { id: 4, name: "Server EPICODE", profileImage: EPICODE },
  ];

  const messages = {
    1: [
      { text: "Ciao! Sei riuscito a chiudere il tag <p> nell'esercizio html di oggi?", isOurMessage: false },
      {
        text: "Ciao Pietro, si' basta aggiungere una / prima della p, se non ti e' chiaro puoi sempre riguardarti la lezione di oggi",
        isOurMessage: true,
      },
      {
        text: "COME TI PERMETTI? NON MI E' CHIARO? SONO ABITUATO A PRIMEGGIARE! NON HO TEMPO PER LA LEZIONE! HO MOGLIE E GIARDINO!",
        isOurMessage: false,
      },
      {
        text: "Ciao hai finito il corso?",
        isOurMessage: false,
      },
      {
        text: "Ciao come stai",
        isOurMessage: false,
      },
      {
        text: "Ciao hai finito il corso? Vuoi venire a lavorare per me?",
        isOurMessage: false,
      },
      {
        text: "Ciao il corso e' finito? Vuoi aiutarmi a sviluppare un Poker virtuale?",
        isOurMessage: false,
      },
      {
        text: "Ciao come va'?",
        isOurMessage: false,
      },
    ],
    2: [
      { text: "ma il tag textarea ha un'azione di default?", isOurMessage: true },
      {
        text: "Il tag <textarea> in HTML e' utilizzato per creare un campo di testo multi-linea all'interno  di modulo di modulo di modulo di modulo di modulo di modulo di modulo di modulo di modulo di di modulo di di modulo di di modulo di......",
        isOurMessage: false,
      },
      { text: "? nn h cpt", isOurMessage: true },
    ],
    3: [
      {
        text: "GUEST LECTURE! È con grande entusiasmo che vi invitiamo alla Guest Lecture di questo fantastico giovedì 25 gennaio, dalle 15:30 alle 16:30, saremo onorati di avere come ospite un ospite, esperto di qualcosa. Questo appuntamento sarà un'occasione unica per immergersi nel mondo dell'innovazione da una prospettiva privilegiata.",
        isOurMessage: false,
      },
      { text: "C'e' la build week questa settimana... :'(", isOurMessage: true },
    ],
    4: [
      { text: "POST!", isOurMessage: true },
      {
        text: "Access to fetch at 'https://striveschool-api.herokuapp.com/api/profile/65ae766c600be100183a86c7/picture' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.",
        isOurMessage: false,
      },
      { text: "PUT...", isOurMessage: true },
      { text: "ERR_FAILED 503 (Service Unavailable)", isOurMessage: false },
      { text: "GET?", isOurMessage: true },
      { text: "ERR_FAILED 429 “Too Many Requests”", isOurMessage: false },
      { text: "......", isOurMessage: true },
      { text: "ERR_FAILED 404 NOT FOUND!", isOurMessage: false },
    ],
  };

  const handleUserClick = (userId) => {
    setSelectedUser(userId);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <Card className="mt-3" style={{ height: "90vh" }}>
            <Card.Body className="ps-2">
              <Row>
                <Col sm={5} className="ps-1">
                  <Card.Header className="bg-transparent pt-0 mt-0">Messaggistica</Card.Header>
                  <ListGroup className="border-0 rounded-0">
                    {users.map((user) => (
                      <ListGroup.Item
                        key={user.id}
                        className="border-0 border-bottom"
                        active={selectedUser === user.id}
                        onClick={() => handleUserClick(user.id)}
                        action
                      >
                        <img
                          src={user.profileImage}
                          alt={user.name}
                          style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "10px" }}
                        />
                        {user.name}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
                <Col sm={7}>
                  {selectedUser && messages[selectedUser] ? (
                    <div>
                      <h5>Chat con {users.find((u) => u.id === selectedUser)?.name}</h5>
                      <div>
                        {messages[selectedUser].map((message, index) => (
                          <div
                            key={index}
                            className={`p-2 my-1 rounded ${
                              message.isOurMessage ? "bg-primary text-white ml-auto" : "bg-light"
                            }`}
                            style={{ maxWidth: "75%", clear: "both", float: message.isOurMessage ? "right" : "left" }}
                          >
                            {message.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p>Seleziona un utente per visualizzare i messaggi.</p>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/*  */}
        <Col md={4} className="d-none d-md-block">
          <Card className="pb-2 mt-3">
            <Card.Body>
              <Card.Text className="text-center lead" style={{ fontSize: "12px" }}>
                Enjoy 50% off 2 months of Linkedin Premium!
              </Card.Text>
              <div className="d-flex justify-content-center">
                <img src={Premium} alt="linkedin-premium" style={{ width: "60px" }} />
              </div>
              <Card.Text className="text-center lead mt-4 fs-6">Get a boost with this exclusive offer.</Card.Text>
              <Card.Link href="#">
                <div className="text-center">
                  <Button variant="outline-primary" className="rounded-5 px-3 border-1 py-1 fw-bolder custom-button-2">
                    Get 50% today
                  </Button>
                </div>
              </Card.Link>
            </Card.Body>
          </Card>
          <Col xs={12}>
            <SidebarFooter />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default MessaggisticaComponent;