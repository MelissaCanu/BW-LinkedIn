import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Badge, Dropdown, Toast } from "react-bootstrap";
import { FaBell } from "react-icons/fa";
import "/Users/egidio/Desktop/4_Settimana_Build Week/bw-linkedin/src/assets/style/notifications.css";
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Notifications = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: "Hai nuove connessioni", time: "2h fa" },
    { id: 2, text: "Il tuo post è stato visualizzato 1000 volte", time: "4h fa" },
  ];

  const handleToggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <Container>
      <Row className="my-3">
        <Col md={4} lg={2} className="d-none d-md-inline small">
          <Card>
            <Card.Body>
              <span>
                <strong>Gestisci le tue notifiche</strong>
              </span>
              <br />
              <a href="/*" className="text-decoration-none">
                <span className="text-primary">Impostazioni</span>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} lg={6}>
          <Card className="mb-3">
            <Card.Body>
              <Button variant="success" className="fw-bold rounded-5 px-3 py-1 me-2">
                Tutto
              </Button>
              <Button variant="outline-dark" className="fw-bold rounded-5 px-3 py-1 me-2">
                I miei post
              </Button>
              <Button variant="outline-dark" className="fw-bold rounded-5 px-3 py-1 me-2">
                Menzioni
              </Button>
            </Card.Body>
          </Card>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1" style={{ borderBottom: "0", borderRadius: "10px 10px 0px 0px" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-white fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-white fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-white fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1" style={{ borderTop: "0", borderRadius: "0px 0px 10px 10px" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-white fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong>ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={4} className="d-none d-lg-inline">
          <Card>
            <Card.Body>Pubblicità</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Notifications;
