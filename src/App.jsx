import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/profileComponents/Profile";
import Rete from "./components/networkComponents/Rete";
import MyNav from "./components/MyNav";
import Home from "./components/homeComponents/Home";
import NewsSide from "./components/homeComponents/NewsSide";
import { Container, Row, Col } from "react-bootstrap";
import Lavoro from "./components/lavoroComponents/Lavoro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notifications from "./components/Notifications";

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
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
