import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/profileComponents/Profile";
import Rete from "./components/networkComponents/Rete";
import MyNav from "./components/MyNav";
import Home from "./components/homeComponents/Home";
import NewsSide from "./components/homeComponents/NewsSide";
import { Container, Row, Col } from "react-bootstrap";
import Lavoro from "./components/lavoroComponents/Lavoro";
import JobSpecifics from "./components/lavoroComponents/JobSpecifics";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MessaggisticaComponent from "./components/MessaggisticaComponent";

function App() {
  return (
    <Router>
      <div>
        <MyNav />
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <Row>
                  <Col className="col-md-12 col-lg-8">
                    <Home />
                  </Col>
                  <Col className="d-none d-lg-block col-lg-4">
                    <NewsSide />
                  </Col>
                </Row>
              </Container>
            }
          />
          <Route path="/network" element={<Rete />} />
          <Route path="/work" element={<Lavoro />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/job/:categoryOrCompany" element={<JobSpecifics />} />
          <Route path="/messaggistica" element={<MessaggisticaComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
