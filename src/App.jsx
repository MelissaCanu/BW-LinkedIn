import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/profileComponents/Profile";
// import Rete from "./components/networkComponents/Rete";
import MyNav from "./components/MyNav";
// import FormHome from "./components/homeComponents/FormHome";
import Home from "./components/homeComponents/Home";
import NewsSide from "./components/homeComponents/NewsSide";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div>
      <MyNav />
      <Profile />
      <Row>
        <Col xs={8}>
          <Home />
        </Col>
        <Col xs={2}>
          <NewsSide />
        </Col>
      </Row>
    </div>
  );
}

export default App;
