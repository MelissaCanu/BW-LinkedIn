import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";
import Rete from "./components/Rete";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div>
      <MyNav />
      <Rete />
      <Profile />
    </div>
  );
}

export default App;
