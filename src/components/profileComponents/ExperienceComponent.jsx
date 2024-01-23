import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Card, Button, Modal, Form } from "react-bootstrap";
import { PlusLg, PencilFill, Trash } from "react-bootstrap-icons";
import {
  fetchExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
} from "../../redux/actions/experienceAction";

const ExperienceComponent = ({ userId, token }) => {
  const dispatch = useDispatch();
  const { experiences } = useSelector((state) => state.experience);
  const [showModal, setShowModal] = useState(false);

  const [currentExperience, setCurrentExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    image: "",
    _id: null,
  });

  useEffect(() => {
    if (userId && token) {
      dispatch(fetchExperiences(userId, token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddOrUpdateExperience();
  };

  const handleAddOrUpdateExperience = () => {
    const action = currentExperience._id
      ? updateExperience(userId, token, currentExperience._id, currentExperience)
      : addExperience(userId, token, currentExperience);
    console.log("Fetch exp", experiences);

    dispatch(action)
      .then(() => {
        dispatch(fetchExperiences(userId, token));
        setShowModal(false);
        setCurrentExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
      })
      .catch((error) => {
        console.error("Errore nell'aggiornamento dell'esperienza:", error);
      });
  };

  const handleInputChange = (e) => {
    setCurrentExperience({ ...currentExperience, [e.target.name]: e.target.value });
  };

  const handleDeleteExperience = (expId) => {
    dispatch(deleteExperience(userId, token, expId));
  };

  const toShortDate = (isoDate) => {
    return isoDate ? isoDate.split("T")[0] : "";
  };

  console.log("Aggiornamento Esperienze:", experiences);
  return (
    <Col xs={12}>
      <Card className="mt-2">
        <Card.Body className="pb-0">
          <div className="d-flex justify-content-between">
            <Card.Title className="mb-4">Esperienze</Card.Title>
            <Button
              variant="link"
              onClick={() => {
                setShowModal(true);
                setCurrentExperience({
                  role: "",
                  company: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                  area: "",
                });
              }}
            >
              <PlusLg className="text-secondary fs-3" />
            </Button>
          </div>
          {experiences.map((exp) => (
            <div key={exp._id} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>
                    {exp.image} {exp.role} - {exp.company}
                  </Card.Title>
                  <Card.Text>
                    {toShortDate(exp.startDate)} - {toShortDate(exp.endDate) || ""}
                  </Card.Text>
                  <Card.Text>{exp.description}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="link"
                      onClick={() => {
                        setShowModal(true);
                        setCurrentExperience({
                          ...exp,
                          startDate: toShortDate(exp.startDate),
                          endDate: toShortDate(exp.endDate),
                        });
                      }}
                    >
                      <PencilFill className="text-secondary fs-4" />
                    </Button>
                    <Button variant="link" onClick={() => handleDeleteExperience(exp._id)}>
                      <Trash className="text-danger fs-4" />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Card.Body>
      </Card>

      {/* Modal per aggiungere o modificare un'esperienza */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">
            {currentExperience._id ? "Modifica Esperienza" : "Aggiungi Esperienza"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div></div>
            <Form.Group className="mb-3">
              <Form.Label className="lead fs-6">Ruolo</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={currentExperience.role}
                onChange={handleInputChange}
                required
              />

              <Form.Label className="lead fs-6 mt-2">Azienda</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={currentExperience.company}
                onChange={handleInputChange}
                required
              />

              <Form.Label className="lead fs-6 mt-2">Data di inizio</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={currentExperience.startDate}
                onChange={handleInputChange}
                required
              />

              <Form.Label className="lead fs-6 mt-2">Data di fine (o prevista)</Form.Label>
              <Form.Control type="date" name="endDate" value={currentExperience.endDate} onChange={handleInputChange} />

              <Form.Label className="lead fs-6">Luogo</Form.Label>
              <Form.Control
                type="text"
                name="area"
                value={currentExperience.area}
                onSubmit={handleInputChange}
                required
              />

              <Form.Label className="lead fs-6 mt-2">Immagine</Form.Label>
              <Form.Control type="text" name="image" value={currentExperience.image} onChange={handleInputChange} />

              <Form.Label className="lead fs-6 mt-2">Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={currentExperience.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="rounded-5 px-4" onClick={handleAddOrUpdateExperience}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default ExperienceComponent;
