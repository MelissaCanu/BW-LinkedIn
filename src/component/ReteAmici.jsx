import { Row, Image, Card, Col, Button } from "react-bootstrap";

const ReteAmici = () => {
  return (
    <>
      <h3 className="mt-3">Persone che segui</h3>
      <div className="border border-1 rounded-4 shadow p-3 mt-3 bg-light">
        <Row className="row-cols-3 row-cols-md-4 gy-3">
          {/* qua facciamo il map dei seguiti */}
          {/* {seguiti.map((elem, i) => ( */}
          <Col
          // key={elem.qualcosa}
          >
            <Card>
              <div style={{ position: "relative" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1705844996076-eaf8cfad3a16?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ position: "relative", object: "cover" }}
                  height="60px"
                />
                {/* gli src ovviamente sono da cambiare, vi voglio bene */}
                <Image
                  src="https://images.unsplash.com/photo-1705779235006-4111cb1a889e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
                  roundedCircle
                  style={{
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    bottom: "-40px",
                    left: "20%",
                    marginLeft: "-40px",
                  }}
                  className="shadow"
                />
              </div>
              <Card.Body className="text-center mt-5">
                <Card.Title
                  className="text-truncate"
                  style={{ cursor: "pointer" }}
                  // qua ci va l'onclick per navigare ai profili, o almeno credo
                >
                  Giorgia Sorella
                  {/* qua ci vanno i nomi variabili, vabe non ve lo devo spiegare io,lo sapete */}
                </Card.Title>
                <Card.Text className="text-truncate">Persona molto simpatica</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button variant="outline-secondary" className="rounded-4 py-1 mt-2">
                  {/* ovviamente pure qua ci va l'onclick, credo, vedremo */}
                  Segui Gia'
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          {/* ))} */}
        </Row>
      </div>
      <h3>Persone che potresti conosce, calde e vicino a te</h3>
      <div className="border border-1 rounded-4 shadow p-3 mt-3 bg-light">
        <Row className="row-cols-3 row-cols-md-4 gy-3">
          {/* qua famo il map, */}
          <Col>
            <Card>
              <div style={{ position: "relative" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1705773335937-17e1ff6fac10?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ position: "relative", objectFit: "cover" }}
                  height="60px"
                />
                <Image
                  src="https://images.unsplash.com/photo-1705418511673-786fc03b913c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  roundedCircle
                  style={{
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    bottom: "-40px",
                    left: "20%",
                    marginLeft: "-40px",
                  }}
                  className="shadow"
                />
              </div>
              <Card.Body className="text-center mt-5">
                <Card.Title className="text-truncate" style={{ cursor: "pointer" }}>
                  Signor Pinguino
                </Card.Title>
                <Card.Text className="text-truncate">Scivola sempre</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button variant="outline-primary" className="rounded-4 py-1 mt-2">
                  Segui
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ReteAmici;
