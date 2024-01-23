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
  }, [userId, token, dispatch]);

  const handleAddOrUpdateExperience = () => {
    if (currentExperience._id) {
      dispatch(updateExperience(userId, token, currentExperience._id, currentExperience));
    } else {
      dispatch(addExperience(userId, token, currentExperience));
    }
    setShowModal(false);
    setCurrentExperience({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
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
          <Modal.Title>{currentExperience._id ? "Modifica Esperienza" : "Aggiungi Esperienza"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={currentExperience.role}
                onChange={handleInputChange}
                required
              />

              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={currentExperience.company}
                onChange={handleInputChange}
                required
              />

              <Form.Label>Data di inizio</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={currentExperience.startDate}
                onChange={handleInputChange}
                required
              />

              <Form.Label>Data di fine (o prevista)</Form.Label>
              <Form.Control type="date" name="endDate" value={currentExperience.endDate} onChange={handleInputChange} />

              <Form.Label>Luogo</Form.Label>
              <Form.Control
                type="text"
                name="area"
                value={currentExperience.area}
                onChange={handleInputChange}
                required
              />

              <Form.Label>Immagine</Form.Label>
              <Form.Control type="text" name="image" value={currentExperience.image} onChange={handleInputChange} />

              <Form.Label>Descrizione</Form.Label>
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
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleAddOrUpdateExperience}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default ExperienceComponent;
